@extends('layouts.mlayout')

@section('content')
    
    
    <section id="product-content">
        <div class="pizza-content">
            <div class="product-img">
                <img src="/storage/product_covers/{{ $product->cover }}" alt="">
            </div>
            <div class="info">
                <h2 class="info-title">Name:</h2>
                <br>
                <h2 class="pizza-name">{{ $product->productName }}</h2>
                <br>
                <br>
                <h2 class="info-title">Description:</h2>
                <br>
                <h4> {{ $product->description }} </h4>
                <br>
                <br>
                <h2 class="info-title">Price: </h2>
                <h2 class="pizza-name">{{ $product->price }} €</h2>
                <br>
                <a class="order-btn" href="/cartadd/{{ $product->product_id }}">Add to cart</a>
            </div>
        </div>
    </section>

    @if(Session::get('productNo') != 0)
    <section id="menu-content">
        <!--<div class="bg-image"></div>
        <div class="mask"></div>-->
        <div class="container">
            <div class="title">
                <h2>Menu</h2>    
            </div>
            <div class="menu">       
                @foreach($products as $product)
                <article>
                    <img src="/storage/product_covers/{{ $product->cover }}" alt="pizza image">
                    <h2>{{ $product->productName }}</h2>
                    <p>{{ $product->description }}</p>
                    <a class="order-btn" href="/product/{{ $product->product_id }}">More</a>
                </article>
                @endforeach
            </div>
        </div>
    </section>
    @else
    @endif

@endsection