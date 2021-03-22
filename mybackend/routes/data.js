const router = require('express').Router();
let DataClass = require('../models/data.model');

// router.route('/').get((req, res) => {
//     DataClass.find()
//     .then(datas => res.json(datas))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/').post((req, res) => {
    const demographic = req.body.demographic;
    const timeOne = Number(req.body.timeOne);
    const wrongOne = req.body.wrongOne;
    const timeTwo = Number(req.body.timeTwo);
    const wrongTwo = req.body.wrongTwo;
    const timeThree = Number(req.body.timeThree);
    const wrongThree = req.body.wrongThree;
    const complete = Boolean(req.body.complete);


    const newData = new DataClass({
        demographic,
        timeOne,
        wrongOne,
        timeTwo,
        wrongTwo,
        timeThree,
        wrongThree,
        complete,
    });

    newData.save()
    .then((data) => res.send(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req,res) => {
    DataClass.find({})
        .then(datas => res.json(datas))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    DataClass.findById(req.params.id)
        .then(datas => res.json(datas))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').put((req, res) => {
    DataClass.findById(req.params.id)
      .then(data => {
        data.demographic = req.body.demographic;
        data.timeOne = Number(req.body.timeOne);
        data.wrongOne = req.body.wrongOne;
        data.timeTwo = Number(req.body.timeTwo);
        data.wrongTwo = req.body.wrongTwo;
        data.timeThree = Number(req.body.timeThree);
        data.wrongThree = req.body.wrongThree;
        data.complete = Boolean(req.body.complete);
  
        data.save()
          .then(() => res.json('Data updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;