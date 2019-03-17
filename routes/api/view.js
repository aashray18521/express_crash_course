const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const exphbs = require('express-handlebars');
const members = require('../../Members');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Gets All Members
router.get('/', (req, res) => res.render('view', { members }));

module.exports = router;