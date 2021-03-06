const express = require("express");
const bodyparser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const { response } = require("express");
const { ObjectId } = require("mongodb");

const config = require("./config");
let uri = config.uri;
const client = new MongoClient();

const app = express();
app.set("View engine", "ejs");
app.listen(3000, () => {
    console.log("Listeneing at 3000");
    console.log(uri);
});

MongoClient.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(client => {
    
    console.log("Connected");
        
    const db = client.db('star-wars');
    const quotesCollection = db.collection('quotes');
    app.use(bodyparser.urlencoded({extended:true}));
        
    app.use(express.static('public'));
    app.use(bodyparser.json());

    app.get("/", function(req, res){
        
        db.collection('quotes').find().toArray().then(results => {
            res.render('index.ejs', {quotes: results});
        })

    });

    app.get("/edit/:id", function(req, res){

        let id = req.params.id;

        try{
        db.collection('quotes').find({
            "_id" : ObjectId(id),
        }).toArray().then(results => {
            if(results.length <= 0){
                res.render("editQuote.ejs", {error: "Incorrect blogs id"});
            }
            else{
                res.render("editQuote.ejs", {data:results});
            }
        })
        .catch(err => {
            res.render("editQuote.ejs", {error: "Incorrect url"});
        })
        }
        catch(err){
            res.render("editQuote.ejs", {error: "Incorrect url"});
        }

    })
    
    app.post("/addQuote", function(req, res){

        quotesCollection.insertOne(req.body).then(result => {
            res.json('Success');
        })
        .catch(err => {
            console.log(err);
        })
        

    });

    app.post("/editQuote", function(req, res){

        let id = req.body.id;
        quotesCollection.findOneAndUpdate(
            {
                "_id" : ObjectId(id),
            },
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert:true
            }
        ).then(result => {
            res.json('Success');
        })
        .catch(err => {
            console.log(err);
        })
        

    });

    app.delete("/deleteQuote", function(req, res){
        
        quotesCollection.deleteOne(
            {
                "_id": ObjectId(req.body.id),
            }
        )
        .then(result => {

            if(result.deletedCount === 0){
                return res.send("No quotes of this ID");
            }
            return res.send("Success");

        })
        .catch(err => {
            console.log(err);
        })
        

    });


    /*
    app.post("/quotes", function(req, res){
        quotesCollection.insertOne(req.body);
        res.redirect("/");
    });

    app.put("/quotes", function(req, res){

        quotesCollection.findOneAndUpdate(
            {name: "ghjj"},
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert:true
            }

        ).then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })

    });
    */
})
.catch(error => console.log(error))

