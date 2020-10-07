<div class="w3-padding-16">
			
	<div class="w3-xlarge w3-bold w3-margin-top"><b>Contact up</b></div>
	<div>
	    If you have any query related to test, you can ask us. We will response as soon as possible. Enter the valid email. We will communicate with you from that mail.
	</div>
	<form class="w3-container w3-center w3-margin" id="register">
	<div class="w3-margin-bottom w3-text-red" >
	    <center><div class="loader" id="loader" style="display:none;"></div></center>
	<div id="error"></div>
	</div>
		
		<div class="w3-section">
			<input type="text" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="name" placeholder="Full name" style="margin:0;width:90%;"><br>
		</div>
		<div class="w3-section">
			<input type="email" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="email" placeholder="Email" style="margin:0;width:90%;"><br>
		</div>
		<div class="w3-section">
			<select class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="problem" style="margin:0;width:90%;">
		        <option disabled selected>Problem category</option>
		        <option value="reg">Registration problem</option>
		        <option value="login">Login problem</option>
		        <option value="mail">Mail not received</option>
		        <option value="visi">Things not visible</option>
	        <option value="other">Other</option>
		    </select><br>
		</div>
		<div class="w3-section">
		    <textarea type="text" class="w3-padding w3-round-xxlarge w3-border w3-hover-border-black" name="msg" placeholder="Problem statement" style="margin:0;width:90%;" maxlength="500"></textarea>
			</div>
		
		<div class="w3-section">
			<button type="button" class="kel-button w3-black w3-round w3-padding w3-border-black w3-black" onclick="contact()">Contact</button>
		</div>
		
	</form>
</div>
