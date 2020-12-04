const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const { readToken, verifyJwt } = require('../middleware')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.get('/session', readToken, verifyJwt, controller.SessionStatus) // Each function will execute in series until a response is sent back to a client. If at any time you send back a response or throw an error in the middleware the request to stop at that function.

module.exports = Router
