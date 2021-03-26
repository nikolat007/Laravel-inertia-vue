@extends('layouts.dashboard')

@section('content')
    
    <div class="stats-cards">
        <div class="card">
            <div class="card-icon card-icon-users">
                <div>
                    <i class="fas fa-users"></i>

                </div>
            </div>
            <div class="card-content">
                <div class="text">
                    <h1 class="userNo"> </h1>
                    <p>Users registered</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon card-icon-orders">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="card-content">
                <div class="text">
                    <h1 class="orderNo"> </h1>
                    <p>Total orders</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon card-icon-check">
                <i class="fas fa-money-check"></i>
            </div>
            <div class="card-content">
                <div class="text">
                    <h1 class="profit"> </h1>
                    <p>Total profit</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-icon card-icon-food">
                <i class="fas fa-utensils"></i>
            </div>
            <div class="card-content">
                <div class="text">
                    <h1 class="productNo"> </h1> 
                    <p>Total products</p>
                </div>
            </div>
        </div>
    </div>

    <div class="notifications-container">
        <div class="notifications-title">
            <p>Notifications</p>
        </div>
        <div class="notification-list">
            
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
                $.get('/admin/dashboard', function(result, state){
                    $('.notification-list').empty();
                    var usersNo=result.users;
                    var ordersNo=result.orders;
                    var profit=result.profit + " " + "€";
                    var products=result.products;
                    var notifications=result.notifications;
                    var notificationsTime=result.notificationsTime;
                    var notify = [];



                    $(".userNo").text(usersNo);
                    $(".orderNo").text(ordersNo);
                    $(".profit").text(profit);
                    $(".productNo").text(products);

                    for(i=0; i < notifications.length; i++){
                        notify = notify + 
                        "<div class='notifications " + notifications[i].type + "'>" +
                        "<p class='notification-text'>" + notifications[i].message + "</p>" +
                        "<p class='notification-text'>" + jQuery.timeago(notifications[i].created_at) + "</p>" +
                        "</div>";
                    }
                    $('.notification-list').append(notify);
                })
            }
        });

    </script>

@endsection