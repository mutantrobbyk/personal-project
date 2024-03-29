require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const session = require("express-session");
const authCtrl = require("./controllers/authController");
const projCtrl = require("./controllers/projectController");
const tipCtrl = require("./controllers/tipsController");
const servicesController = require("./controllers/servicesController");
const ctrl = require("./controllers/controller");
const path = require("path");

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10,
    },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => console.log(`Powerman ${SERVER_PORT}`));
}).catch(err => console.log(err));

app.get("/blog/getAllProjects/:project_id", projCtrl.getProjectById);
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.delete("/auth/logout", authCtrl.logout);
app.delete("/blog/images/:id", projCtrl.deleteImageById);
app.get("/blog/getAllProjects", projCtrl.getAllProjects);
app.delete("/blog/:project_id", projCtrl.deleteProject);
app.get("/auth/currentuser", authCtrl.currentUser);
app.post("/blog/createProjects", projCtrl.createProject);
app.put("/blog/:project_id", projCtrl.updateProject);
app.get("/tips/getAllTips", tipCtrl.getAllTechTips);
app.delete("/tips/:tip_id", tipCtrl.deleteTechTip);
app.post("/tips/createNewTips", tipCtrl.createTip);
app.put("/tips/:tip_id", tipCtrl.updateTip);
app.get("/tips/getAllTips/:tip_id", tipCtrl.getTipById);
app.post("/api/email", ctrl.email);
app.get("/tips/getAllTips/pics/:tip_id", tipCtrl.getPicsById);
app.post("/techtips/morepics/:tip_id", tipCtrl.addMorePics);

//services endpoints
app.get("/api/services/headline", servicesController.getServicesHeadline);
app.put("/api/services/headline", servicesController.updateServicesHeadline);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
