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

    try{
        await data.save();
        res.send("hello");
      }
      catch (err) {
        res.status(500).send(err);
      }
  



})

api.get('/findone/:id', (req, res) => {

    res.setHeader('Content-Type', 'application/json')
    const id = parseInt(req.params.id) 
    
    const item = find(Book, { _id: id })
    if (!item) { return res.end(notfoundstring + id) }
    res.send(JSON.stringify(item))
  })
  

 api.post('/deleteBook', (req, res) => {
  
    Book.findByIdAndDelete({
        _id:req.body.params.bookId
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
        _id:req.body.params.bookId
    },{

    $set:
     { 
        publisher :req.body.publisher,
        title : req.body.title,
        author : req.body.auhtor,
        publishedon : req.body.publishedon
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
  