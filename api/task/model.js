// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    return db('tasks')
}

const getById = (id) => {
    return db('tasks').where('task_id', id).first()
}

const create = async (task) => {
    const [id] = await db('tasks').insert(task, ['task_id', 'task_description', 'task_notes',' task_completed', 'project_id'])
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    create,
  }