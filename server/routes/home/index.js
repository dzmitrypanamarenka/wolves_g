import express from 'express';

import nextApp from '../../nextInit';

const router = new express.Router();

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Homepage', req.query)
});

router.route('/contact').get((req, res) => {
  return nextApp.render(req, res, '/Contact', req.query)
});

router.route('/impressum').get((req, res) => {
  return nextApp.render(req, res, '/Impressum', req.query)
});

router.route('/legal').get((req, res) => {
  return nextApp.render(req, res, '/Legal', req.query)
});

router.route('/about').get((req, res) => {
  return nextApp.render(req, res, '/UberUns', req.query)
});

router.route('/donate').get((req, res) => {
  return nextApp.render(req, res, '/Donate', req.query)
});

router.route('/magazine').get((req, res) => {
  return nextApp.render(req, res, '/Magazine', req.query)
});

export default router;
