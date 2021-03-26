<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadfile(Request $request){
        if($request->hasFile('pizza_cover')) {
            $file = $request->file('pizza_cover');
            $filename = $file->getClientOriginalName();
            $file->storeAs('public/product_covers/tmp/', $filename);

            return $filename;
        }

        return '';
    }
}
