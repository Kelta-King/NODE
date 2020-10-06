window.onscroll = function() {
    myFunction()
};

function myFunction() {
    
    var navbar = document.getElementById("myNavbar");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } 
    else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
    
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let register = () => {
		
	let formS = document.getElementById('register');
	let error = document.getElementById('error');
		
	let check_data = new Check();
	let name = formS.name.value;
	let email = formS.email.value;
	let cont = formS.contno.value;
	let gender = formS.gender.value;
	
	if(name == "" || email == "" || cont == "" || gender == ""){
		alert("Please enter every details");
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	if(name.length <= 4) {
		alert("Please enter your full name");
		error.innerHTML = "Please enter your full name";
		return false;
	}
		
	if(!check_data.checkMobile(cont)){
				
		alert("Please enter valid mobile number")
		error.innerHTML = "Please enter valid mobile number";
		return false;
			
	}
	
	try{
		if(!check_data.emailCheck(email, error)){
			
			return false;
				
		}
			
		if(check_data.check(email)){
			alert("Please enter valid email");
			error.innerHTML = "Please enter valid email";
			return false;
		}
			
		if(check_data.check(name)){
			alert("Please enter valid name");
			error.innerHTML = "Please enter valid name";
			return false;
		}
			
		if(check_data.check(cont)){
			alert("Please enter valid password");
			error.innerHTML = "Please enter valid password";
			return false;
		}
			
	}
	catch(err){
		alert("There is a problem: "+err);
		err.innerHTML = "There is a problem: "+err;
		return;
	}
		
	let str = "name="+name+"&email="+email+"&contno="+cont+"&gender="+gender;
	let method = new UserMethods();
	    
	if(method.registerCall(str)){
	        
	    formS.action = "registerStudent";
        formS.method = "post";
    	formS.submit();
	        
	}
	    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new registePage();
	let str = "";
	if(l.loadFrom(getform)){
	    
	    
        setTimeout(function(){ 
            
        getLoad.style.display = "block";
	    loader.style.display = "none";    
            
        }, 1000);
	    
	    
	}
	
	    
}

load(); window.onscroll = function() {
    myFunction()
};

function myFunction() {
    
    var navbar = document.getElementById("myNavbar");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } 
    else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
    
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let register = () => {
		
	let formS = document.getElementById('register');
	let error = document.getElementById('error');
		
	let check_data = new Check();
	let name = formS.name.value;
	let email = formS.email.value;
	let cont = formS.contno.value;
	let gender = formS.gender.value;
	
	if(name == "" || email == "" || cont == "" || gender == ""){
		alert("Please enter every details");
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	if(name.length <= 4) {
		alert("Please enter your full name");
		error.innerHTML = "Please enter your full name";
		return false;
	}
		
	if(!check_data.checkMobile(cont)){
				
		alert("Please enter valid mobile number")
		error.innerHTML = "Please enter valid mobile number";
		return false;
			
	}
	
	try{
		if(!check_data.emailCheck(email, error)){
			
			return false;
				
		}
			
		if(check_data.check(email)){
			alert("Please enter valid email");
			error.innerHTML = "Please enter valid email";
			return false;
		}
			
		if(check_data.check(name)){
			alert("Please enter valid name");
			error.innerHTML = "Please enter valid name";
			return false;
		}
			
		if(check_data.check(cont)){
			alert("Please enter valid password");
			error.innerHTML = "Please enter valid password";
			return false;
		}
			
	}
	catch(err){
		alert("There is a problem: "+err);
		err.innerHTML = "There is a problem: "+err;
		return;
	}
		
	let str = "name="+name+"&email="+email+"&contno="+cont+"&gender="+gender;
	let method = new UserMethods();
	    
	if(method.registerCall(str)){
	        
	    formS.action = "registerStudent";
        formS.method = "post";
    	formS.submit();
	        
	}
	    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new registePage();
	let str = "";
	if(l.loadFrom(getform)){
	    
	    
        setTimeout(function(){ 
            
        getLoad.style.display = "block";
	    loader.style.display = "none";    
            
        }, 1000);
	    
	    
	}
	
	    
}

load(); window.onscroll = function() {
    myFunction()
};

function myFunction() {
    
    var navbar = document.getElementById("myNavbar");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } 
    else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
    
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let register = () => {
		
	let formS = document.getElementById('register');
	let error = document.getElementById('error');
		
	let check_data = new Check();
	let name = formS.name.value;
	let email = formS.email.value;
	let cont = formS.contno.value;
	let gender = formS.gender.value;
	
	if(name == "" || email == "" || cont == "" || gender == ""){
		alert("Please enter every details");
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	if(name.length <= 4) {
		alert("Please enter your full name");
		error.innerHTML = "Please enter your full name";
		return false;
	}
		
	if(!check_data.checkMobile(cont)){
				
		alert("Please enter valid mobile number")
		error.innerHTML = "Please enter valid mobile number";
		return false;
			
	}
	
	try{
		if(!check_data.emailCheck(email, error)){
			
			return false;
				
		}
			
		if(check_data.check(email)){
			alert("Please enter valid email");
			error.innerHTML = "Please enter valid email";
			return false;
		}
			
		if(check_data.check(name)){
			alert("Please enter valid name");
			error.innerHTML = "Please enter valid name";
			return false;
		}
			
		if(check_data.check(cont)){
			alert("Please enter valid password");
			error.innerHTML = "Please enter valid password";
			return false;
		}
			
	}
	catch(err){
		alert("There is a problem: "+err);
		err.innerHTML = "There is a problem: "+err;
		return;
	}
		
	let str = "name="+name+"&email="+email+"&contno="+cont+"&gender="+gender;
	let method = new UserMethods();
	    
	if(method.registerCall(str)){
	        
	    formS.action = "registerStudent";
        formS.method = "post";
    	formS.submit();
	        
	}
	    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new registePage();
	let str = "";
	if(l.loadFrom(getform)){
	    
	    
        setTimeout(function(){ 
            
        getLoad.style.display = "block";
	    loader.style.display = "none";    
            
        }, 1000);
	    
	    
	}
	
	    
}

load(); 
