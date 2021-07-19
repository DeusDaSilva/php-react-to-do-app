<?php 

namespace Routing; 

class Route {

  public $path; 
  public $method; 
  public $handler;

  function __construct($path, $method, $handler){
    $this->path = $path; 
    $this->method = $method; 
    $this->handler = $handler; 
  }

}

?>