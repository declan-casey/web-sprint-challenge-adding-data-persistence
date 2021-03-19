// build your `/api/resources` router here
const Resource = require('./model')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const data = await Resource.getAll()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const resourceWithId = await Resource.getById(req.params.id)
        res.status(200).json(resourceWithId)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        newResource = await Resource.create(req.body)
        res.status(201).json(newResource)
    } catch(err){
        next(err)
    }
})


module.exports = router