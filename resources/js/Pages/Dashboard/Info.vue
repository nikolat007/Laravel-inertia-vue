<template>
    <dashboard>
        <div>
            <section class="cards">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="card bg-white order-card dashboard-card shadow-sm bg-c-blue">
                                    <div class="card-block">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <h2 class="d-flex justify-content-center align-items-center" style="height: 100%"><i class="fas fa-users dashboard-icon"></i></h2>
                                            </div>
                                            <div class="col-sm-8">
                                                <h5 class="m-b-20 text-center text-white">Users</h5>
                                                <h2 class="text-center text-white">10</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card bg-white order-card dashboard-card shadow-sm bg-c-green">
                                    <div class="card-block">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <h2 class="d-flex justify-content-center align-items-center" style="height: 100%"><i class="fa fa-cart-plus dashboard-icon"></i></h2>
                                            </div>
                                            <div class="col-sm-8">
                                                <h5 class="m-b-20 text-center text-white">Orders</h5>
                                                <h2 class="text-center text-white">10</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card bg-white order-card dashboard-card shadow-sm bg-c-yellow">
                                    <div class="card-block">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <h2 class="d-flex justify-content-center align-items-center" style="height: 100%"><i class="fas fa-credit-card dashboard-icon"></i></h2>
                                            </div>
                                            <div class="col-sm-8">
                                                <h5 class="m-b-20 text-center text-white">Profit</h5>
                                                <h2 class="text-center text-white">10 €</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card bg-white order-card dashboard-card shadow-sm bg-c-pink">
                                    <div class="card-block">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <h2 class="d-flex justify-content-center align-items-center" style="height: 100%"><i class="fas fa-pizza-slice dashboard-icon"></i></h2>
                                            </div>
                                            <div class="col-sm-8">
                                                <h5 class="m-b-20 text-center text-white">Products</h5>
                                                <h2 class="text-center text-white">10</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="notifications mb-5">
                    <div class="container">
                        <div class="bg-white rounded p-3 shadow-sm">
                            <h5 class="text-secondary py-2">Latest notifications</h5>
                            <table class="table" style="border-collapse: collapse; overflow: hidden;">
                                <thead>
                                    <tr class="bg-dashboard-color-theme">
                                        <th class="text-white">
                                            <h6 class="p-0 my-2">Mark</h6>
                                        </th>
                                        <th class="text-white">
                                            <h6 class="p-0 my-2">Notification</h6>
                                        </th>
                                        <th class="text-white">
                                            <h6 class="p-0 my-2">Date and Time</h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" class="text-secondary">
                                            <h6 class="p-0 my-2"><i class="fas fa-users fa-fw bg-t-blue"></i></h6>
                                        </th>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">Mark</h6>
                                        </td>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">1 minute ago</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
        </div>
    </dashboard>
</template>

<script>

    import Dashboard from '../Layout/Dashboard' 

    export default{
        props: [
            "cartItem",
            "flash",
            "errors"
        ],

        components: {
            Dashboard
        }
    }

</script>
