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
