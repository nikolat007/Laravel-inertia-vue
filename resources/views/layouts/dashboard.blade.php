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
    <script defer src="{{ asset('css/all.css') }}"></script>
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
                    <li><a href="{{url('/')}}">Home</a></li>
                    <li id="dashboard-menu-item" class=
                    @if(Session::get('page') == 'dashboard')
                    "selected"
                    @endif><a href="{{ route('dashboard') }}">Info</a></li>
                    <li id="dashboard-menu-item" class=
                    @if(Session::get('page') == 'users')
                    "selected"
                    @endif><a href="{{ route('userList') }}">Users</a></li>
                    <li id="dashboard-menu-item" class=
                    @if(Session::get('page') == 'orders')
                    "selected"
                    @endif><a href="{{ route('orderList') }}">Pending orders</a></li>
                    <li id="dashboard-menu-item" class=
                    @if(Session::get('page') == 'confirmed-orders')
                    "selected"
                    @endif><a href="{{ route('corderList') }}">Confirmed orders</a></li>
                    <li id="dashboard-menu-item" class=
                    @if(Session::get('page') == 'products')
                    "selected"
                    @endif><a href="{{ route('productList') }}">Products</a></li>
                    <li id="dashboard-menu-item" class=
                    @if(Session::get('page') == 'addnewproduct')
                    "selected"
                    @endif><a href="{{ route('addnewProduct') }}">Add product</a></li>
                </ul>
                <div class="menu-trigger"><i class="fas fa-bars"></i></div>
            </nav>
        </div>
    </header>

    <section class="dashboard">
        <div class="sidebar">
            <div class="dashboard-title">
                <h1>Admin Panel</h1>
            </div>
            <div class="dashboard-menu">
                <ul>
                    <li class=
                    @if(Session::get('page') == 'dashboard')
                    "selected"
                    @endif><a href="{{ route('dashboard') }}"><i class="fas fa-home fa-fw"></i>Info</a></li>
                    <li class=
                    @if(Session::get('page') == 'users')
                    "selected"
                    @endif><a href="{{ route('userList') }}"><i class="fas fa-users fa-fw"></i>Users</a></li>
                    <li class=
                    @if(Session::get('page') == 'orders')
                    "selected"
                    @endif><a href="{{ route('orderList') }}"><i class="fas fa-pallet fa-fw"></i>Pending orders</a></li>
                    <li class=
                    @if(Session::get('page') == 'confirmed-orders')
                    "selected"
                    @endif><a href="{{ route('corderList') }}"><i class="fas fa-shopping-cart fa-fw"></i>Confirmed orders</a></li>
                    <li class=
                    @if(Session::get('page') == 'products')
                    "selected"
                    @endif><a href="{{ route('productList') }}"><i class="fas fa-utensils fa-fw"></i>Products</a></li>
                    <li class=
                    @if(Session::get('page') == 'addnewproduct')
                    "selected"
                    @endif><a href="{{ route('addnewProduct') }}"><i class="fas fa-plus-circle fa-fw"></i>Add product</a></li>
                </ul>
            </div>
        </div>

        <div class="page-content">
            @yield('content')
        </div>
    </section>

<script src="{{ asset ('js/jquery.js') }}"></script>  
<script src="{{ asset ('js/timeago.js') }}"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>
<script type="text/javascript" src="{{ asset ('js/responsive-menu.js') }}">
</script>
<script>
     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#file_upload')
                        .attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
</script>

@yield('script')

</body>

</html>