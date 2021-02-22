const express = require("express");
const bodyparser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kingman:test123@cluster0.zmum7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.listen(3000, () => {
    console.log("Listeneing at 3000");
});

client.connect((err, client) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    if(err){
        console.log("Error is: "+err);
        return false;
    }
    else{
        console.log("Connected");
    }
    
    const db = client.db('star-wars');
    client.close();
});

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Views/index.html");
});

app.get("/:id", function(req, res){
    let obj = req.params;
    let id = obj['id'];
    res.send(id);
});

app.post("/quotes", function(req, res){
    res.send(req.body);
});
