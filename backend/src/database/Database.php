<?php 

namespace Database; 

use \PDO;

class ToDoDatabase {
  private $tableName; 
  private $connection; 

  function __construct() {
    $dsn = "mysql:host=" . $_ENV['DATABASE_HOST'] . ";dbname=" . $_ENV['DATABASE_NAME'];
    $options = [
      PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8', 
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, 
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false,
    ]; 
    $this->connection = new PDO($dsn, $_ENV['DATABASE_USER'], $_ENV['DATABASE_PASSWORD'], $options); 
    $this->connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $this->tableName = $_ENV["DATABASE_TODO_TABLE_NAME"];
  }

  function fetchAll(){
    $sql = "SELECT * FROM todos"; 
    $statement = $this->connection->prepare($sql);
    $statement->execute(); //['tableName' => $this->tableName]

    return $statement->fetchAll(); 
  }

  function insert($todo){
    $sql = "INSERT INTO todos (id, text, isDone) VALUES (?, ?, ?)"; 
    $statement = $this->connection->prepare($sql);
    $statement->execute([
      $todo->id,
      $todo->text,
      $todo->isDone
    ]); 
  }

  function update($todo){
    $sql = "UPDATE todos SET text=?, isDone=? WHERE id=?"; 
    $statement = $this->connection->prepare($sql);

    $statement->execute([
      $todo->text,
      $todo->isDone, 
      $todo->id,
    ]); 
  }
  
}

?>