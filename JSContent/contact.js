let load = () => {
	
	let loader = document.getElementById('pageLoader');
	let getLoad = document.getElementById('gotLoaded');
	let getform = document.getElementById('getform');
	
	loader.style.display = "block";
	let l = new contactPage();
	let str = "";
	if(l.loadFrom(getform)){
	    
        setTimeout(function(){ 
            
            getLoad.style.display = "block";
    	    loader.style.display = "none";
            
        }, 500);
	    
	}
	    
}

load(); 
