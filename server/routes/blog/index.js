import express from 'express';

import nextApp from '../../nextInit';
import Post from '../../models/Post';

const router = new express.Router();

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Blog', req.query)
});

router.route('/new').post((req, res) => {
  const { title, tag, text } = req.body;
  const post = new Post({
    title,
    tag,
    text
  });
  post.save()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  res.status(200)
});

export default router; 
