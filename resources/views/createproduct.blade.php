@extends('layouts.dashboard')

@section('content')
    
    <div class="productform-content">
        <div class="product-form">
            <form action=" {{ route('addProduct') }} " method="POST" enctype="multipart/form-data">
                <p>Product name</p>
                
                <input class="product-form-name" type="text" name="productName" value="" placeholder="Enter product name">
                @error('productName')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <p>Product price</p>
                
                <input class="product-form-price" type="number" name="productPrice" value="" placeholder="Enter product price">
                @error('productPrice')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <p>Product description</p>
                
                <textarea class="product-form-description" placeholder="Enter product description" name="productDescription" cols="30" rows="10" value="" maxlength="300"></textarea>
                @error('productDescription')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <p>Pizza image</p>
                <br>
                <div class="input-file">
                    <img id="file_upload" src="http://placehold.it/100" alt="your image" class="upload-img" />
                    <div class="input-file-upload">
                        <span class="upload-label">Upload Image</span>
                        <input type='file' name="pizza_cover" onchange="readURL(this);" accept="image/*" />
                    </div>
                </div>
                @error('pizza_cover')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <input type="hidden" name="_token" value=" {{ Session::token() }} ">
                <button class="product-form-edit" type="submit" name="submit">Add product</button>
            </form>
        </div>
    </div>
    
@endsection
