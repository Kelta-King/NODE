const express = require("express");
const bodyparser = require("body-parser");
const app = express();


app.listen(3000, () => {
    console.log("Listeneing at 3000");
})

app.use(bodyparser.urlencoded({extended:true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Views/index.html");
})

app.get("/:id", function(req, res){
    let obj = req.params;
    let id = obj['id'];
    res.send(id);
});

app.post("/quotes", function(req, res){
    res.send(req.body);
})