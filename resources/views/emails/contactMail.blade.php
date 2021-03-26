@component('mail::message')
<h1>Contact mail</h1>

From: {{ $data['emailFrom'] }}
<br>
Name: {{ $data['name'] }}
<br>
Subject: {{ $data['subject'] }}
<br>
Message: 
<br>
<br>
{{ $data['bodyMessage'] }}


Thanks,<br>
{{ config('app.name') }}
@endcomponent
