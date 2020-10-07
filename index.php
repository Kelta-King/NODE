<!DOCTYPE html>
<html>
<?php

define("TITLE", "Register | JEE DEMO TEST");
include_once("COMMON_HTML/headtag.php");



?>
<body>
	    
<div class="w3-theme">
    <div class="w3-content">
<?php include('COMMON_HTML/navigation.php') ?>
</div>
</div>
<center><div class="loader-2" style="margin-top:100px;display:bock" id="pageLoader"></div></center>
<div class="w3-padding-64 w3-theme-l1 bgimg" id='gotLoaded' style="display:none">
    <center>
	<h1 class="w3-xlarge">
	    <b><span class="w3-orange w3-text-white"> JEE</span> PRACTICE TEST</b>
	</h1>
	<div class="w3-content w3-margin w3-card w3-center" style="max-width:400px">
	
	<div class="w3-card w3-hover-shadow w3-animate-zoom" style="margin-top:20px;">
	<div class="w3-light-gray w3-container w3-center" id="getform" style="z-index:2;">
		
	</div>
	</div>
	</div>
	</center>
</div>
<script src="JSContent/classes.js"></script>
<script src="JSContent/home.js"></script>
	</body>
</html>
