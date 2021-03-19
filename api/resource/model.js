// build your `Resource` resource here
const db = require('../../data/dbConfig')

const getAll = async () => {
    return db('resources')
}

const getById = (id) => {
    return db('resources').where('resource_id', id).first()
}

const create = async (resource) => {
    const [id] = await db('resources').insert(resource, ['resource_id', 'resource_description', 'resource_name'])
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    create,
  }