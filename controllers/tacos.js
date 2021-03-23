const Taco = require('../models/taco');

module.exports = {
    index,
    show,
    update,
    delete: deleteTaco, 
    create
}

function index(req, res) {
    Taco.find({})
    .then((tacos) => {
      res.render('tacos/index', {tacos})
    })
  }

function create(req, res) {
    req.body.tasty = !!req.body.tasty
    Taco.create(req.body)
    .then(() => {
      res.redirect('/tacos')
    })
  }

function show(req, res) {
    Taco.findById(req.params.id)
    .then((taco) => {
      res.render('tacos/show', {taco})
    })
  }

function deleteTaco(req, res) {
    Taco.findByIdAndDelete(req.params.id)
    .then(()=> {
      res.redirect('/tacos')
    })
  }

function update(req, res) {
    req.body.tasty = !!req.body.tasty
    Taco.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((taco) => {
      res.redirect(`/tacos`)
    })
}