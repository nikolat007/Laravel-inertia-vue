<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShoppingCart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CartController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function cart(){
        $cartItems = ShoppingCart::with('product')->where('user_id', Auth::user()->id)->get();
        $cartItemNo = ShoppingCart::where('user_id', Auth::user()->id)->get()->count();
        Session::put('cartItemNo', $cartItemNo);
        return Inertia::render('Cart', ['cartItem' => $cartItems]);
    }

    public function cartAdd($id){
        $query = ['user_id' => Auth::user()->id, 'product_id' => $id];
        $oldItem = ShoppingCart::where($query)->get()->count();
        if($oldItem == 1){
            $oldItem = ShoppingCart::where($query)->first();
            $oldItem->quantity++;
            $oldItem->update();
            return redirect()->route('cart')->with(['message' => 'Cart has been updated.']);
        }
        else{
            $ShoppingCart = new ShoppingCart();
            $ShoppingCart->user_id = Auth::user()->id;
            $ShoppingCart->product_id = $id;
            $ShoppingCart->quantity = 1;
            $ShoppingCart->save();
    
            return redirect()->route('cart')->with(['message' => 'Product has been sucessfully added in your cart.']);
        }
    }

    public function cartIncreaseQuantity($id){
        $query = ['user_id' => Auth::user()->id, 'id' => $id];
        $oldItem = ShoppingCart::where($query)->get()->count();
        if($oldItem == 1){
            $oldItem = ShoppingCart::where($query)->first();
            $oldItem->quantity++;
            $oldItem->update();
        }
        else{

        }
        return redirect()->back();
    }

    public function cartDecreaseQuantity($id){
        $query = ['user_id' => Auth::user()->id, 'id' => $id];
        $oldItem = ShoppingCart::where($query)->get()->count();
        if($oldItem == 1){
            $oldItem = ShoppingCart::where($query)->first();
            if($oldItem->quantity < 1){
                $oldItem->quantity = 1;
            }
            else{
                $oldItem->quantity--;
            }
            $oldItem->update();
        }
        else{

        }
        return redirect()->back();
    }

    public function removeItem($id){
        $itemID = $id;
        $item = ShoppingCart::where('id', $itemID)->first();
        $item->delete();
        return redirect()->route('cart')->with(['message' => 'Product has been sucessfully removed.']);
    }
}
