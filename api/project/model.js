// build your `Project` model here
// const db = require('../../data/dbConfig')
const db = require('../../data/dbConfig')

const getAll = async () => {
    // return db('projects')
    try{
       const projects = await db('projects')
        return projects.map(project => {
        project.project_completed === 0 ? 
        {...project, project_completed: false} : 
        {...project, project_completed: true}
        })
    } catch(err){
        return{err:'no good'}
    }
}

const getById = (id) => {
    return db('projects').where('project_id', id).first()
}

// const getAllProjects = (id) => {
//     if (id) {
//       return db("projects").where("project_id", id);
//     }
//     return db("projects");
//   };

const create = async (project) => {
    const [id] = await db('projects').insert(project, ['project_id', 'project_name', 'project_description',' project_completed'])
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    create,
  }