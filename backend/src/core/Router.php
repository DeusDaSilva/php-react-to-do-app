<?php 

namespace Routing; 

class Router {
  private $route_list; 

  function __construct(){
    $this->route_list = array(); 
  }

  public function registerRoute($route){
    array_push($this->route_list, $route); 
  }

  public function routeRequest(){
    $routeFound = false; 
    foreach($this->route_list as $route){
      if($route->path == $_SERVER['REQUEST_URI'] && $route->method == $_SERVER['REQUEST_METHOD']){
        if(is_callable($route->handler)){
          $routeFound = true; 
          $route->handler->__invoke(); 
        }
      }
    }; 
    if(!$routeFound){
      http_response_code(404);
      echo json_encode(['error' => 'path not found: ' . $_SERVER['REQUEST_URI']]); 
    }
  }
}
?>