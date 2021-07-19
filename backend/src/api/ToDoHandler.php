<?php 

  namespace API; 

  include __DIR__ . "/../database/Database.php";   
  include __DIR__ . "/../model/ToDo.php";   

  use Database\ToDoDatabase; 

  use Model\ToDo; 

  class ToDoHandler {

    private function handleInternalError($error){
      http_response_code(500); 
      echo json_encode(['error' => $error->getMessage()]); 
      exit(0); 
    }

    private function missingDataResponse(){
      http_response_code(422); 
      echo json_encode(['error' => 'The data you sent was either malformed, non-existent or incomplete;']); 
      exit(0); 
    }

    private function getValidRequest(){
      $requestData = json_decode(file_get_contents('php://input'), true);
      if(!isset($requestData["id"]) || !isset( $requestData["text"]) || !isset( $requestData["isDone"])){
        $this->missingDataResponse(); 
        return; 
      }
      return new ToDo($requestData["id"], $requestData["text"], $requestData["isDone"]); 
    }

    public function getToDos(){
      return function(){
        try {
          $db = new ToDoDatabase(); 
          echo json_encode($db->fetchAll()); 
          http_response_code(200); 
        } catch (Exception $e){
          $this->handleInternalError($e); 
        }
      }; 
    }

    public function addToDo(){
      return function(){
        try {
          $todoRequest = $this->getValidRequest(); 
          $db = new ToDoDatabase();
          $db->insert($todoRequest);
          http_response_code(202); 
        } catch (Exception $e){
          $this->handleInternalError($e); 
        }
      }; 
    }

    public function updateToDo(){
      return function(){
        try {
          $todoRequest = $this->getValidRequest(); 
          $db = new ToDoDatabase();
          $db->update($todoRequest);
          http_response_code(202); 
        } catch (Exception $e){
          $this->handleInternalError($e); 
        }
      }; 
    }
  }
?>