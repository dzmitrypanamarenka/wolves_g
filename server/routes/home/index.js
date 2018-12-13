import express from 'express';

import nextApp from '../../nextInit';

const router = new express.Router();
const faviconOptions = {
  root: __dirname + '/static/img/'
};

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Homepage', req.query)
});
router.route('/favicon.ico').get((req, res) => {
  res.status(200).sendFile('favicon.ico', faviconOptions)
});

export default router;
