@extends('layouts.dashboard')

@section('content')
    
    <div class="productform-content">
        <div class="product-form">
            <form action=" {{ route('editProductValues') }} " method="POST">
                <p>Product name</p>
                
                <input class="product-form-name" type="text" name="productName" value="{{ $product->productName }}">
                @error('productName')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <p>Product price</p>
                
                <input class="product-form-price" type="number" name="productPrice" value="{{ $product->price }}">
                @error('productPrice')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <p>Product description</p>
                
                <textarea class="product-form-description" name="productDescription" cols="30" rows="10" value="" maxlength="300">{{ $product->description }}</textarea>
                @error('productDescription')
                    <p class="error-message">{{ $message }}</p>
                    <br>
                @enderror
                <input type="hidden" name="productId" value="{{ $product->product_id }}">
                <input type="hidden" name="_token" value=" {{ Session::token() }} ">
                <button class="product-form-edit" type="submit" name="submit">Edit</button>

            </form>
            <!--<form action=" {{ route('removeProduct') }} " method="POST">
                <input type="hidden" name="productId" value="{{ $product->product_id }}">
                <input type="hidden" name="_token" value=" {{ Session::token() }} ">
                <button class="product-form-edit" type="submit" name="submit">Remove</button>
            </form>-->
        </div>
    </div>
    
@endsection
