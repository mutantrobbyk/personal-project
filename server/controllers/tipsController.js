module.exports = {
    getAllTechTips: (req, res) => {
        const db = req.app.get('db')
        db.tips.get_tech_tips().then(result => {
            res.status(200).send(result)
        })
    },
    deleteTechTip: (req, res) => {
        const db = req.app.get('db')
        const {tip_id} = req.params
        db.tips.delete_tech_tip(tip_id).then(result => {
            res.status(200).send(result)
        })
    },
    createTip: (req, res) => {
        const db = req.app.get('db')
        const {category, title, body, url} = req.body
        db.tips.create_tip([category, title, body, url]).then(newTip => {
            res.status(200).send(newTip)
        })
    },
    updateTip: (req, res) => {
        console.log(req.params)
        console.log(req.body)
        const db = req.app.get('db')
        const {tip_id} = req.params
        const {category, title, body, url} = req.body
        db.tips.update_tip({category, title, body, url, tip_id}).then(result => {
            res.status(200).send(result)
        })
    },
    getTipById: (req, res) => {
        const db = req.app.get('db')
        const {tip_id} = req.params
        db.tips.tip_by_id([tip_id]).then(result => {
            res.status(200).send(result)
        })
    },
    getPicsById: (req, res) => {
        const db = req.app.get('db')
        const {tip_id} = req.params
        db.tips.pic_by_id([tip_id]).then(result => {
            res.status(200).send(result)
        })
    },
    addMorePics: (req, res) => {
        // console.log(req.params, 123123, req.body)
        const db = req.app.get('db')
        const {tip_id} = req.params
        // const {pics} = req.body
        // console.log(pics)
        req.body.map( async (el) => {
            await db.tips.add_pics_by_id([tip_id, el])
        })
        res.sendStatus(200)  
        
    }
}