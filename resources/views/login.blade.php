@extends('layouts.mlayout')

@section('content')
    
    <section id="form-content" class="login">
    <form action="{{ route('userLogin') }}" method="POST" x-data=" { button_loader: false } ">
        <div class="form-header"><h2>Welcome back, please login</h2></div>
        
        @if(Session::has('danger-message'))
        <p class="error-message">{{ Session::get('danger-message') }}</p>
        @endif
        <label for="email">Email:</label>
        <input type="email" class="form-input-style" placeholder="Your email adress" name="email" autocomplete="off">
        @error('email')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <label for="password">Password</label>
        <input type="password" class="form-input-style" placeholder="Your password" name="password">
        @error('password')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <button @click="button_loader = true" x-show="button_loader == false" type="submit" class="form-button-style login" value="" name="submit">LOGIN</button>
        <button x-show="button_loader" class="form-button-style login" type="submit" disabled="true" x-cloak >
            <i class="fa fa-circle-notch fa-spin"></i>
        </button>
        <br>
        <input type="hidden" name="_token" value=" {{ Session::token() }} ">
        <a class="register" href="/register">Your first time here? Please register.</a>
    </form>
    </section>

@endsection