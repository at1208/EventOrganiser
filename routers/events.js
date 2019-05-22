const router = require('express').Router();

// Data
const events = [
  { genre: 'Music Concert', price: 'Rs.1200' },
  { genre: ' Food Fest', price: 'Rs.1100' },
  { genre: 'Book Fest', price: 'Rs.900' },
  { genre: 'Drama', price: 'Rs.1600' }
];

//get route
router.get('/', (req, res) => {
 res.send(events);
});

//post route
router.post('/event', (req, res) => {
  const event = {
      genre: req.body.genre,
      price: req.body.price,
      id: events.length + 1
  };
  events.push(event);
  res.send(event);
  console.log(events);
});

module.exports = router;
