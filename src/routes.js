import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Engine from './components/Engine/Engine'
import Suspension from './components/Suspension/Suspension'
import Projects from './components/Blogs/Projects'
import TechTips from './components/Blogs/TechTips'
import ProjectAdmin from './components/Home/Admin/ProjectAdmin';
import TechAdmin from './components/Home/Admin/TechAdmin';
import About from './components/About/About'
import Auth from './components/Home/Admin/Auth'

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/engine' component={Engine}/>
        <Route path='/suspension' component={Suspension}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/projectadmin' component={ProjectAdmin}/>
        <Route path='/techtipadmin' component={TechAdmin}/>
        <Route path='/techtips' component={TechTips}/>
        <Route path='/about' component={About}/>
    </Switch>
)
