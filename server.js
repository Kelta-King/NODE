const express = require("express");
const bodyparser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kingman:test123@cluster0.zmum7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient();

const app = express();
app.set("View engine", "ejs");
app.listen(3000, () => {
    console.log("Listeneing at 3000");
});

MongoClient.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(client => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
    
        console.log("Connected");
        
        const db = client.db('star-wars');
        const quotesCollection = db.collection('quotes');
        app.use(bodyparser.urlencoded({extended:true}));

        app.get("/", function(req, res){
            
            db.collection('quotes').find().toArray().then(results => {
                res.render('index.ejs', {quotes: results});
            })
            
        });

        app.get("/:id", function(req, res){
            let obj = req.params;
            let id = obj['id'];
            res.send(id);
        });

        app.post("/quotes", function(req, res){
            quotesCollection.insertOne(req.body);
            res.redirect("/");
        });

})
.catch(error => console.log(error))

