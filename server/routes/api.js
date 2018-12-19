import express from 'express'
import home from './home';
import blog from './blog';
import comingSoon from './comingSoon';


const api = new express.Router();

api.use('/', home);
api.use('/blog', blog);
api.use('/coming-soon', comingSoon);


export default api
