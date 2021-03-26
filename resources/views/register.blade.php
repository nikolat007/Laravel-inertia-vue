@extends('layouts.mlayout')

@section('content')
    
    <section id="form-content" class="register">
    <form action=" {{ route('userRegister') }} " method="POST" x-data=" { button_loader: false } ">
        <div class="form-header"><h2>Register</h2></div>
        <label for="firstname">First name:</label>
        <input type="text" class="form-input-style" placeholder="Your first name" name="firstname" autocomplete="off">
        @error('firstname')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <label for="lastname">Last name:</label>
        <input type="text" class="form-input-style" placeholder="Your last name" name="lastname" autocomplete="off">
        @error('lastname')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <label for="email">Email:</label>
        <input type="email" class="form-input-style" placeholder="Your email address" name="email" autocomplete="off">
        @error('email')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <label for="password">Password:</label>
        <input type="password" class="form-input-style" placeholder="Your password" name="password">
        @error('password')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <label for="contactNumber">Contact number:</label>
        <input type="number" class="form-input-style" placeholder="Your contact number" name="contactNumber">
        @error('contactNumber')
            <p class="error-message">{{ $message }}</p>
        @enderror
        <br>
        <button @click="button_loader = true" x-show="button_loader == false" type="submit" class="form-button-style login" value="" name="submit">REGISTER</button>
        <button x-show="button_loader" class="form-button-style login" type="submit" disabled="true" x-cloak >
            <i class="fa fa-circle-notch fa-spin"></i>
        </button>
        <br>
        <input type="hidden" name="_token" value=" {{ Session::token() }} ">
        <a href="/login">Already registered?</a>
    </form>
    </section>

@endsection