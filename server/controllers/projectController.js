module.exports = {
    getAllProjects: (req, res) => {
        const db = req.app.get('db')
        db.projects.get_all_projects().then(result => {
            res.status(200).send(result)
        })
    },
    deleteProject: (req, res) => {
        const db = req.app.get('db')
        const {project_id} = req.params
        db.projects.delete_project(project_id).then(result => {
            res.status(200).send(result)
        })
    },
    createProject: (req, res) => {
        const db = req.app.get('db')
        const {title, sub_1, sub_2, sub_3, body, cover_image} = req.body
        db.projects.create_project([title, sub_1, sub_2, sub_3, body, cover_image]).then(newProject => {
            res.status(200).send(newProject)
        })
    },
    updateProject: (req, res) => {
        console.log(req.body)
        console.log(req.params)
        const db = req.app.get('db')
        const {project_id} = req.params
        const {title, sub_1, sub_2, sub_3, body, cover_image} = req.body
        db.projects.update_project({title, sub_1, sub_2, sub_3, body, cover_image, project_id}).then(result => {
            res.status(200.).send(result)
        })
    },
    getProjectById: (req, res) => {
        const db = req.app.get('db')
        const {project_id} = req.params
        db.projects.project_by_id([project_id]).then(result => {
            res.status(200).send(result)
        })
    }
}