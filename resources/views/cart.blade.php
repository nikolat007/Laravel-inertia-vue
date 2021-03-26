@extends('layouts.mlayout')

@section('content')
    
    <section id="cart-content">
        
        <div class="shopping-cart">
            @php $calculatedPrice = 0 @endphp

            <div class="div cart-header">
                <h3>Your shopping cart</h3>
                
            </div>
            @if(Session::has('error-message'))
                <p class="message message-error">{{ Session::get('error-message') }}</p>
            @endif
            @if(Session::has('message'))
                <p class="message message-success">{{ Session::get('message') }}</p>
            @endif
            <table class="list">
            <tr class="titles">
                <th>
                Name
                </th>
                <th>
                Quantity
                </th>
                <th>
                Sub-total
                </th>
                <th>
                Action
                </th>
            </tr>

            @if(Session::get('cartItemNo') == 0)
                <tr class="no-item">
                    <th><p>No items to display<p></th>
                </tr>
            @else
            @foreach($cartItem as $cartItem)
                <tr class="item">
                    <th id="name-color">
                        <p>{{ $cartItem->product->productName }}</p>
                    </th>
                    <th>
                        <p>{{ $cartItem->quantity }}</p>
                    </th>
                    <th id="price">
                        <p>{{ $cartItem->product->price * $cartItem->quantity }} €</p>
                    </th>
                    <th id="action">
                        <form action="{{ route('removeItem') }}" method="post">
                            <input type="hidden" value="{{ $cartItem->id }}" name="itemid">
                            <input type="hidden" name="_token" value=" {{ Session::token() }} ">
                            <button class="remove-button" type="submit">X</button>
                        </form>
                        
                    </th>

                    @php $calculatedPrice = $calculatedPrice + $cartItem->product->price * $cartItem->quantity @endphp

                </tr>
                
                @endforeach
                <tr >
                    <th></th>
                    <th></th>
                    <th class="calc-price">Total: {{ $calculatedPrice }} €</th>
                </tr>
            @endif
            
            </table>

            <a class="add-more" href="/products">+</a>
            <br>
            @if(Session::get('cartItemNo') != 0)
            <form class="adress" action="{{ route('order') }}" method="POST">
                <input type="text" class="input-address" name="physicalAddress" placeholder="Please, type your physical address">
                <input type="hidden" class="input-address" name="price" value="{{ $calculatedPrice }}">
                <br>
                @error('physicalAddress')
                <div class="alert">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    <strong>Warning:</strong> {{ $message }}
                </div>
                @enderror
                <br>
                <input type="hidden" name="_token" value=" {{ Session::token() }} ">
                <input class="cart-order" type="submit" value="Order">
            </form>
            @endif
            
        </div>
        
    </section>

@endsection
