<div class="w3-padding-16 w3-animate-zoom">
			
		<div class="w3-xlarge w3-bold w3-margin-top"><b>Login for test</b></div>
		<div>
		    You will find your login details in your registered email's inbox.
		</div>
		<div class="w3-center" style="padding-top:16px;">
		    <img src="https://www.w3schools.com/w3css/img_avatar3.png" class="w3-circle" style="width:150px">
		</div>
		<form class="w3-container w3-center w3-margin" id="register">
		<div class="w3-margin-bottom w3-text-red" >
		    <center><div class="loader" id="loader" style="display:none;"></div></center>
		<div id="error"></div>
		</div>
		
			<div class="w3-section">
				<input type="text" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="rollno" placeholder="Roll No" style="margin:0;width:90%;" required><br>
			</div>
			<div class="w3-section" style="text-align:left">
			    <span>
				<input type="password" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="pass" id='pass' placeholder="Password" style="margin:0;width:80%;margin-left:15px;" required>
			    </span>
			    <span class="" style="width:10%; margin-left:5px;cursor:pointer" onclick="see()"><i id="eye" class="fa fa-eye" title="watch"></i></span>
			</div>
			<br>
			<a href="/Exams" class="kel-hover-2 w3-center"><u>Not joined?</u></a>
			<div class="w3-section">
				<button type="button" class="kel-button w3-black w3-round w3-padding w3-border-black w3-black" onclick="login()">Log in</button>
			</div>
			
		</form>
		</div>
