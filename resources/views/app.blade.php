<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csr-token" content="{{ csrf_token() }}">        
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>Laravel And react</title>
        <script>
            const APP_URL ="{{url('')}}";
        </script>
    </head>
    <body>      
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>