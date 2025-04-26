const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.rachelRoute);
routes.get('/kimberly', lesson1controller.kimberlyRoute);

module.exports = routes;
