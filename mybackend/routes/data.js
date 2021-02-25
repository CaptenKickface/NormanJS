const router = require('express').Router();
let Data = require('../models/data.model');

router.route('/').get((req, res) => {
    Data.find()
    .then(datas => res.json(datas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const demographic = req.body.object;
    const timeOne = Number(req.body.object);
    const clickOne = req.body.object;
    const timeTwo = Number(req.body.object);
    const clickTwo = req.body.object;
    const timeThree = Number(req.body.object);
    const clickThree = req.body.object;
    const complete = Boolean(req.body.object);


    const newData = new Data({
        demographic,
        timeOne,
        clickOne,
        timeTwo,
        clickTwo,
        timeThree,
        clickThree,
        complete,
    });

    newData.save()
    .then(() => res.json('dataList Saved'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Data.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;