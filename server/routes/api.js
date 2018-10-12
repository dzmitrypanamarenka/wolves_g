import express from 'express'
import home from './home';
import blog from './blog';
import magazine from './magazine';
import shop from './shop';
import team from './team';


const api = new express.Router();

api.use('/', home);
api.use('/blog', blog);
api.use('/magazine', magazine);
api.use('/shop', shop);
api.use('/team', team);


export default api
