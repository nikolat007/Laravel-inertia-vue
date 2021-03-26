@extends('layouts.layout')


@section('content')

    <section id="title-image">
        <div class="container">
            <div class="header-content">
                <h2>PizzaMaster</h2>
                <h4>30 years of experience Direct to you!</h4>
            </div>
        </div>
        <div class="bg-image"></div>
        <div class="mask"></div>
    </section>
    <section id="welcome">
        <div class="container c2r1">
            <div class="welcome-text">
                <h2>Welcome</h2>
                <h3>to our restaurant</h3>
                <p>PizzaMaster serves pizza and seasonal fare with a focus on fresh, local ingredients. Opened by native New Yorkers, the concept was born by friends whose vision was to provide the neighborhood with delicious comfort food in a cozy, intimate setting.</p>
            </div>
            <div class="welcome-image">
                <img src="{{url('/img/home/menu-restaurant-vintage-table.jpg')}}" alt="">
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
                @foreach($product as $product)
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

    <section id="gallery-content">
        <div class="container">
            <div class="title">
                <h2>Gallery</h2>
            </div>
            <div class="gallery">
                <div class="image" id="image1">
                    
                </div>
                <div class="image" id="image2">
                    
                </div>
                <div class="image" id="image3">
                    
                </div>
                <div class="image" id="image4">
                    
                </div>
                <div class="image" id="image5">
                    
                </div>
                <div class="image" id="image6">
                    
                </div>
            </div>
        </div>
    </section>
    <section id="our-story">
        <div class="container">
            <div class="content">
                <div class="our-story">
                    <h2>Our Story</h2>
                    <p>Italian cuisine restaurant Pizza Solid Food is located in the heart of Belgrade, in Dorćol district, the old city neighborhood known for its multicultural atmosphere. Restaurant owner himself has been actively engaged in decorating the restaurant interior and the smallest details were taken into account, wrought iron wine cellar, painted walls, a small gallery with a few tables, discreet home lighting lamps, comfortable chairs, so your stay would be as pleasant as possible. Restaurant terrace offers all possibilities for a pleasant stay and relaxation during and after the working day, and refreshments to all those who have decided to spend the day sightseeing Belgrade</p>
                </div>
            </div>
        </div>
    </section>

    <section id="our-team">
        <div class="container">
            <div class="title">
                <h2>Our Team</h2>
            </div>
            <div class="team">
                <div class="first-member">
                    <img src="../img/home/First.png" alt="">
                    <h3>Arman Kibee</h3>
                </div>
                <div class="second-member">
                    <img src="../img/home/Second.png" alt="">
                    <h3>Jamey Giovannini</h3>
                </div>
                <div class="third-member">
                    <img src="../img/home/Third.png" alt="">
                    <h3>Hervey Troutman</h3>
                </div>
                <div class="fourth-member">
                    <img src="../img/home/Fourth.png" alt="">
                    <h3>Tamarra Garber</h3>
                </div>
                <div class="fifth-member">
                    <img src="../img/home/Fifth.png" alt="">
                    <h3>Rosana Finley</h3>
                </div>
                <div class="sixth-member">
                    <img src="../img/home/Sixth.png" alt="">
                    <h3>Salome Calkins</h3>
                </div>
            </div>
        </div>
    </section>

    <section id="about-us">
        <div class="bg-image"></div>
        <div class="mask"></div>
        <div class="container">
            <div class="content">
                <div class="about-us">
                    <h2>About</h2>
                    <p>It's difficult to tell the story of Dorćol that would be totally acceptable and concievable, but we will try our best to bring you closer to rich history, spirit and ambience of this area, and Belgrade as well. Although without set borders, it is considered that Dorćol covers the northern part and the lower town of Kalemegdan, and the area between the streets of kneza Mihaila and the Danube River. The name of the neighborhood comes from Turkish words dört (four) and yol (road), literally meaning "four roads" or colloquially "intersection (of four roads)", "crossroads". These were the roads to Istanbul, Vidin, Sever, and probably Dubrovnik. During the Turkish occupation of Belgrade, Dorćol was a well known trading centre, with many markets and traders of different nationalities. Also, it was a center of Belgrade's Jewish community, remnant of which is the modern Jevrejska ("Jewish") street in Dorćol. After Belgrade became a capital of independent Serbia, Dorćol kept its multinational character for a long time. Over time the old low houses and narrow streets were changed into modern buildings. Still, some parts, though vanishing one by one, resemble the old look. Dorćol is a location of some of the oldest city buildings. The oldest surviving private house in downtown Belgrade that is still used as a residence is located in the Dorćol district</p>
                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="bg-image"></div>
        <div class="mask"></div>
        <div class="title">
            <div class="container">
                <h2>Contact</h2>
            </div>
        </div>
        <div class="container">
            <div class="contact-content">
                <div class="text">
                    <h2>We'd love to hear from you</h2>
                    <p>While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions. To get in touch with the Pizza Solid Food team simply fill out the contact form. Alternatively you can telephone us on 02 9251 5600 or email us at restaurant@psf.com </p>
                </div>
                <form action=" {{ route('contactmail') }} " method="post">
                    
                    @if(Session::has('mailConfirmation'))
                    <div class="mail-confirmation">
                        <p> {{ Session::get('mailConfirmation') }} </p>
                    </div>
                    @endif

                    @error('userEmail')
                        <p class="error-message">{{ $message }}</p>
                    @enderror
                    <input type="email" placeholder="E-mail address" name="userEmail">
                    <br>
                    @error('userName')
                        <p class="error-message">{{ $message }}</p>
                    @enderror
                    <input type="text" placeholder="Name" name="userName">
                    <br>
                    @error('subject')
                        <p class="error-message">{{ $message }}</p>
                    @enderror
                    <input type="text" placeholder="Subject" name="subject">
                    <br>
                    @error('message')
                        <p class="error-message">{{ $message }}</p>
                    @enderror
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <br>
                    <input type="hidden" name="_token" value=" {{ Session::token() }} ">
                    <button type="submit" name="submit">Contact</button>
                </form>
            </div>
        </div>
    </section>
    <!--<section id="our-location">
        <div class="title">
            <div class="container">
                <h2>Our Location</h2>
            </div>
        </div>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=zrenjanin&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.emojilib.com">emojilib.com</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}</style></div>
    </section>-->
    
@endsection