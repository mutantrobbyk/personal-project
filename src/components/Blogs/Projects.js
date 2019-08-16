import React, {Component} from 'react'
import './Projects.css'
import axios from 'axios'

export default class Projects extends Component {
    state = {
        projects: []
    }
    componentDidMount() {
        this.getAllProjects()
    }
    getAllProjects = () => {
        axios.get('/blog/getAllProjects').then(res => [
            this.setState({
                projects: res.data
            })
        ])
    }
    render () {
        return (
            <div className='Projects'>Projects
            {this.state.projects.map(el => {
                return (
                    <div key={el.project_id}></div>
                )
            })}
            </div>
        )
    }
}