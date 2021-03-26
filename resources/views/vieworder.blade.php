@extends('layouts.dashboard')

@section('content')

    <section id="order-content">
        <div class="shopping-cart-order">
            <div class="div cart-header">
                <h3>Order Details</h3>
            </div>
            <div class="message">
                <p><b>Name:</b> {{ $orderDetails->user_name }} {{ $orderDetails->user_lastname }}</p>
                <p><b>Email:</b> {{ $orderDetails->user_email }} </p>
                <p><b>Physical address:</b> {{ $orderDetails->physical_address }}</p>
                <p><b>Contact number:</b> {{ $orderDetails->contact_number }}</p>
            </div>
            {{ Session::forget('OrderConfirmation') }}
            <table class="list">
                <tr class="titles">
                    <th>
                    Name
                    </th>
                    <th>
                    Quantity
                    </th>
                    <th>
                    Price
                    </th>
                </tr>
                @foreach($printOrderDetails as $key => $value)
                <tr class="item">
                    <th id="name-color">
                        {{ $key }}
                    </th>
                    <th>
                        {{ $printOrderDetails[$key] }}
                    </th>
                    <th id="price">
                         
                    </th>
                </tr>
                @endforeach
                <tr class="item">
                    <th></th>
                    <th></th>
                    <th class="calc-price">{{ $price }} $</th>
                </tr>
                </table>
            <br>
            <a class="cart-home" href=" {{ route('orderList') }} ">Back</a>
            @if($orderDetails->status == 'pending')
                <form action=' {{ route('confirmOrder') }} ' method='post'> 
                    <input type='hidden' value='{{ $orderDetails->id }}' name='orderid'> 
                    <input type='hidden' name='_token' value=' {{ Session::token() }} '> 
                    <button class='cart-home' type='submit' name='submit'>Confirm order</button> 
                </form>
            @endif
        </div>
    </section>
    
@endsection
