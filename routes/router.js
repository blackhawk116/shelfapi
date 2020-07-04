/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const path = require('path')

console.log('START routing')
const router = express.Router()



// Defer path requests to a particular controller

router.use('/user', require('../controllers/user.js'))
router.use('/book', require('../controllers/book.js'))

console.log('END routing')
module.exports = router
