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
    createProject: (req, res) => {
        const db = req.app.get('db')
        const {title, sub_1, sub_2, sub_3, body, cover_image} = req.body
        db.create_project([title, sub_1, sub_2, sub_3, body, cover_image]).then(newProject => {
            res.status(200).send(newProject)
        })
    },
    getAllTechTips: (req, res) => {
        const db = req.app.get('db')
        db.get_tech_tips().then(result => {
            res.status(200).send(result)
        })
    },
    deleteTechTip: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_tech_tip(id).then(result => {
            res.status(200).send(result)
        })
    },
    createTip: (req, res) => {
        const db = req.app.get('db')
        const {category, title, body, video_url} = req.body
        db.create_tip([category, title, body, video_url]).then(newTip => {
            res.status(200).send(newTip)
        })
    }
}