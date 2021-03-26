<template>
    <slayout>
        <div>
            <section style="margin: 150px 0px" class="bg-light-custom">
                <div class="container">
                    <div v-if="flash.errorMessage" class="alert alert-danger m-2" role="alert">
                    <strong>Error:</strong> {{ flash.errorMessage }}
                    </div>
                    <!--Grid row-->
                    <div class="row m-0">

                        <!--Grid column-->
                        <div class="col-lg-8">

                            <!-- Card -->
                            <div class="card wish-list mb-3 border-0 shadow-sm">
                                <div class="card-body">

                                    <h5 class="mb-4">Your shopping cart</h5>

                                    <div v-for="(item, index) in items" :key="item.id">
                                        <div class="row mb-4">
                                            <div class="col-md-5 col-lg-3 col-xl-3">
                                                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                    <img class="img-fluid w-100"
                                                        :src="'/storage/product_covers/' + item.product.cover"
                                                        alt="Sample">
                                                    <a href="#!">
                                                        <div class="mask waves-effect waves-light">
                                                            <div
                                                                class="mask rgba-black-slight waves-effect waves-light">
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-md-7 col-lg-9 col-xl-9">
                                                <div>
                                                    <div class=" justify-content-between">
                                                        <div>
                                                            <h4 class="my-3">{{ item.product.productName }}</h4>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="def-number-input number-input safari_only my-3 w-100">
                                                                <inertia-link class="btn btn-secondary"
                                                                    :href="'/cartDecreaseQuantity/' + item.id"
                                                                    v-on:click="decrementQuantity(index)">-
                                                                </inertia-link>
                                                                <input class="text-center" min="0" name="quantity"
                                                                    :value="item.quantity" type="number" disabled="true"
                                                                    style="width: 50px;">
                                                                <inertia-link class="btn btn-secondary"
                                                                    :href="'/cartIncreaseQuantity/' + item.id"
                                                                    v-on:click="incrementQuantity(index)">+
                                                                </inertia-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <inertia-link :href="'/removeitem/' + item.id" type="button"
                                                                class="btn btn-danger"><i
                                                                    class="fas fa-trash-alt mr-1"></i> Remove item
                                                            </inertia-link>
                                                        </div>
                                                        <h4 class="mb-0"><span><strong>Subtotal:
                                                                    {{ item.product.price * item.quantity }}
                                                                    €</strong></span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                    </div>
                                    <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay
                                        the purchase, adding
                                        items to your cart does not mean booking them.</p>
                                </div>
                            </div>
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-4">

                            <!-- Card -->
                            <div class="card mb-3 border-0 shadow-sm">
                                <form @submit.prevent="submit()">
                                    <div class="card-body">

                                        <h5 class="mb-3">The total amount of</h5>

                                        <ul class="list-group list-group-flush">
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Temporary amount
                                                <span>{{ total }} €</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Shipping
                                                <span>0 €</span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <h4><strong>The total amount of</strong></h4>
                                                </div>
                                                <h3><span><strong>{{ total }} €</strong></span></h3>
                                            </li>
                                        </ul>
                                        <inertia-link
                                            class="btn btn-secondary btn-block w-100 waves-effect waves-light" href="/#menu">Continue
                                            shopping</inertia-link>
                                        <br>
                                        <br v-if="errors.physicalAddress">
                                        <div v-if="errors.physicalAddress" class="alert alert-danger" role="alert">
                                        {{ errors.physicalAddress }}
                                        </div>
                                        <div class="form-group">
                                            <label for="physicalAddress">Physical address</label>
                                            <input type="text" v-model="form.physicalAddress" class="form-control"
                                                aria-describedby="phyhelp">
                                            <small id="phyhelp" class="form-text text-muted">Before checkout, we need
                                                your physical adress.</small>
                                        </div>
                                        <br>
                                        <button v-if="loadingState == false" type="submit"
                                            class="btn btn-primary btn-block w-100 waves-effect waves-light">Go to
                                            checkout</button>
                                        <button v-if="loadingState == true" class="btn btn-primary btn-block w-100 waves-effect waves-light" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                        <!--Grid column-->
                        </div>
                    </div>
                    <!--Grid row-->
                </div>
            </section>
        </div>
    </slayout>
</template>

<script>
    import Slayout from './Layout/Slayout'
    export default {
        props: [
            "cartItem",
            "flash",
            "errors"
        ],

        data() {
            return {
                itemid: null,
                items: this.cartItem,
                loadingState: false,
                form: {
                    price: null,
                    physicalAddress: null
                }
            }
        },

        components: {
            Slayout
        },


        methods: {
            submit() {
                this.loadingState = true
                this.$inertia.post('/order', this.form, {
                    onFinish: () => {
                        this.loadingState = false,
                        this.form.physicalAddress = ""
                    }
                })
            },
            incrementQuantity(index) {
                this.items[index].quantity++
            },
            decrementQuantity(index) {
                if (this.items[index].quantity != 1) {
                    this.items[index].quantity--
                }
            }
        },

        computed: {
            total: function () {
                this.form.price = 0
                this.items.forEach(element => {
                    this.form.price = this.form.price + element.quantity * element.product.price;
                });
                return this.form.price;
            }
        }
    }

</script>

<style>
    body {
        background-color: #f5f5f5;
    }

    .bg-light-custom {
        background-color: #f5f5f5;
    }

    .bg-orange {
        background-color: #FF9800;
    }

</style>
