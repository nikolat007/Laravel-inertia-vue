<template>
    <layout>
        <div>
            <header>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="/video/video.mp4" type="video/mp4">
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">Pizza Master</h1>
                            <p class="lead mb-0">The best pizzeria in the world!</p>
                        </div>
                    </div>
                </div>
            </header>

            <div class="bg-light-custom" id="welcome">
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg">
                            <h1>Welcome</h1>
                            <br>
                            <p class="my-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="col-lg">
                            <img src="/img/home/menu-restaurant-vintage-table.jpg"
                                class="d-block w-100 rounded" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu" class="bg-white">
                <div class="container py-5">
                    <h1 class="pb-5 text-center">Menu</h1>
                    <div class="card-group justify-content-center">
                        <div class="card mx-1 border-0 shadow p-3 col-xl-3 col-lg mb-5 bg-white rounded" v-for="product in product" :key="product.id">
                            <img class="card-img-top"
                                :src="'/storage/product_covers/' + product.cover"
                                alt="Card image cap">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-center">{{ product.productName }}</h5>
                                <p class="card-text">{{ product.description }}</p>
                                <p class="text-center">Price: {{ product.price }} €</p>
                                <inertia-link :href="'/cartadd/' + product.product_id" class="btn bg-orange mt-auto text-light">Add to cart</inertia-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-light-custom" id="gallery">
                <div class="container py-5">
                    <h1 class="my-5 text-center">Gallery</h1>
                    <div class="row">
                        <a href="" data-toggle="lightbox"
                            data-gallery="gallery" class="col-md-4">
                            <img src="/img/gallery/1.jpg" class="img-fluid rounded">
                        </a>
                        <a href="" data-toggle="lightbox"
                            data-gallery="gallery" class="col-md-4">
                            <img src="/img/gallery/2.jpg" class="img-fluid rounded">
                        </a>
                        <a href="" data-toggle="lightbox"
                            data-gallery="gallery" class="col-md-4">
                            <img src="/img/gallery/3.jpg" class="img-fluid rounded">
                        </a>
                    </div>
                    <div class="row">
                        <a href="" data-toggle="lightbox"
                            data-gallery="gallery" class="col-md-4">
                            <img src="/img/gallery/4.jpg" class="img-fluid rounded">
                        </a>
                        <a href="" data-toggle="lightbox"
                            data-gallery="gallery" class="col-md-4">
                            <img src="/img/gallery/5.jpg" class="img-fluid rounded">
                        </a>
                        <a href="" data-toggle="lightbox"
                            data-gallery="gallery" class="col-md-4">
                            <img src="/img/gallery/6.jpg" class="img-fluid rounded">
                        </a>
                    </div>
                </div>
            </div>

            <div id="aboutus" class="bg-white">
                <div class="container py-5">
                    <h1 class="text-center">About Us</h1>
                    <p class="my-5 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
                        reiciendis, veniam eveniet inventore. Ab magni, qui magnam ipsam obcaecati minus perferendis non
                        suscipit, illum ducimus laborum recusandae vitae natus quia incidunt quo sit! Pariatur quae
                        atque architecto natus saepe nemo adipisci laborum earum reiciendis et libero harum, quod,
                        expedita optio sit voluptatem cum cupiditate dolorem vitae! A expedita maxime doloremque, fugit
                        provident quasi, vel officiis exercitationem, ut soluta doloribus aliquid, id in accusamus nam
                        dolorum architecto praesentium voluptate. Accusamus corporis velit consequatur, rerum tempore
                        impedit quas eaque eveniet, quia nesciunt, consectetur neque, eos voluptates perspiciatis.
                        Deserunt corporis sequi labore dignissimos dolor quasi, ex ut libero fugit explicabo nesciunt,
                        saepe debitis nam qui sapiente id accusantium. Eius, officia! Iure sit quos repellendus id harum
                        praesentium atque ea nostrum explicabo doloremque amet facere eaque, earum. At, repellendus
                        aliquam dignissimos! Quos, optio a atque cum dolor voluptatum, in quidem, nihil saepe harum
                        expedita. Provident, totam doloribus omnis quas magni repellat, odit eveniet atque dolores sit
                        dolore vel, nesciunt accusamus, nisi. Enim quod officia officiis doloribus fugiat voluptatibus
                        error doloremque et, voluptatem assumenda perferendis soluta qui molestiae quidem! Tenetur sed
                        dolorem, vel fugit quod dolor quisquam, error labore asperiores cumque in doloremque molestiae
                        nisi.</p>
                </div>
            </div>

            <!-- Section: Team v.1 -->
            <section class="team-section text-center py-5 bg-light-custom">
                <div class="container">
                    <!-- Section heading -->
                    <h2 class="h1-responsive font-weight-bold my-5">Our amazing team</h2>
                    <!-- Section description -->
                    <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                        quisquam
                        eum porro a pariatur veniam.</p>

                    <!-- Grid row -->
                    <div class="row">

                        <!-- Grid column -->
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src="/img/home/First.png"
                                    class="rounded-circle z-depth-1 w-100" alt="Sample avatar">
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Mario Donn</h5>
                            <p class="text-uppercase blue-text"><strong>Pizza man</strong></p>
                            <p class="grey-text mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src="/img/home/Second.png"
                                    class="rounded-circle z-depth-1 w-100" alt="Sample avatar">
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Jeremy Doe</h5>
                            <p class="text-uppercase blue-text"><strong>Chief</strong></p>
                            <p class="grey-text mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src="/img/home/Third.png"
                                    class="rounded-circle z-depth-1 w-100" alt="Sample avatar">
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
                            <p class="text-uppercase blue-text"><strong>Boss</strong></p>
                            <p class="grey-text mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src="/img/home/Fourth.png"
                                    class="rounded-circle z-depth-1 w-100" alt="Sample avatar">
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                            <p class="text-uppercase blue-text"><strong>Waiter</strong></p>
                            <p class="grey-text mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <!-- Grid column -->

                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src="/img/home/Fifth.png"
                                    class="rounded-circle z-depth-1 w-100" alt="Sample avatar">
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Maria Williams</h5>
                            <p class="text-uppercase blue-text"><strong>Waiter</strong></p>
                            <p class="grey-text mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <!-- Grid column -->

                        <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                            <div class="avatar mx-auto">
                                <img src="/img/home/Sixth.png"
                                    class="rounded-circle z-depth-1 w-100" alt="Sample avatar">
                            </div>
                            <h5 class="font-weight-bold mt-4 mb-3">Jason Dorn</h5>
                            <p class="text-uppercase blue-text"><strong>Chief</strong></p>
                            <p class="grey-text mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                                adipisci sed quia non numquam modi tempora eius.</p>
                        </div>
                        <!-- Grid column -->

                    </div>
                    <!-- Grid row -->
                </div>
            </section>
            <!-- Section: Team v.1 -->

            <section class="bg-orange" id="contact">
                <div class="container py-5">
                    <h1 class="text-light my-5 text-center">Contact</h1>
                    <div class="row">
                        <div class="col-lg p-5">
                            <h2 class="text-light text-center pb-5">Our Location</h2>
                            <p class="text-center text-light my-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Est assumenda, quas quasi sapiente repellat dolorum, culpa, aliquam consequatur
                                recusandae ex, quo tenetur in nam explicabo excepturi ullam. Est nemo laudantium fuga ea
                                eum enim deleniti vel vero alias corporis odio officia, voluptatibus perspiciatis
                                tempora, amet quos deserunt commodi, adipisci magnam et in? Deleniti sequi dignissimos
                                perferendis alias ea libero aspernatur minima quos veritatis asperiores saepe quisquam
                                ducimus illo dolorum, optio voluptatibus nihil quas deserunt eveniet dolores aliquam
                                excepturi? Nulla accusantium perferendis repellat nobis, id quibusdam debitis eum
                                nesciunt quia non fugit dolor provident quae in velit? Corporis nostrum quas ex.</p>
                        </div>
                        <div class="col-lg p-5">
                            <form>

                                <!-- Text input -->
                                <div class="form-outline mb-4 form-white">
                                    <label class="form-label text-light" for="form6Example3">Name</label>
                                    <input type="text" id="form6Example3" class="form-control" />
                                    
                                </div>
                                <!-- Text input -->
                                <div class="form-outline mb-4 form-white">
                                    <label class="form-label text-light" for="form6Example4">Email</label>
                                    <input type="text" id="form6Example4 " class="form-control" />
                                
                                </div>
                                <!-- Email input -->
                                <div class="form-outline mb-4 form-white">
                                    <label class="form-label text-light" for="form6Example5">Subject</label>
                                    <input type="email" id="form6Example5" class="form-control" />                                
                                </div>

                                <!-- Message input -->
                                <div class="form-outline mb-4 form-white">
                                    <label class="form-label text-light" for="form6Example7">Message</label>
                                    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-light btn-block mb-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </layout>
</template>

<script>
    import Layout from './Layout/Layout'
    export default {
        props: [
            "product"
        ],

        components: {
            Layout
        },
    }

</script>

<style>


</style>
