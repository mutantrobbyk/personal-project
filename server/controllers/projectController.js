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
        console.log(req.body)
        db.projects.create_project([title, sub_1, sub_2, sub_3, body, cover_image]).then(newProject => {
            // console.log('asfdasf', newProject)
            res.status(200).send(newProject)
        })
    },
    updateProject: (req, res) => {
        // console.log(req.body)
        // console.log(req.params)
        const db = req.app.get('db')
        const {project_id} = req.params
        const {title, sub_1, sub_2, sub_3, body, cover_image, images} = req.body
        db.projects.update_project({title, sub_1, sub_2, sub_3, body, cover_image, project_id}).then(result => {
            console.log(result)
            // res.status(200).send(result)
        })
        console.log(images)
        // let newImages = []
        images.map(async (el) => {
            if (el) {
                await db.projects.update_images([project_id, el])

            }
            
        })
        db.projects.get_all_gallery_photos([project_id]).then(result => {
            res.status(200).send(result)
        })
        // console.log(newImages)
    },
    getProjectById: (req, res) => {
        // console.log('hit')
        // console.log(req.params)
        const db = req.app.get('db')
        const {project_id} = req.params
        const newProject = parseInt(project_id)
        // console.log(newProject)
        db.projects.project_by_id([newProject]).then(result => {
            // console.log(result)
            res.status(200).send(result)
        })
    },
    deleteImageById: (req, res) => {
        console.log(req.params, 234234, req.body)
        const db = req.app.get('db')
        const newId = parseInt(req.params.id)
        db.projects.delete_image([newId]).then(result => {
            res.sendStatus(200)
        })
    }
}