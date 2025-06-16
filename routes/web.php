<?php

use Illuminate\Support\Facades\Route;

Route::statamic('sitemap.xml', 'sitemap/index', [
    'layout' => false,
    'content_type' => 'application/xml'
]);
