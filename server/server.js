var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");
const { MongoAPIError } = require("mongodb");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors())

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.get("/Shopper2",(request,response)=>{
    mongoClient.connect(connectionString).then((clientObject)=>{
        var database = clientObject.db("Shopper");
        database.collection("Shopper2").find({}).toArray()
        .then((documents)=>{
            response.send(documents)
        })
    })
})


app.post("/registeruser" , (request , response)=>{
    var user={
        "UserId": request.body.UserId,
        "UserName": request.body.UserName,
        "Password": request.body.Password,
        "Email": request.body.Email,
        "Age": parseInt(request.body.Age),
        "Mobile": request.body.Mobile
    }

    mongoClient.connect(connectionString)
    .then(clientObject=>{
        var database = clientObject.db("Shopper");
        database.collection("Shopper2").insertOne(user)
        .then(result=>{
            console.log("Record Inserted Successfully");
            response.redirect("/Shopper2")
        })
    })
});

app.listen(8080);
console.log("Server Started:http://127.0.0.1:8080");