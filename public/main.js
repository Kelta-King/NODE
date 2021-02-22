document.getElementById('updt').addEventListener('click', (evt) => {

    fetch('/quotes', {
        method:'PUT',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            name:"Dart Vader",
            quote:"World is wnding",
        })
    })

});