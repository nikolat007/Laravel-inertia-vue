@extends('layouts.mlayout')

@section('content')
       
    <section id="profile-content">
        
        <div class="profile">
            <div class="icon"></div>
            <h2>{{ Auth::user()->firstName }} {{ Auth::user()->lastName }}</h2>
            <div class="info">
                <div class="info-block"><h5>Email: {{ Auth::user()->email }}</h5></div>
                <div class="info-block"><h5>Contact Number: {{ Auth::user()->contactNumber }}</h5></div>
            
                <a class="profile-button button-cart" href="{{url('/cart')}}">Shopping cart</a>
                <a class="profile-button button-logout" href="{{url('/logout')}}">Logout</a>
            
            </div>
        
        </div>
    </section>

@endsection
