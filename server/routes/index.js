import express from 'express';
import api from './api';

const routes = new express.Router()
routes.use(api)

export default routes
