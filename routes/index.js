const express = require('express')
const router = express.Router()

const AuthController = require('../app/controllers/authController')
const SuggestionController = require('../app/controllers/suggestionController')

router.post('/suggestion', SuggestionController.create)

router.post('/auth/register', AuthController.create)
router.post('/auth/login', AuthController.login)


module.exports = app => app.use('/', router)
