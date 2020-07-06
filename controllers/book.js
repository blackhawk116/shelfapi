/** 
*  Books controller
*  Handles requests related to Books (see routes)

* 
* 
*
*/
const express = require('express')
const api = express.Router()

const Book = require('../models/book')
const _ = require('lodash');

// GET all JSON
api.get('/findall',async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = await Book.find({})
  res.send(JSON.stringify(data))
})

//test
api.post('/addBook',async(req,res)=>{

    console.log(req.body)
    var data = new Book()

    data.publisher = req.body.publisher;
    data.title = req.body.title;
    data.author = req.body.author;
    data.publishedon = req.body.publishedon;
    data.genre=req.body.genre;
    data.prologue=req.body.prologue;

    try{
        await data.save();
        res.send();
      }
      catch (err) {
        res.status(500).send(err);
      }
  



})

api.get('/findone/:id', async(req, res) => {

    res.setHeader('Content-Type', 'application/json')
    const id = (req.params.id) 

    
     Book.findOne( { _id: id }).exec(function(err, items){
      res.send(items);
    });
    
  })
  

 api.get('/deleteBook/:id', (req, res) => {
  
    Book.findByIdAndDelete({
        _id:req.params.id
    },
     (error, report)=>{
    if(error){
        return res.json({code: 400, message:'Something went wrong'})
    }
    if(report){
        return res.json({code: 200, message:'Record Deleted'})
    }else{
        return res.json({code: 404, message:'Something went wrong.'})
    }})
    .catch(err => res.status(400).json('Error: ' + err));
  })

api.post('/updateBook', (req, res) => {
  
    Book.findByIdAndUpdate({
        _id:req.body._id
    },{

    $set:
     { 
        publisher :req.body.publisher,
        title : req.body.title,
        author : req.body.author,
        publishedon : req.body.publishedon,
        genre:req.body.genre,
        prologue:req.body.prologue
     }

    },
     (error, report)=>{
    if(error){
        return res.json({code: 400, message:'Something went wrong'})
    }
    if(report){
        return res.json({code: 200, message:'Record Updated'})
    }else{
        return res.json({code: 404, message:'Something went wrong.'})
    }})
    .catch(err => res.status(400).json('Error: ' + err));
  })


module.exports = api
  