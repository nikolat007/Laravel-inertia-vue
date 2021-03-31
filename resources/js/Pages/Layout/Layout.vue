<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src="icon/pizza.svg" height="20px"><b>  PizzaMaster</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="#menu">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="#gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="#aboutus">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-item nav-link" href="#contact">Contact</a>
                            </li>
                            <li v-if="$page.props.auth.user" class="nav-item">
                                <inertia-link v-if="$page.props.auth.user" type="button" href="/cart" class="nav-item nav-link">
                                <i class="fas fa-shopping-cart"></i> <span class="badge bg-orange text-light p-1">{{ $page.props.auth.user.numberOfCartItems }}</span>
                                </inertia-link>
                            </li>
                            <li v-if="$page.props.auth.user == null" class="nav-item">
                                <inertia-link class="nav-item nav-link btn text-light bg-orange" href="/login">Login</inertia-link>
                            </li>
                            <li v-if="$page.props.auth.user" class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {{ $page.props.auth.user.firstName }} {{ $page.props.auth.user.lastName }}
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li v-if="$page.props.auth.user.admin == 1"><inertia-link class="dropdown-item" href="/dashboard">Dashboard</inertia-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><inertia-link class="dropdown-item" href="/logout">Logout</inertia-link></li>
                                </ul>
                            </li>
                        </ul>
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
