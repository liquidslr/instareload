const express = require('express')
const passport = require('passport')

const router = express.Router()

const FbController = require('../app/controllers/FbController')

/* GET home page. */
router.get('/', FbController.login);

module.exports = router

