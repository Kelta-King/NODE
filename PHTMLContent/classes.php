<?php

namespace html;

class HTML{
    
    //this class contains the  tags for html
    //little  tags
    
    public static function addb($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds bold tags in between any thing
        echo "<b id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</b>";
        
    }
    
    public static function addunder($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds underline tags in between any thing
        echo "<u id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</u>";
        
    }
    
    public static function addi($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds italic tags in between any thing
        echo "<i id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</i>";
        
    }
    
    public static function adddel($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds linethrough tags in between any  thing
        echo "<del id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</del>";
        
    }
    
    public static function addsub($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds sub tags in between any  thing
        echo "<sub id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</sub>";
        
    }
    
    public static function addsup($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds sup tags in between any  thing
        echo "<sup id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</sup>";
        
    }
    
}

namespace userData;

class USER{
    
    public $name;
    private $log_in;
    
    public function login_check(){
        return $this->log_in;
    }
    
    public function set_login($data){
        $this->log_in = $data;
    }
    
    public function do_login(){
        
    }
    
    public function register_student(){
        
    }
    
}

?>
<?php

namespace html;

class HTML{
    
    //this class contains the  tags for html
    //little  tags
    
    public static function addb($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds bold tags in between any thing
        echo "<b id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</b>";
        
    }
    
    public static function addunder($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds underline tags in between any thing
        echo "<u id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</u>";
        
    }
    
    public static function addi($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds italic tags in between any thing
        echo "<i id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</i>";
        
    }
    
    public static function adddel($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds linethrough tags in between any  thing
        echo "<del id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</del>";
        
    }
    
    public static function addsub($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds sub tags in between any  thing
        echo "<sub id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</sub>";
        
    }
    
    public static function addsup($data = "", $style = "", $id = "", $class = ""){
        
        //this function adds sup tags in between any  thing
        echo "<sup id = '{$id}' class = '{$class}' style = '{$style}'>{$data}</sup>";
        
    }
    
}

namespace userData;

class USER{
    
    public $name;
    private $log_in;
    
    public function login_check(){
        return $this->log_in;
    }
    
    public function set_login($data){
        $this->log_in = $data;
    }
    
    public function do_login(){
        
    }
    
    public function register_student(){
        
    }
    
}

?>
