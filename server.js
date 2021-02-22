const express = require("express");
const bodyparser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const { response } = require("express");
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
        
    app.use(express.static('public'));
    app.use(bodyparser.json());

    app.get("/", function(req, res){
        
        db.collection('quotes').find().toArray().then(results => {
            res.render('index.ejs', {quotes: results});
        })

    });
    
    app.post("/addQuote", function(req, res){

        quotesCollection.insertOne(req.body).then(result => {
            res.json('Success');
        })
        .catch(err => {
            console.log(err);
        })
        

    });

    app.delete("/deleteQuote", function(req, res){
        console.log(req.body.id);
        quotesCollection.deleteOne(
            {
                _id:req.body.id
            }
        )
        .then(result => {

            if(result.deletedCount === 0){
                return res.json("No quotes of this ID");
            }
            console.log(err);

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

