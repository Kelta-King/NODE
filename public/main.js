
document.querySelector("#addQuote").addEventListener('click', () => {
    
    let loader = document.querySelector("#loader-add");
    let error = document.getElementById('error-add');

    loader.style.display = "block";

    let name = document.querySelector("#name").value;
    let quote = document.querySelector("#quote").value;

    if(name == ""){
        error.innerHTML = "Write name";
        return false;
    }
    if(quote == ""){
        error.innerHTML = "Write Quote";
        return false;
    }
    
    fetch('/addQuote', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          quote: quote
        })
    })
    .then(res => {
        console.log(res)
        loader.style.display = "none";
        document.querySelector("#name").value = "";
        document.querySelector("#quote").value = "";
        location.reload();
    })

});

let deleteQuote = (id) => {

    if(!confirm("Do you really want to remove this quote?")){
        return false;
    }
    
    let str = JSON.stringify({
        id:id,
    });
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            alert(this.responseText);
            if(this.responseText == "Success"){
                location.reload();
            }
            else{
                alert(this.responseText);
            }
        }

    }
    xhttp.open("DELETE", "/deleteQuote", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(str);

}