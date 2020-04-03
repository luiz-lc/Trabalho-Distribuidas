const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const CelebrateController = require ('./controllers/CelebrateController');

const routes = express.Router();

routes.post('/sessions', CelebrateController.sessionPost(), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', CelebrateController.ongsPost(), OngController.create);

routes.get('/profile', CelebrateController.profileGet(), ProfileController.index);

routes.get('/incidents', CelebrateController.incidentsGet(), IncidentController.index);
routes.post('/incidents', CelebrateController.incidentsPost(), IncidentController.create);
routes.delete('/incidents/:id', CelebrateController.incidentsDelete(), IncidentController.delete);

module.exports = routes;