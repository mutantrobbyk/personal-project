import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Engine from "./components/Engine/Engine";
import Suspension from "./components/Suspension/Suspension";
import Projects from "./components/Blogs/Projects";
import TechTips from "./components/Blogs/TechTips";
import ProjectAdmin from "./components/Home/Admin/ProjectAdmin";
import AdminLanding from "./components/Home/Admin/AdminLanding";
import TechAdmin from "./components/Home/Admin/TechAdmin";
import About from "./components/About/About";
import Auth from "./components/Home/Admin/Auth";
import BlogEdit from "./components/Home/Admin/BlogEdit";
import TechEdit from "./components/Home/Admin/TechEdit";
import ViewProject from "./components/Blogs/ViewProject";
import ViewTips from "./components/Blogs/ViewTips";
import Services from './components/Services/Services'

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/engine" component={Engine} />
    <Route path="/suspension" component={Suspension} />
    <Route path="/projects/viewproject/:project_id" component={ViewProject} />
    <Route path="/projects" component={Projects} />
    <Route path="/auth" component={Auth} />
    <Route path="/admin/landing" component={AdminLanding} />
    <Route path="/admin/projects/edit/:project_id" component={BlogEdit} />
    <Route path="/admin/projects" component={ProjectAdmin} />
    <Route path="/admin/tech/edit/:tip_id" component={TechEdit} />
    <Route path="/admin/tech" component={TechAdmin} />
    <Route path='/services' component={Services}/>
    <Route path="/techtips/viewtip/:tip_id" component={ViewTips} />
    <Route path="/techtips" component={TechTips} />
    <Route path="/about" component={About} />
  </Switch>
);
