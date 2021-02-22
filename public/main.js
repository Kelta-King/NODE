
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
        location.reload();
    })

});

let deleteQuote = (id) => {

    if(!confirm("Do you really want to remove this quote?")){
        return false;
    }

    fetch('/deleteQuote', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id:id,
        })
    })
    .then(res => {
        console.log(res)
        //location.reload();
    })

}