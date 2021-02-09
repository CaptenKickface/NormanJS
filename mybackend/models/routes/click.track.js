const router = require('express').Router();
let Demog = require('../models/demog.model');

router.route('/').get((req, res) => {
    Click.find()
    .then(clickTrack => res.json(clickTrack))
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

module.exports = router;