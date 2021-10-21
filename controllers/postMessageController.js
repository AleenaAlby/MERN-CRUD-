const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var { postMessage } = require('../models/postMessages')


router.get('/', (req, res) => {
    postMessage.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req, res) => {
    var newRecord = new postMessage({
        title: req.body.title,
        message: req.body.message
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router