<template>
    <main>
        <div class="row p-0 m-0" style="min-height: 100vh">
        <div class="col-sm-3 col-md-4 col-lg-2 p-4 shadow d-lg-block d-none bg-white">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div class="pb-3">
                    <h3 class="text-center bg-dashboard-color-text"><i class="fa-fas pizza-slice "></i>PizzaMaster</h3>
                    <h5 class="text-secondary text-center">Admin Panel</h5>
                </div>
                <hr>
                <h6 class="text-secondary">MENU</h6>
                <inertia-link class="nav-link sidebar-item my-1" href="/dashboard"><i class="fas fa-info-circle fa-fw"></i> Info</inertia-link>
                <inertia-link class="nav-link sidebar-item my-1" href="/dashboard/users"><i class="fas fa-users fa-fw"></i> Users</inertia-link>
                <inertia-link class="nav-link sidebar-item my-1" href="/dashboard/orders"><i class="fas fa-cart-plus fa-fw"></i> Pending Orders</inertia-link>
                <inertia-link class="nav-link sidebar-item my-1" href="/dashboard/confirmedorders"><i class="fas fa-cart-plus fa-fw"></i> Confirmed Orders</inertia-link>
                <inertia-link class="nav-link sidebar-item my-1" href="/dashboard/products"><i class="fas fa-pizza-slice fa-fw"></i> Products</inertia-link>
                <hr>
                <h6 class="text-secondary">INFORMATION</h6>
                <a class="nav-link sidebar-item my-1" href=""><i class="fas fa-info fa-fw"></i> Licence</a>
            </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-10 p-0" style="background-color: #f2f2f2;">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dashboard-color-theme border-bottom border-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link d-lg-none" href="index.html">Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-lg-none" href="users.html">Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-lg-none" href="#">Pending Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-lg-none" href="#">Confirmed Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-lg-none" href="#">Products</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Back to website</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="bread bg-dashboard-color-theme">
                <div class="container-fluid">
                    <div class="rounded py-3 mb-4 d-flex align-items-center">
                        <h4 class="text-white">Page</h4>
                        <div class="bread-group bg-white rounded p-2 mx-3" style="width:200px;">
                            <ol class="breadcrumb p-0 m-0 bg-white">
                                <li class="breadcrumb-item"><a class="bg-dashboard-color-text" href="#">Dashboard</a></li>
                                <li class="breadcrumb-item text-secondary" aria-current="page">Info</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-content">

                <slot />
                
            </section>
        </div>
    </div>
    </main>
</template>