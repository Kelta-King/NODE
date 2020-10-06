class Check{
		
	//this class contains the functions of checking a perticular input data
		
	check(Name){
			
		if(Name == ""){
			cont_msg.innerHTML = "Name is empty";
		}
		
		//checking that no special characters inserted in input
		if(Name.includes("$") || Name.includes("&") || Name.includes("=") || Name.includes("*") || Name.includes("`")){
			return true;
		}
		
	}
	
	checkMobile(txtPhone){
	    
	    //mobile number check function
	    
        var phoneno = /^\+?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
        var mobileno = /^((\\+91-?)|0)?[6-9]{1}?[0-9]{9}$/;
        if ((txtPhone.match(phoneno)) || (txtPhone.match(mobileno))) {
            return true;
        }
        else {
            return false;
        }

	}
	
	emailCheck(email, cont_msg) {
		
		//email checking
		//cont_msg contains the error element of web page
		
		if(email == ""){
			cont_msg.innerHTML = "Name is empty";
		}
		
		if(cont_msg == ""){
			cont_msg.innerHTML = "data is empty";
		}
		
		let s1 = email.split("@");
		let s3 = email.split(" ");
		if(s3.length > 1)
		{
			alert("Please add a proper mail-Id");
			cont_msg.innerHTML = "Please add a proper mail-Id";
			return false;
		}
		if(s1.length == 2)
		{
			var s2 = s1[1].split(".");
			if(s2.length == 2 || s2.length == 3)
			{
				if(s1[0].length < 6 || s2[0].length < 4 || s2[1].length > 4 || s2[1].length < 2)
				{
					alert('Please add a proper mail-Id');
					cont_msg.innerHTML = "Please add a proper mail-Id";
					return false;
				}
				
				return true;
				
			}
			else
			{
				alert("Please add a proper mail-Id");
				cont_msg.innerHTML = "Please add a proper mail-Id";
				return false;
			}
		}
		else
		{
			alert("Please add a proper mail-Id");
			cont_msg.innerHTML = "Please add a proper mail-Id";
			return false;
		}
			
	}
}

class userMethods{
    
    //this class contains the methods of ajax call for user
    
    registerCall(str){
        
        //this function will make an ajax call for user registration 
        let xhttp = new XMLHttpRequest();
    	let loader = document.getElementById('loader');
    		xhttp.onreadystatechange = function() {
    			loader.style.display = "block";
    			if(this.readyState == 4 && this.status == 200){
    				error.innerHTML = this.responseText;
    				loader.style.display = "none";
    				if(this.responseText == ""){
    				    
    				    return true;
    					
    				}
    				else{
    				    return false;
    				}
    			}
		    }
		xhttp.open("POST", "Check/register", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(str);
        
    }
    
    loginCall(){
        
        //this function will make an ajax call for user login 
        
    }
    
}

class registePage{
    
    loadFrom(getform){
        
        let xhttp = new XMLHttpRequest();
    	
    		xhttp.onreadystatechange = function() {
    			
    			if(this.readyState == 4 && this.status == 200){
    				
    				if(this.responseText != ""){
    				    
    				    getform.innerHTML = this.responseText;
    				    return true;
    					
    				}
    				else{
    				    return false;
    				}
    			}
		    }
		xhttp.open("POST", "Render/registerPage", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		
		return true;
        
    }
    
}class Check{
		
	//this class contains the functions of checking a perticular input data
		
	check(Name){
			
		if(Name == ""){
			cont_msg.innerHTML = "Name is empty";
		}
		
		//checking that no special characters inserted in input
		if(Name.includes("$") || Name.includes("&") || Name.includes("=") || Name.includes("*") || Name.includes("`")){
			return true;
		}
		
	}
	
	checkMobile(txtPhone){
	    
	    //mobile number check function
	    
        var phoneno = /^\+?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
        var mobileno = /^((\\+91-?)|0)?[6-9]{1}?[0-9]{9}$/;
        if ((txtPhone.match(phoneno)) || (txtPhone.match(mobileno))) {
            return true;
        }
        else {
            return false;
        }

	}
	
	emailCheck(email, cont_msg) {
		
		//email checking
		//cont_msg contains the error element of web page
		
		if(email == ""){
			cont_msg.innerHTML = "Name is empty";
		}
		
		if(cont_msg == ""){
			cont_msg.innerHTML = "data is empty";
		}
		
		let s1 = email.split("@");
		let s3 = email.split(" ");
		if(s3.length > 1)
		{
			alert("Please add a proper mail-Id");
			cont_msg.innerHTML = "Please add a proper mail-Id";
			return false;
		}
		if(s1.length == 2)
		{
			var s2 = s1[1].split(".");
			if(s2.length == 2 || s2.length == 3)
			{
				if(s1[0].length < 6 || s2[0].length < 4 || s2[1].length > 4 || s2[1].length < 2)
				{
					alert('Please add a proper mail-Id');
					cont_msg.innerHTML = "Please add a proper mail-Id";
					return false;
				}
				
				return true;
				
			}
			else
			{
				alert("Please add a proper mail-Id");
				cont_msg.innerHTML = "Please add a proper mail-Id";
				return false;
			}
		}
		else
		{
			alert("Please add a proper mail-Id");
			cont_msg.innerHTML = "Please add a proper mail-Id";
			return false;
		}
			
	}
}

class userMethods{
    
