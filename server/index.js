require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const projCtrl = require('./controllers/projectController')
const tipCtrl = require('./controllers/tipsController')
const ctrl = require('./controllers/controller')
const aws = require('aws-sdk');

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
app.get('/tips/getAllTips', tipCtrl.getAllTechTips)
app.delete('/tips/:tip_id', tipCtrl.deleteTechTip)
app.post('/tips/createNewTips', tipCtrl.createTip)
app.put('/tips/:tip_id', tipCtrl.updateTip)
app.get('/tips/getAllTips/:tip_id', tipCtrl.getTipById)
app.post('/api/email',ctrl.email)

//Amazon AWS S3
app.get('/api/signs3', (req, res) => {
    aws.config = {
      region: 'us-west-1',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
  
    const s3 = new aws.S3();
    // console.log(req.query, 123132, req.params)
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read',
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
  
      return res.send(returnData);
    });
  });
  //Amazon AWS S3

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Powerman ${SERVER_PORT}`))
})
 