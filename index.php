<!DOCTYPE html>
<html>
<?php

define("TITLE", "JEE | DEMO TEST");
include_once("COMMON_HTML/headtag.php");



?>
<body>
	    
<div class="w3-theme">
    <div class="w3-content">
    <div class="w3-bar w3-padding" id="myNavbar">
        <a href="login" class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large kel-hover w3-white"><i class="fa fa-sign-in"></i> Log in</a>
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right kel-hover" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
    <a href="donate" class="w3-bar-item w3-button w3-hide-small kel-hover w3-hover-theme-dark w3-round w3-right"><i class="fa fa-question-circle"></i> FAQs</a>
    <!--<a href="results" class="w3-bar-item w3-button w3-hide-small kel-hover w3-hover-theme-dark w3-round"><i class="fa fa-th"></i> Results</a>
    --><a href="contact" class="w3-bar-item w3-button w3-hide-small kel-hover w3-hover-theme-dark w3-round w3-right"><i class="fa fa-envelope"></i> Contact</a>
    <a href="login" class="w3-bar-item w3-button w3-hide-small kel-hover w3-round w3-right w3-white w3-hover-theme-dark"><i class="fa fa-sign-in"></i> Log in</a>
    </div>
    
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-animate-top">
    <a href="donate" class="w3-bar-item w3-button w3-theme-l1 w3-hover-theme-dark kel-hover-2" onclick="toggleFunction()"><i class="fa fa-question-circle"></i> FAQs</a>
    <!--<a href="results" class="w3-bar-item w3-button w3-theme-l1 w3-hover-theme-dark kel-hover" onclick="toggleFunction()"><i class="fa fa-th"></i> Results</a>
    --><a href="contact" class="w3-bar-item w3-button w3-theme-l1 w3-hover-theme-dark kel-hover-2" onclick="toggleFunction()"><i class="fa fa-envelope"></i> Contact</a>
    <a href="login" class="w3-bar-item w3-button w3-theme-l1 w3-hover-theme-dark kel-hover-2" onclick="toggleFunction()"><i class="fa fa-sign-in"></i> Log in</a>
    
  </div>
</div>
</div>

<div class="w3-padding-64 w3-theme-l1 bgimg">
    <center>
	<h1 class="w3-xlarge">
	    <b><span class="w3-orange w3-text-white"> JEE</span> PRACTICE TEST</b>
	</h1>
	<div class="w3-content w3-margin w3-card w3-center" style="max-width:400px">
	
	<div class="w3-card w3-hover-shadow w3-animate-zoom" style="margin-top:20px;">
	<div class="w3-light-gray w3-container w3-center" style="z-index:2;">
		<div class="w3-padding-16">
			
		<div class="w3-xlarge w3-bold w3-margin-top"><b>Register</b></div>
		<div class="w3-center" style="padding-top:16px;">
		    Fill the following registration form and recieve login details in email. 
		</div>
		<form class="w3-container w3-center w3-margin" id="register">
		<div class="w3-margin-bottom w3-text-red" >
		    <center><div class="loader" id="loader" style="display:none;"></div></center>
		<div id="error"></div>
		</div>
		
			<div class="w3-section">
				<input type="text" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="name" placeholder="Full Name" style="margin:0;width:90%;" required><br>
			</div>
			<div class="w3-section">
				<input type="email" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="email" placeholder="Email Id" style="margin:0;width:90%;" required><br>
			</div>
			<div class="w3-section">
				<input type="tel" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="contno" placeholder="Mobile number" pattern="[6-9]{1}[0-9]{9}" style="margin:0;width:90%;" required><br>
			</div>
			<div class="w3-section">
			    <select class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" style="margin:0;width:90%;" name="gender" required>
			        <option selected disabled>Gender</option>
			        <option value="male">Male</option>
			        <option value="female">Female</option>
			    </select>
			</div>
			
			<a href="login" class="kel-hover-2"><u>Already joined?</u></a>
			<div class="w3-section">
				<button type="button" class="kel-button w3-black w3-round w3-padding w3-border-black w3-black" onclick="register()">Register</button>
			</div>
			
		</form>
		</div>
	</div>
	</div>
	</div>
	</center>
</div>
<script src="JSContent/classes.js"></script>
<script src="JSContent/home.js"></script>
	</body>
</html>
