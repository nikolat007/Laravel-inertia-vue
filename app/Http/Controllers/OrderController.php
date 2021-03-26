<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShoppingCart;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Notification;
use App\Notifications\NewOrderNotification;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function __construct(){

        $this->middleware('auth');

    }


    public function order(Request $request){
        $shoppingCartEmpty = ShoppingCart::where('user_id', Auth::user()->id)->count();

        if($shoppingCartEmpty != 0)
        {
            $this->validate($request, [
                'physicalAddress' => 'required|min:5',
            ]);
            
            $getOrderedProducts = ShoppingCart::where('user_id', Auth::user()->id)->pluck('product_id');
            $getOrderedQuantities = ShoppingCart::where('user_id', Auth::user()->id)->pluck('quantity');
            
            $order = new Order();
            $order->user_id = Auth::user()->id;
            $order->user_name = Auth::user()->firstName;
            $order->user_lastname = Auth::user()->lastName;
            $order->user_email = Auth::user()->email;
            $order->ordered_products = $getOrderedProducts;
            $order->ordered_quantities = $getOrderedQuantities;
            $order->price = $request['price'];
            $order->physical_address = $request['physicalAddress'];
            $order->contact_number = Auth::user()->contactNumber;
            $order->save();

            $removeCart = ShoppingCart::where('user_id', Auth::user()->id)->delete();

            Session::put('OrderConfirmation', true);

            $orderDetails = Order::where('user_id', Auth::user()->id)->latest()->first();
            $admin = User::where('id', 1)->get();
            $user = Auth::user();
            Notification::send($admin, new NewOrderNotification($user, $orderDetails->id));

            return redirect()->route('orderConfirmation');
        }
        else{
            return redirect()->route('cart')->with(['errorMessage' => 'Cart is empty.']);
        }
    }

    public function confirm(){
        if(Session::get('OrderConfirmation') == true){
            $productNames = [];

            $orderDetails = Order::where('user_id', Auth::user()->id)->latest()->first();
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
        }
        else{
            return redirect()->route('home');
        }        

        return Inertia::render('Confirmation', ['printOrderDetails' => $printOrderDetails, 'price' => $price]);
    }
}
