// build your `/api/projects` router here
const Project = require('./model')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const data = await Project.getAll()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const projectWithId = await Project.getById(req.params.id)
        res.status(200).json(projectWithId)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
       const newProject = await Project.create(req.body)
        res.status(201).json(newProject)
    } catch(err){
        next(err)
    }
})



module.exports = router