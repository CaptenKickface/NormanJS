const router = require('express').Router();
let Demog = require('../models/demog.model');

router.route('/').get((req, res) => {
    Demog.find()
    .then(demogs => res.json(demogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const demographic = req.body.demographic;

    const newDemog = new Demog({
        demographic,
    });

    newDemog.save()
    .then(() => res.json('Demographic Saved'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Demog.findById(req.params.id)
        .then(demog => res.json(demog))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;