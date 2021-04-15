<template>
    <slayout>
        <div>
            <section>
                <div class="row p-0 m-0">
                    <div class="col-lg p-0 m-0 login-img d-flex justify-content-center align-items-center">
                        <div class="login-text">
                            <h1 class="text-center text-light">Welcome back!</h1>
                            <h3 class="text-center text-light">To keep connected with us <br> please login with your
                                personal info.</h3>
                        </div>
                        <div class="overlay-login bg-orange"></div>
                        <div class="bg-img"></div>
                    </div>
                    <div class="col-sm p-0 m-0 bg-white">
                        <div style="height: 100vh;">
                            <div class="justify-content-center align-items-center d-flex" style="height: inherit">
                                <div style="width: 400px;">
                                    <h3 class="text-center mb-5">Welcome back, please login</h3>
                                    <form @submit.prevent="submit()">
                                        <div v-if="flash.errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong>Error:</strong> {{ flash.errorMessage }}
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your email address"
                                                aria-describedby="emailHelp" v-model="form.email">
                                            <div id="emailHelp" class="form-text">We'll never share your email with
                                                anyone else.</div>
                                            <p v-if="errors.email" class="text-danger">* {{ errors.email }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Password</label>
                                            <input v-model="form.password" type="password" class="form-control" placeholder="Your password" id="exampleInputPassword1">
                                            <p v-if="errors.password" class="text-danger">* {{ errors.password }}</p>
                                        </div>
                                        <button v-if="loadingState == false" type="submit" class="btn bg-orange text-light w-100">Login</button>
                                        <button v-if="loadingState == true" class="btn bg-orange text-light w-100" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </button>
                                        <br>
                                        <br>
                                        <h5 class="text-center"><inertia-link class="txt-orange" href="/register">Your first time here?
                                                Please register.</inertia-link></h5>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </slayout>
</template>

<script>
    import Slayout from './Layout/Slayout'
    export default {
        props: [
            "errors",
            "flash"
        ],
        data() {
            return {
                loadingState: false,
                form: {
                    email: null,
                    password: null,
                }
            }
        },

        methods: {
            submit() {
                this.loadingState = true,
                this.flash.errorMessage = null
                this.$inertia.post('/userLogin', this.form, {
                    onFinish: () => {
                        this.loadingState = false,
                        this.form.email = "",
                        this.form.password = ""
                    },
                    onSuccess: () => {
                        if(this.flash.errorMessage == null){
                            this.$toaster.success('You have successfully logged in.')
                        }
                    }
                })
            },
        },

        components: {
            Slayout
        },
    }

</script>

<style>
    

</style>
