<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PizzaMaster</title>
    <link rel="icon" href="icon/pizza.png">
    <link href="css/all.css" rel="stylesheet">
    <script defer src="js/all.js"></script>
    <link rel="stylesheet" href="css/app.css">
</head>

<body>
    <header class="fixed">
        <div class="container c2r1">
            <div class="title">
                <img src="icon/pizza.svg" height="40px" width="40px">
                <h1>PizzaMaster</h1>
            </div>
            <nav>
                <ul>
                    <li><a class="page-link" href="#welcome">Home</a></li>
                    <li><a class="page-link" href="#menu-content">Menu</a></li>
                    <li><a class="page-link" href="#gallery-content">Gallery</a></li>
                    <li><a class="page-link" href="#our-story">About Us</a></li>
                    <li><a class="page-link" href="#contact">Contact</a></li>
                    @if (Auth::check())
                    
                    <div class="dropdown">
                        <li class="responsive-menu-item-reverse"><a href="/profile" class="sign-up page-link">{{ Auth::user()->firstName }} {{ Auth::user()->lastName }}</a></li>
                        <div class="dropdown-content">
                            @if (Auth::user()->admin == 1)
                                <a href="{{ route('dashboard') }}"><i class="fas fa-tachometer-alt fa-fw"></i> Dashboard</a>
                            @endif
                                <a href="{{ url('/profile') }}"><i class="fas fa-user-circle fa-fw"></i> Profile</a>
                                <a href="{{ route('cart') }}"><i class="fas fa-shopping-cart fa-fw"></i> Cart</a>
                                <a href="{{ route('logout') }}"><i class="fas fa-sign-out-alt fa-fw"></i> Logout</a>    
                        </div>
                    </div>
                    @if (Auth::user()->admin == 1)
                        <li class="responsive-menu-item"><a class="page-link" href="{{ route('dashboard') }}">Dashboard</a></li>
                    @endif
                    <li class="responsive-menu-item"><a class="page-link" href="{{ url('/profile') }}">Profile</a></li>
                    <li class="responsive-menu-item"><a class="page-link" href="{{ route('cart') }}">Cart</a></li>
                    <li class="responsive-menu-item"><a class="page-link sign-up" href="{{ route('logout') }}">Logout</a></li>
                    @else
                    <li><a href="/login" class="sign-up page-link">Login</a></li>
                    @endif
                </ul>
                <div class="menu-trigger"><i class="fas fa-bars"></i></div>
            </nav>
        </div>
    </header>

    @yield('content')

<footer>
    <div class="container">
        <div class="content">
            <div class="left-side">
                <h2>Newsletter</h2>
                <h3>Be first to know</h3>
                <input type="email" placeholder="Your e-mail address">
                <br>
                <input type="button" value="Subscribe">
            </div>
            <div class="middle">
                <h2>PizzaMaster</h2>
                <h3>Social networks</h3>
                <div class="social">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="right-side">
                <h2>Opening hours</h2>
                <h4><span class="bold">Monday-Friday</span> 8AM-11PM</h4>
                <h4><span class="bold">Saturday</span> 8AM-01PM</h4>
                <h4><span class="bold">Sunday</span> 10AM-10PM</h4>
            </div>
        </div>
        <div class="copyright">
            <h4>&copy; 2019 PizzaMaster. All Rights Reserved.</h4>
        </div>
    </div>
</footer>

<script src="js/jquery.js"></script>

<script type="text/javascript" src="js/responsive-menu.js">

</script>

</body>

</html>