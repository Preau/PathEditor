<?php
$path = exec('echo %path%');
$paths = explode(';', $path);
echo json_encode($paths);