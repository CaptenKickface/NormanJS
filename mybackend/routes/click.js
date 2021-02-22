const router = require('express').Router();
let Click = require('../models/click.model');

router.route('/').get((req, res) => {
    Click.find()
    .then(clicks => res.json(clicks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const time = Number(req.body.time);
    const object = req.body.object;
    const correct = Boolean(req.body.correct);

    const newClick = new Click({
        time,
        object,
        correct,
    });

    newClick.save()
    .then(() => res.json('Click registered'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Click.findById(req.params.id)
        .then(click => res.json(click))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;