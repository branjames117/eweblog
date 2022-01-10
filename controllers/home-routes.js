const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// display home route (Home Page)
router.get('/', (req, res) => {
  res.send('/root');
});

// display login/signup prompt (Login Page)
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.send('/login');
});

// display individual post (Single-Post Page)
router.get('/post/:id', (req, res) => {
  const id = req.params.id;

  res.send(`/post/${id}`);
});

module.exports = router;
