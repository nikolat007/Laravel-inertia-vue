<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function __construct(){

        $this->middleware('auth');
        
    }

    public function index(){
        
        Session::put('page', 'dashboard');
        return Inertia::render('Dashboard/Info');
    }

    public function userlist(){
        
        Session::put('page', 'users');
        return Inertia::render('Dashboard/Users');
    }

    public function orderlist(){
        
        Session::put('page', 'orders');
        return Inertia::render('Dashboard/Pendingorders');
    }

    public function confirmOrder(Request $request){
        $order_id = $request->orderid;

        $order = Order::where('id', $order_id)->first();
        $order->status = 'confirmed';
        $order->update();
        return redirect()->route('orderList');
    }

    public function confirmedorderlist(){
        
        Session::put('page', 'confirmed-orders');
        return Inertia::render('Dashboard/Confirmedorders');
    }


    public function productlist(){
        
        Session::put('page', 'products');
        $products = Product::all();
        return Inertia::render('Dashboard/Products');
    }

    public function addnewproduct(){
        
        Session::put('page', 'addnewproduct');
        return view('createproduct');
    }

    public function vieworder(Request $request){
        $order_id = $request->orderid;
        $productNames = [];
        $orderDetails = Order::where('id', $order_id)->get()->first();
        $price = $orderDetails->price;
        $productIDs = $orderDetails->ordered_products;
        $idArray = $productIDs = trim($productIDs, "[]");
        $idArray = explode(",", $productIDs);
        $orderQuantities = $orderDetails->ordered_quantities;
        $orderQuantities = trim($orderQuantities, "[]");
        $orderQuantities = explode(",", $orderQuantities);
        $getProductName = Product::whereIn('product_id', $idArray)->orderByRaw("FIELD(product_id, $productIDs)")->get();
        foreach($getProductName as $key => $value){
            $productNames[] = $value['productName'];
        }
        $printOrderDetails = array_combine($productNames, $orderQuantities);      

        return view('vieworder', ['printOrderDetails' => $printOrderDetails, 'price' => $price, 'orderDetails' => $orderDetails]);
    }

    public function readUsers(){
        $users = User::latest()->get();
        return response()->json(['data' => $users]);
    }

    public function readpendingOrders(){
        $orders = Order::where('status', 'pending')->latest()->get();
        return response()->json(['data' => $orders]);
    }

    public function readconfirmedOrders(){
        $orders = Order::where('status', 'confirmed')->latest()->get();
        return response()->json(['data' => $orders]);
    }

    public function readProducts(){
        $products = Product::latest()->get();
        return response()->json(['data' => $products]);
    }

    public function removeUser(Request $request){
        $userID = $request->userid;
        $user = User::where('id', $userID)->first();
        $user->delete();
        return redirect()->route('userList');
    }

    public function removeproduct(Request $request){
        $productID = $request->productId;
        $product = Product::where('product_id', $productID)->first();
        $product->shoppingcarts()->delete();
        $product->delete();
        return redirect()->route('productList');
    }


    public function dashboard(){
        $usersNo = User::all()->count();
        $ordersNo = Order::all()->count();
        $profit = Order::where('status', 'confirmed')->sum('price');
        $productsNo = Product::all()->count();
        $notifications = DB::table('notifications')->latest()->take(5)->get()->pluck('data');
        $jsonnotification = array();
        foreach($notifications as $notification)
        {
            $jsonnotification[] = json_decode($notification);
        }
        
        return response()->json([
        'users' => $usersNo, 
        'orders' => $ordersNo, 
        'profit' => $profit, 
        'products' => $productsNo, 
        'notifications' => $jsonnotification
        ]);
    }

    public function editproduct($id){
        $product_id = $id;

        $product = Product::where('product_id', $product_id)->get()->first();

        return view('editproduct', ['product' => $product]);
    }

    public function editproductvalues(Request $request){
        $this->validate($request, [
            'productName' => 'required|min:4',
            'productPrice' => 'required',
            'productDescription' => 'required|min:10',
        ]);

        $productname = $request['productName'];
        $productPrice = $request['productPrice'];
        $productDescription = $request['productDescription'];
        $productID = $request['productId'];

        $product = Product::where('product_id', $productID)->first();

        $product->productName = $productname;
        $product->price = $productPrice;
        $product->description = $productDescription;
        $product->update();

        return redirect()->route('productList');
        
    }

    public function addproduct(Request $request){
        $this->validate($request, [
            'productName' => 'required|min:4',
            'productPrice' => 'required',
            'productDescription' => 'required|min:10',
            'pizza_cover' => 'file|image|required|max:15000|mimes:jpg,png,jpeg'
        ]);
        $productname = $request['productName'];
        $productPrice = $request['productPrice'];
        $productDescription = $request['productDescription'];
        $filenameWithExt = $request->file('pizza_cover')->getClientOriginalName();
        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('pizza_cover')->getClientOriginalExtension();
        $fileNameToStore = $filename.'_'.time().'.'.$extension;
        $path = $request->file('pizza_cover')->storeAs('public/product_covers', $fileNameToStore); 

        $product = new Product();
        $product->productName = $productname;
        $product->price = $productPrice;
        $product->description = $productDescription;
        $product->cover = $fileNameToStore;
        $product->save();

        return redirect()->route('productList');
        
    }


}
