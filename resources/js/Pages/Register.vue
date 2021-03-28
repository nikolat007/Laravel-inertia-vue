<template>
    <slayout>
        <div>
            <section>
                <div class="row p-0 m-0">
                    <div class="col-sm p-0 m-0 bg-white">
                        <div style="height: 100vh;">
                            <div class="justify-content-center align-items-center d-flex" style="height: inherit">
                                <div style="width: 400px;">
                                    <h3 class="text-center mb-5">Welcome, please register</h3>
                                    <form @submit.prevent="submit()">
                                        <div class="mb-3">
                                            <label class="form-label">First name</label>
                                            <input type="text" v-model="form.firstname" class="form-control">
                                            <p v-if="errors.firstname" class="text-danger">* {{ errors.firstname }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Last name</label>
                                            <input type="text" v-model="form.lastname" class="form-control">
                                            <p v-if="errors.lastname" class="text-danger">* {{ errors.lastname }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Contact number</label>
                                            <input type="number" v-model="form.contactNumber" class="form-control contactNumber" >
                                            <p v-if="errors.contactNumber" class="text-danger">* {{ errors.contactNumber }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" v-model="form.email" class="form-control">
                                            <div class="form-text">We'll never share your email with anyone else.</div>
                                            <p v-if="errors.email" class="text-danger">* {{ errors.email }}</p>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Password</label>
                                            <input type="password" v-model="form.password" class="form-control">
                                            <p v-if="errors.password" class="text-danger">* {{ errors.password }}</p>
                                        </div>
                                        <button v-if="loadingState == false" type="submit" class="btn bg-orange text-light w-100">Register</button>
                                        <button v-if="loadingState == true" class="btn bg-orange text-light w-100" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </button>
                                        <br>
                                        <br>
                                        <h5 class="text-center"><inertia-link class="txt-orange" href="/login">Already have an account?
                                                Please login.</inertia-link></h5>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0 m-0 login-img d-flex justify-content-center align-items-center">
                        <div class="login-text">
                            <h1 class="text-center text-light">Your first time here?</h1>
                            <h3 class="text-center text-light">Please, create your account to be able to order.</h3>
                        </div>
                        <div class="overlay-login bg-orange"></div>
                        <div class="bg-img"></div>
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
                    firstname: null,
                    lastname: null,
                    contactNumber: null,
                    email: null,
                    password: null
                }
            }
        },

        methods: {
            submit() {
                this.loadingState = true,
                this.$inertia.post('/userRegister', this.form, {
                    onFinish: () => {
                        this.loadingState = false,
                        this.form.email = "",
                        this.form.password = "",
                        this.form.firstname = "",
                        this.form.lastname = "",
                        this.form.contactNumber = ""
                    },
                    onSuccess: () => {
                        this.$toaster.success('You have successfully registered.')
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
