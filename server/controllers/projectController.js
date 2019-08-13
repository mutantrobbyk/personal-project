module.exports = {
    getAllProjects: (req, res) => {
        const db = req.app.get('db')
        db.get_all_projects().then(result => {
            res.status(200).send(result)
        })
    },
    deleteProject: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_project(id).then(result => {
            res.status(200).send(result)
        })
    },
    addProject
}