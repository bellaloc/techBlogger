const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  //TODO: Get all the Projects and the associated Users and render the homepage.handlebars
});

router.get('/project/:id', async (req, res) => {
//TODO: Find a Project with the id param and associated User and render the project.handlebars page
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {

//TODO: Find the logged in user based on the session ID and included associated projects and render profile.handelbars page
    
});

router.get('/login', (req, res) => {
  //TODO: If the user is already logged in, redirect the request to "/profile" otherwise render the login.handlebars page
 
});

module.exports = router;
