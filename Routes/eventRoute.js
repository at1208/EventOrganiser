const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

const event = mongoose.model('Event')

module.exports = (app) => {

app.post('/createEvent', async (req,res) => {
  const newEvent = new event({
    _id: req.body._id,
    eventName: req.body.eventName,
    venue: req.body.venue,
    imageURL: req.body.imageURL,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    price: req.body.price,
    category: req.body.category,
    createdTime: req.body.createdTime
  })
  const result = await newEvent.save()
 res.status(200).send(result)
})

app.get('/allEvents', async (req,res) => {
const allEvents = await event.find()
res.send(allEvents)
})

app.put('/updateEvent/:_id', async (req,res) => {
  const updatedEvent = await event.findByIdAndUpdate(req.body._id, {
    eventName: req.body.eventName,
    venue: req.body.venue,
    imageURL: req.body.imageURL,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    price: req.body.price,
    category: req.body.category,
    createdTime: req.body.createdTime
  }, { new: true })
  res.send(updatedEvent)
})

app.delete('/deleteEvent/:_id', async (req,res) => {
  const deletedEvent = await event.findByIdAndRemove(req.params._id)
  res.send(deletedEvent)
})

}
