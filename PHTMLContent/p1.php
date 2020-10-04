<?php

namespace html;

require_once("classes.php");

$html = new HTML();

$data =  HTML::startp()."This is ".HTML::addb("Keltaking")."From home <br>".HTML::addi("Time:20;20;20").HTML::endp();

HTML::write($data);

?>