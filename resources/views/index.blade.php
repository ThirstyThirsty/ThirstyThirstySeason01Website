<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Thirsty Thirsty</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://use.typekit.net/uxb4wzw.css">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body>
        <div id="app">
            <app />
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
