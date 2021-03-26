<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PizzaMaster</title>
    <link rel="icon" href="icon/pizza.png">
    <link rel="icon" href="{{ asset ('icon/pizza.png') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ asset('css/all.css') }}" rel="stylesheet" type="text/css" >
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
</head>



<body>
    <header>
        <div class="container c2r1">
            <div class="title">
                <img src="{{ asset('icon/pizza.svg') }}" height="40px" width="40px">
                <h1>PizzaMaster</h1>
            </div>
            <nav>
                <ul>
                    <li><a class="page-link" href="{{url('/')}}">Home</a></li>
                </ul>
                <div class="menu-trigger"><i class="fas fa-bars"></i></div>
            </nav>
        </div>
    </header>

    @yield('content')
 
<script src="{{ asset ('js/jquery.js') }}"></script>  
<script type="text/javascript" src="{{ asset ('js/responsive-menu.js') }}"></script>

@yield('script')


</body>


</html>