    //this class contains the methods of ajax call for user
    
    registerCall(str){
        
        //this function will make an ajax call for user registration 
        let xhttp = new XMLHttpRequest();
    	let loader = document.getElementById('loader');
    		xhttp.onreadystatechange = function() {
    			loader.style.display = "block";
    			if(this.readyState == 4 && this.status == 200){
    				error.innerHTML = this.responseText;
    				loader.style.display = "none";
    				if(this.responseText == ""){
    				    
    				    return true;
    					
    				}
    				else{
    				    return false;
    				}
    			}
		    }
		xhttp.open("POST", "Check/register", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(str);
        
    }
    
    loginCall(){
        
        //this function will make an ajax call for user login 
        
    }
    
}

class registePage{
    
    loadFrom(getform){
        
        let xhttp = new XMLHttpRequest();
    	
    		xhttp.onreadystatechange = function() {
    			
    			if(this.readyState == 4 && this.status == 200){
    				
    				if(this.responseText != ""){
    				    
    				    getform.innerHTML = this.responseText;
    				    return true;
    					
    				}
    				else{
    				    return false;
    				}
    			}
		    }
		xhttp.open("POST", "Render/registerPage", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		
		return true;
        
    }
    
}class Check{
		
	//this class contains the functions of checking a perticular input data
		
	check(Name){
			
		if(Name == ""){
			cont_msg.innerHTML = "Name is empty";
		}
		
		//checking that no special characters inserted in input
		if(Name.includes("$") || Name.includes("&") || Name.includes("=") || Name.includes("*") || Name.includes("`")){
			return true;
		}
		
	}
	
	checkMobile(txtPhone){
	    
	    //mobile number check function
	    
        var phoneno = /^\+?([6-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
        var mobileno = /^((\\+91-?)|0)?[6-9]{1}?[0-9]{9}$/;
        if ((txtPhone.match(phoneno)) || (txtPhone.match(mobileno))) {
            return true;
        }
        else {
            return false;
        }

	}
	
	emailCheck(email, cont_msg) {
		
		//email checking
		//cont_msg contains the error element of web page
		
		if(email == ""){
			cont_msg.innerHTML = "Name is empty";
		}
		
		if(cont_msg == ""){
			cont_msg.innerHTML = "data is empty";
		}
		
		let s1 = email.split("@");
		let s3 = email.split(" ");
		if(s3.length > 1)
		{
			alert("Please add a proper mail-Id");
			cont_msg.innerHTML = "Please add a proper mail-Id";
			return false;
		}
		if(s1.length == 2)
		{
			var s2 = s1[1].split(".");
			if(s2.length == 2 || s2.length == 3)
			{
				if(s1[0].length < 6 || s2[0].length < 4 || s2[1].length > 4 || s2[1].length < 2)
				{
					alert('Please add a proper mail-Id');
					cont_msg.innerHTML = "Please add a proper mail-Id";
					return false;
				}
				
				return true;
				
			}
			else
			{
				alert("Please add a proper mail-Id");
				cont_msg.innerHTML = "Please add a proper mail-Id";
				return false;
			}
		}
		else
		{
			alert("Please add a proper mail-Id");
			cont_msg.innerHTML = "Please add a proper mail-Id";
			return false;
		}
			
	}
}

class userMethods{
    
    //this class contains the methods of ajax call for user
    
    registerCall(str){
        
        //this function will make an ajax call for user registration 
        let xhttp = new XMLHttpRequest();
    	let loader = document.getElementById('loader');
    		xhttp.onreadystatechange = function() {
    			loader.style.display = "block";
    			if(this.readyState == 4 && this.status == 200){
    				error.innerHTML = this.responseText;
    				loader.style.display = "none";
    				if(this.responseText == ""){
    				    
    				    return true;
    					
    				}
    				else{
    				    return false;
    				}
    			}
		    }
		xhttp.open("POST", "Check/register", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send(str);
        
    }
    
    loginCall(){
        
        //this function will make an ajax call for user login 
        
    }
    
}

class registePage{
    
    loadFrom(getform){
        
        let xhttp = new XMLHttpRequest();
    	
    		xhttp.onreadystatechange = function() {
    			
    			if(this.readyState == 4 && this.status == 200){
    				
    				if(this.responseText != ""){
    				    
    				    getform.innerHTML = this.responseText;
    				    return true;
    					
    				}
    				else{
    				    return false;
    				}
    			}
		    }
		xhttp.open("POST", "Render/registerPage", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
		
		return true;
        
    }
    
}
