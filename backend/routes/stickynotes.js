const router = require('express').Router();
let Stickynote = require('../models/stickynote.model');

router.route('/').get((req, res) => {
  Stickynote.find()
    .then(stickynotes => res.json(stickynotes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const notes = req.body.notes;


  const newStickynote = new Stickynote({
    title,
    notes,
 
  });

  newStickynote.save()
  .then(() => res.json('Stickynote added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Stickynote.findById(req.params.id)
    .then(stickynote => res.json(stickynote))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Stickynote.findByIdAndDelete(req.params.id)
    .then(() => res.json('StickyNote deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Stickynote.findById(req.params.id)
    .then(stickynote => {
      stickynote.title = req.body.title;
      stickynote.notes = req.body.notes;


      stickynote.save()
        .then(() => res.json('Stickynote updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;