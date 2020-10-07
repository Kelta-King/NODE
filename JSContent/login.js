function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let login = () => {
	
	let formS = document.getElementById('register');
		
	let check_data = new Check();
	let error = document.getElementById('error');
	let rollno = formS.rollno.value;
	let pass = formS.pass.value;
	
	if(rollno == "" || pass == ""){
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	try{
		
		if(check_data.check(rollno)){
			alert("Please enter valid roll no");
			error.innerHTML = "Please enter valid roll no";
			return false;
		}
			
	    if(check_data.check(pass)){
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
		
	let str = "rollno="+rollno+"&pass="+pass;
	let method = new UserMethods();
	    
	if(method.loginCall(str)){
	        
	    formS.action = "";
        formS.method = "";
    	//formS.submit();
	        
	}

}

let see = () => {
    
    
    let eye = document.getElementById("eye");
    let box = document.getElementById("pass");
    
    if(eye.className == "fa fa-eye"){
        
        eye.className = "fa fa-eye-slash";
        eye.title = "hide";
        box.type = "text";
        
    }
    else{
        
        eye.className = "fa fa-eye";
        eye.title = "watch";
        box.type = "password";
        
    }
    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new loginPage();
	let str = "";
	if(l.loadFrom(getform)){
	    
        setTimeout(function(){ 
            
            getLoad.style.display = "block";
    	    loader.style.display = "none";
            
        }, 500);
	    
	}
	    
}

load(); function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let login = () => {
	
	let formS = document.getElementById('register');
		
	let check_data = new Check();
	let error = document.getElementById('error');
	let rollno = formS.rollno.value;
	let pass = formS.pass.value;
	
	if(rollno == "" || pass == ""){
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	try{
		
		if(check_data.check(rollno)){
			alert("Please enter valid roll no");
			error.innerHTML = "Please enter valid roll no";
			return false;
		}
			
	    if(check_data.check(pass)){
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
		
	let str = "rollno="+rollno+"&pass="+pass;
	let method = new UserMethods();
	    
	if(method.loginCall(str)){
	        
	    formS.action = "";
        formS.method = "";
    	//formS.submit();
	        
	}

}

let see = () => {
    
    
    let eye = document.getElementById("eye");
    let box = document.getElementById("pass");
    
    if(eye.className == "fa fa-eye"){
        
        eye.className = "fa fa-eye-slash";
        eye.title = "hide";
        box.type = "text";
        
    }
    else{
        
        eye.className = "fa fa-eye";
        eye.title = "watch";
        box.type = "password";
        
    }
    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new loginPage();
	let str = "";
	if(l.loadFrom(getform)){
	    
        setTimeout(function(){ 
            
            getLoad.style.display = "block";
    	    loader.style.display = "none";
            
        }, 500);
	    
	}
	    
}

load(); function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let login = () => {
	
	let formS = document.getElementById('register');
		
	let check_data = new Check();
	let error = document.getElementById('error');
	let rollno = formS.rollno.value;
	let pass = formS.pass.value;
	
	if(rollno == "" || pass == ""){
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	try{
		
		if(check_data.check(rollno)){
			alert("Please enter valid roll no");
			error.innerHTML = "Please enter valid roll no";
			return false;
		}
			
	    if(check_data.check(pass)){
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
		
	let str = "rollno="+rollno+"&pass="+pass;
	let method = new UserMethods();
	    
	if(method.loginCall(str)){
	        
	    formS.action = "";
        formS.method = "";
    	//formS.submit();
	        
	}

}

let see = () => {
    
    
    let eye = document.getElementById("eye");
    let box = document.getElementById("pass");
    
    if(eye.className == "fa fa-eye"){
        
        eye.className = "fa fa-eye-slash";
        eye.title = "hide";
        box.type = "text";
        
    }
    else{
        
        eye.className = "fa fa-eye";
        eye.title = "watch";
        box.type = "password";
        
    }
    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new loginPage();
	let str = "";
	if(l.loadFrom(getform)){
	    
        setTimeout(function(){ 
            
            getLoad.style.display = "block";
    	    loader.style.display = "none";
            
        }, 500);
	    
	}
	    
}

load(); function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

let login = () => {
	
	let formS = document.getElementById('register');
		
	let check_data = new Check();
	let error = document.getElementById('error');
	let rollno = formS.rollno.value;
	let pass = formS.pass.value;
	
	if(rollno == "" || pass == ""){
		error.innerHTML = "Please enter every details";
		return false;
	}
		
	try{
		
		if(check_data.check(rollno)){
			alert("Please enter valid roll no");
			error.innerHTML = "Please enter valid roll no";
			return false;
		}
			
	    if(check_data.check(pass)){
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
		
	let str = "rollno="+rollno+"&pass="+pass;
	let method = new UserMethods();
	    
	if(method.loginCall(str)){
	        
	    formS.action = "";
        formS.method = "";
    	//formS.submit();
	        
	}

}

let see = () => {
    
    
    let eye = document.getElementById("eye");
    let box = document.getElementById("pass");
    
    if(eye.className == "fa fa-eye"){
        
        eye.className = "fa fa-eye-slash";
        eye.title = "hide";
        box.type = "text";
        
    }
    else{
        
        eye.className = "fa fa-eye";
        eye.title = "watch";
        box.type = "password";
        
    }
    
}

let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new loginPage();
	let str = "";
	if(l.loadFrom(getform)){
	    
        setTimeout(function(){ 
            
            getLoad.style.display = "block";
    	    loader.style.display = "none";
            
        }, 500);
	    
	}
	    
}

load(); 
