<?php

require_once "core/Route.php"; 
require_once "core/Router.php"; 
require_once "core/Cors.php"; 
require_once "api/TodoHandler.php"; 

require __DIR__ . '/vendor/autoload.php';

use Routing\Route; 
use Routing\Router;
use Routing\Cors; 

use API\ToDoHandler;  

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '');
$dotenv->load();

header("Access-Control-Allow-Origin: *");

$router = new Router();
$api_handler = new TodoHandler(); 

Cors::setCors(); 

$router->registerRoute(new Route("/todos", "GET", $api_handler->getToDos())); 

$router->registerRoute(new Route("/todos", "POST", $api_handler->addToDo())); 

$router->registerRoute(new Route("/todos", "PUT", $api_handler->updateToDo())); 

$router->routeRequest();
?>