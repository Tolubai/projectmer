<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Мэрия</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    @prod
    @ngStyle(styles)
    @endprod
</head>
<body>

@ngScript(inline)
@ngScript(polyfills)

@local
@ngScript(styles)
@endlocal

@ngScript(scripts)
@ngScript(vendor)
@ngScript(main)

</body>
</html>
