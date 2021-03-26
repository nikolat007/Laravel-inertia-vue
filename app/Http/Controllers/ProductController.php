<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
    public function list(){
        $product = Product::all();
        $productNo = Product::all()->count();
        Session::put('productNo', $productNo);
        return view('products', ['product' => $product]);
    }

    public function listProduct($id){
        $products = Product::all();
        $product = Product::where('product_id', $id)->first();
        return view('product', ['product' => $product, 'products' => $products]);
    }
}
