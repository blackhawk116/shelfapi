/** 
*  User controller
*  Handles requests related to User (see routes)

* Ganesh Siripuram
* 
*
*/
const express = require('express')
const api = express.Router()
////const LOG = require('../utils/logger.js')
//const find = require('lodash.find')
const Model = require('../models/user')
//const notfoundstring = 'instructor not found'
const _ = require('lodash');

// GET all JSON
api.get('/findall',async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = await Model.find({})
  res.send(JSON.stringify(data))
})
//test
api.post('/adduser',async(req,res)=>{

    console.log(req.body)
    var data = new Model()

    data.firstname = req.body.firstname;
    data.lastname = req.body.lastname;
    data.email = req.body.email;

    try{
        await data.save();
        res.send("hello");
      }
      catch (err) {
        res.status(500).send(err);
      }

 



})
module.exports = api
  