const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const exphbs = require('express-handlebars');
const members = require('../../Members');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        details = members.filter(member => member.id === parseInt(req.params.id))
        res.render('delete_task', { details });
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

// Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.status(200).render('delete', {
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        res.status(404).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

module.exports = router;
