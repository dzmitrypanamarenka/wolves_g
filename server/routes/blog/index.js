import express from 'express';

import nextApp from '../../nextInit';

const router = new express.Router();

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Blog', req.query)
});

router.route('/new').post((req, res) => {
  console.log(req)
  res.status(200)
});

export default router; 