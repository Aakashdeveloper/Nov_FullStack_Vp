//var express = require('express');
import express from 'express';
import mongo from 'mongodb';
const MongoClient = mongo.MongoClient;
import bodyParser from 'body-parser';
const mongourl = "mongodb://127.0.0.1:27017/";
import cors from 'cors';
let db;
const col_name="myproduct"
var app = express();
const port = 7800;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/products',(req,res) => {
    db.collection(col_name)
        .find().toArray((err,result) => {
            if(err) throw err;
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Access-Control-Allow-Headers','Origin,X-Request-With,Content-Type,Accept')
            res.status(200).send(result)
        })
});

app.post('/addProduct',(req,res)=> {
    db.collection(col_name)
        .insertOne(req.body, (err,result) => {
            if(err){
                res.status(401)
            }else{
                
                res.send('Data Added')
            }
        })
})

app.put('/updateProduct',(req,res) => {
    db.collection(col_name).findOneAndUpdate({"productName":req.body.productName},{
        $set:{
            productId:req.body.productId,
            productName:req.body.productName,
            productCode:req.body.productCode,
            releaseDate:req.body.releaseDate,
            description:req.body.description,
            price:req.body.price,
            starRating:req.body.starRating,
            imageUrl:req.body.imageUrl,
            }
        },{
            upsert:true
        },(err,result)=>{
            if(err) throw err;
            res.send('data updated')
        })
})

app.delete('/deleteProduct',(req,res) => {
    db.collection(col_name).findOneAndDelete({
        "productName":req.body.productName
    },(err,result) => {
        if(err) throw err;
        res.send('Data Deleted')
    })
})



MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('classpractice');
    app.listen(port,(err) => {
        if(err) throw err
        console.log(`Server is running on port ${port}`)
    })
})

