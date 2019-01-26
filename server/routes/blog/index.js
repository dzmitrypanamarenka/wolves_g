import express from 'express';

import nextApp from '../../nextInit';
import Post from '../../models/Post';

const router = new express.Router();

router.route('/').get((req, res) => {
  return nextApp.render(req, res, '/Blog', req.query)
});

router.route('/posts/:id').get((req, res) => {
  return nextApp.render(req, res, '/Blog', { id: req.params.id })
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

router.route('/preview').get((req, res) => {
  Post
    .find({})
    .limit(999)
    .exec((err, posts) => {
      const ids = [
        "5bc5c04f91a7c73df8bfcd4e",
        "5bc5cf7be0bcd84b492597c0",
        "5bc11a25ba69710417eb8f01",
        "5c4c9f45fb6fc05326acd0c2"
      ];
      const result = posts
        .filter(el => ids.find(e => String(el._id) === e));
      res.json(result);
    })
});

router.route('/preview/all').get((req, res) => {
  Post
    .find({})
    .limit(999)
    .exec((err, posts) => {
      res.json(posts);
    })
});

export default router;
