const router = require('express').Router();
let Spending = require('../models/spending.model');

router.route('/').get((req, res) => {
  Spending.find()
    .then(spendings => res.json(spendings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const category = req.body.category;
  const date = Date.parse(req.body.date);
  const spending = Number(req.body.spending);


  const newSpending = new Spending({
    category,
    date,
    spending,
  });

  newSpending.save()
  .then(() => res.json('Spending added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Spending.findById(req.params.id)
    .then(spending => res.json(spending))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Spending.findByIdAndDelete(req.params.id)
    .then(() => res.json('Spending deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Spending.findById(req.params.id)
    .then(spending => {
      spending.category = req.body.category;
      spending.date = Date.parse(req.body.date);
      spending.spending = Number(req.body.spending);

      spending.save()
        .then(() => res.json('Spending updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;