// build your `/api/tasks` router here
const Task = require('./model')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const data = await Task.getAll()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const taskWithId = await Task.getById(req.params.id)
        res.status(200).json(taskWithId)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        newTask = await Task.create(req.body)
        res.status(201).json(newTask)
    } catch(err){
        next(err)
    }
})

module.exports = router