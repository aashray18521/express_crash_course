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
router.get('/', (req, res) => res.render('add_task ', { members }));

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };


    const foundName = members.some(member => member.name === newMember.name);
    const foundEmail = members.some(member => member.email === newMember.email);

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    } else if (foundName || foundEmail) {
        return res.status(400).json({ msg: 'Record Already Exists! Please use UPDATE BUTTON to make the desired changes.' });
    }

    members.push(newMember);
    res.render('add_task', { members });
    // res.redirect('/');
});

module.exports = router;