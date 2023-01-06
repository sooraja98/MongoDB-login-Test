const e = require('express');
var express = require('express');
var router = express.Router();
var MongoClinet=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',(req,res)=>{
  console.log(req.body);
  MongoClinet.connect('mongodb://localhost:27017',(err,client)=>{
    if(err)
    console.log(eror)
    else
    client.db('sample1').collection('user').insertOne(req.body);
  })
  res.send("got it")
})
module.exports = router;
