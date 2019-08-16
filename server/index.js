require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const projCtrl = require('./controllers/projectController')

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

app.post('/auth/register', authCtrl.register )
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
// app.get('/auth/checklogin', authCtrl.checkLogin)
app.get('/blog/getAllProjects/:project_id', projCtrl.getProjectById)
app.get('/blog/getAllProjects', projCtrl.getAllProjects)
app.delete('/blog/:project_id', projCtrl.deleteProject)
app.get('/auth/currentuser', authCtrl.currentUser)
app.post('/blog/createProjects', projCtrl.createProject)
app.put('/blog/:project_id',projCtrl.updateProject)
app.get('/tips/getAllTips', projCtrl.getAllTechTips)
app.delete('/tips/:tip_id', projCtrl.deleteTechTip)
app.post('/tips/createNewTips', projCtrl.createTip)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Powerman ${SERVER_PORT}`))
})
 