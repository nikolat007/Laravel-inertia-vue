<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top" style="height: 70px;">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="icon/pizza.svg" height="20px"><b>  PizzaMaster</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#menu">Menu</a>
                        <a class="nav-item nav-link" href="#gallery">Gallery</a>
                        <a class="nav-item nav-link" href="#aboutus">About Us</a>
                        <a class="nav-item nav-link" href="#contact">Contact</a>
                        <inertia-link v-if="$page.props.auth.user" type="button" href="/cart" class="nav-item nav-link">
                        <i class="fas fa-shopping-cart"></i> <span class="badge bg-orange text-light p-1">{{ $page.props.auth.user.numberOfCartItems }}</span>
                        </inertia-link>
                        <inertia-link v-if="$page.props.auth.user" class="nav-item nav-link" href="#">{{ $page.props.auth.user.firstName }} {{ $page.props.auth.user.lastName }}</inertia-link>
                        <inertia-link v-if="$page.props.auth.user" class="nav-item nav-link btn text-light bg-orange" v-on:click="logout()" href="/logout">Logout</inertia-link>
                        <inertia-link v-if="$page.props.auth.user == null" class="nav-item nav-link btn text-light bg-orange" href="/login">Login</inertia-link>
                    </div>
                </div>
            </div>
        </nav>

        <article>
            <slot />
        </article>

        <footer class="bg-dark d-flex justify-content-center">
            <div>
                <p class="text-light my-3">PizzaMaster All Rights Reserved.</p>
            </div>
        </footer>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                responsive: false
            }
        },

        methods: {
            responsiveToggle() {
                if (this.responsive == false) {
                    this.responsive = true
                } else {
                    this.responsive = false
                }
            },
            logout(){
                this.$toaster.success('You have successfully logged out.')
            }
        }
    }

</script>
