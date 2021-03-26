@extends('layouts.dashboard')

@section('content')


    <h1 class="available-products">Available products</h1>
    <div class="component-list">
        <div class="list-title list-title-product" id="list-title-product">
            <div class="list-title-item">
                <h4>Image</h4>
            </div>
            <div class="list-title-item">
                <h4>Name</h4> 
            </div>
            <div class="list-title-item">
                <h4>Price</h4> 
            </div>
            <div class="list-title-item">
                <h4>Action</h4> 
            </div>
        </div>
        <div class="components">
            @foreach($products as $product)
            <div class='list-item' id="product-item">
                <div class="list-item-item list-item-product" id="product-img">
                    <img src="/storage/product_covers/{{ $product->cover }}" alt="pizzaimage">
                </div>
                <div class='list-item-item list-item-product'> 
                    <h4>{{ $product->productName }}</h4> 
                </div> 
                <div class='list-item-item list-item-product'> 
                    <h4>{{ $product->price }} €</h4> 
                </div> 
                <div class='list-item-item list-item-product'> 
                    <h4><a class='list-item-item list-item-a-product' href='/dashboard/editproduct/{{ $product->product_id }}'>Edit</a></h4> 
                </div> 
            </div>
            @endforeach
        </div>
    </div>
    
@endsection

@section('script')
    
    <script>

        /*$(document).ready(function(){
            FetchData();
            window.setInterval(FetchData, 10000);
            var storeDataLength;
            function FetchData(){
                $.get('/admin/listproducts', function(result, state){
                    
                    var data=result.data;
                    var collection = [];
                    if(storeDataLength == data.length)
                    {
                        console.warn('true');
                    }
                    else{
                        console.warn('false');
                        $('.components').empty();
                        for(i=0; i<data.length; i++)
                        {
                            collection = collection + 
                            "<div class='list-item'>" + 
                            "<div class='list-item-item list-item-product'>" + 
                            "<h4>" + data[i].productName + "</h4>" +
                            "</div>" +
                            "<div class='list-item-item list-item-product'>" + 
                            "<h4>" + data[i].price + " €" + "</h4>" +
                            "</div>" + 
                            "<div class='list-item-item list-item-product'>" + 
                            "<h4><a class='list-item-item list-item-a-product' href='/dashboard/editproduct/" + data[i].product_id + "'>Edit</a></h4>" +
                            "</div>" + 
                            "</div>";   
                        }
                        $('.components').append(collection);
                        console.warn(collection);
                    }
                    storeDataLength = data.length;
                })
            }
        });*/

    </script>

@endsection