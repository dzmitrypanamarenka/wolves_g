import express from 'express';

import nextApp from '../../nextInit';

const router = new express.Router();

router.route('/coming-soon').get((req, res) => {
  return nextApp.render(req, res, '/ComingSoon', req.query)
});

export default router;