<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="icon/pizza.svg" height="20px"><b>  PizzaMaster</b></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <inertia-link class="nav-item nav-link" href="/">Home</inertia-link>
                </div>
            </div>
        </div>
    </nav>

    <slot />

    </main>
</template>