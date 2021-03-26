@extends('layouts.dashboard')

@section('content')


    <h1 class="orders">Pending orders</h1>
    <div class="component-list">
        <div class="list-title list-title-order">
            <div class="list-title-item">
                <h4>Price</h4> 
            </div>
            <div class="list-title-item">
                <h4>Created at</h4> 
            </div>
            <div class="list-title-item">
                <h4>Action</h4> 
            </div>
        </div>
        <div class="components">
            
        </div>
    </div>
    
@endsection

@section('script')
    
    <script>

        $(document).ready(function(){
            FetchData();
            window.setInterval(FetchData, 10000);
            var storeDataLength;
            function FetchData(){
                $.get('/admin/listpendingorders', function(result, state){
                    
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
                            "<div class='list-item-item list-item-order'>" + 
                            "<h4>" + data[i].price + " €" + "</h4>" +
                            "</div>" +
                            "<div class='list-item-item list-item-order'>" + 
                            "<h4>" + data[i].created_at + "</h4>" +
                            "</div>" + 
                            "<div class='list-item-item list-item-order'>" + 
                            "<form action=' {{ route('vieworder') }} ' method='post'>" +
                            "<input type='hidden' value='" + data[i].id + "' name='orderid'>" +
                            "<input type='hidden' name='_token' value=' {{ Session::token() }} '>" +
                            "<button class='action-button button-order' type='submit' name='submit'>View order</button>" + 
                            "</form>" +
                            "</div>" + 
                            "</div>";   
                        }
                        $('.components').append(collection);
                        console.warn(collection);
                    }
                    storeDataLength = data.length;
                })
            }
        });

    </script>

@endsection