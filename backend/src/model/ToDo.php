<?php

namespace Model; 

class ToDo {
  public $id; 
  public $text;
  public $isDone;

 function __construct($id, $text, $isDone){
    $this->id = $id; 
    $this->text = $text;
    $this->isDone = $isDone; 
  }

  function toArray(){
    return [
      ':todo_id' => $this->id, 
      ':todo_text' => $this->text,
      ':isDone' => $this->isDone
    ]; 
  }
}
?>