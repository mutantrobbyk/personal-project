import React, {Component} from 'react'
import './Projects.css'
import axios from 'axios'
import Rob from '../images/m45a2724 copy.jpg'

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
            <div className='Projects'>
                <div className='projects_head'>
                <img src={Rob} alt=""/>
                <h1>PROJECTS.</h1>
                </div>
            {this.state.projects.map(el => {
                return (
                    <div onClick={() => this.props.history.push(`/projects/edit/${el.project_id}`)} className='projects_container'>
                    <div key={el.project_id}>
                        <img src={el.cover_image} alt=""/>
                        <h3>{el.title}</h3>
                        <div className='details'>
                            <p>Year: {el.sub_1}</p>
                            <p>Make: {el.sub_2}</p>
                            <p>Model: {el.sub_3}</p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        )
    }
}