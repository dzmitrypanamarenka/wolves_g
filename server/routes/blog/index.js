import express from 'express';

import nextApp from '../../nextInit';
import Post from '../../models/Post';

const router = new express.Router();

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Blog', req.query)
});

router.route('/posts/:id').get((req, res) => {
  return nextApp.render(req, res, '/BlogPost', { id: req.params.id })
});

router.route('/posts').get((req, res) => {
  Post.find({}, (err, posts) => {
    res.json(posts);
  })
});

router.route('/posts').post((req, res) => {
  const id = req.body.id ? req.body.id : {};
  Post.findById(id, (err, posts) => {
    res.json(posts);
  })
});

router.route('/new').post((req, res) => {
  const { title, tag, text} = req.body;
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
