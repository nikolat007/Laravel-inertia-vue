<template>
    <dashboard>
        <div>
            <section class="box my-5">
                    <div class="container">
                        <div class="bg-white rounded p-3 shadow-sm">
                            <div class="row d-flex p-0 m-0">
                                <h5 class="text-secondary py-2">Confirmed orders</h5>
                            </div>
                            <table class="table" style="border-collapse: collapse; overflow: hidden;">
                                <thead>
                                    <tr class="bg-dashboard-color-theme">
                                        <th class="text-white">
                                            <h6 class="p-0 my-2">Name</h6>
                                        </th>
                                        <th class="text-white">
                                            <h6 class="p-0 my-2">Order date</h6>
                                        </th>
                                        <th class="text-white">
                                            <h6 class="p-0 my-2">Action</h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" class="text-secondary">
                                            <h6 class="p-0 my-2">John Doe</h6>
                                        </th>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">10.10.2020</h6>
                                        </td>
                                        <td class="text-secondary">
                                            <button class="btn btn-secondary" type="button">View Order</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="text-secondary">
                                            <h6 class="p-0 my-2">John Doe</h6>
                                        </th>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">10.10.2020</h6>
                                        </td>
                                        <td class="text-secondary">
                                            <button class="btn btn-secondary" type="button">View Order</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="text-secondary">
                                            <h6 class="p-0 my-2">John Doe</h6>
                                        </th>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">10.10.2020</h6>
                                        </td>
                                        <td class="text-secondary">
                                            <button class="btn btn-secondary" type="button">View Order</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="text-secondary">
                                            <h6 class="p-0 my-2">John Doe</h6>
                                        </th>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">10.10.2020</h6>
                                        </td>
                                        <td class="text-secondary">
                                            <button class="btn btn-secondary" type="button">View Order</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="text-secondary">
                                            <h6 class="p-0 my-2">John Doe</h6>
                                        </th>
                                        <td class="text-secondary">
                                            <h6 class="p-0 my-2">10.10.2020</h6>
                                        </td>
                                        <td class="text-secondary">
                                            <button class="btn btn-secondary" type="button">View Order</button>
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
