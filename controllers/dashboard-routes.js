const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// access dashboard with auth (Dashboard Page)
router.get('/', withAuth, (req, res) => {
  res.send('/dash');
});

// access edit post page with auth (Edit Post Page)
router.get('/edit/:id', withAuth, (req, res) => {
  const id = req.params.id;

  res.send(`/dash/edit/${id}`);
});

module.exports = router;
