<?php
$params = json_decode(file_get_contents('php://input'),true);
if(isset($params['action'])) {
    switch ($params['action']) {
        case 'getpaths':
            getPaths();
            break;
        default:
            die();
    }
} else {
    die();
}

function getPaths() {
    $path = exec('echo %path%');
    $paths = explode(';', $path);
    echo json_encode($paths);
}