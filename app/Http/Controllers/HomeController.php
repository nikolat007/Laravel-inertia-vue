<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home(){
        $product = Product::all();
        $productNo = Product::all()->count();
        Session::put('productNo', $productNo);
        return Inertia::render('Home', [
            'product' => $product
        ]);
    }
}
