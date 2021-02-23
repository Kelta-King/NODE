
let editQuote = (id) => {
    
    let loader = document.querySelector("#loader-edit");
    let error = document.getElementById('error-edit');

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
    
    fetch('/editQuote', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            name: name,
            quote: quote
        })
    })
    .then(res => {
        console.log(res)
        loader.style.display = "none";
        window.open("/", "_self");
    })

}
