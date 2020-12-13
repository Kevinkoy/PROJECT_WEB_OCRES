const router = require('express').Router();
let Notification = require('../models/notification.model');

router.route('/').get((req, res) => {
  Notification.find()
    .then(notifications => res.json(notifications))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const category = req.body.category;
  const content = req.body.content;


  const newNotification = new Notification({
    category,
    content,
 
  });

  newNotification.save()
  .then(() => res.json('Notification added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Notification.findById(req.params.id)
    .then(notification => res.json(notification))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Notification.findByIdAndDelete(req.params.id)
    .then(() => res.json({message :'Notification deleted.'}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Notification.findById(req.params.id)
    .then(notification => {
      notification.category = req.body.category;
      notification.content = req.body.content;


      notification.save()
        .then(() => res.json('Notification updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;