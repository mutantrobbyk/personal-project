import React, {Component} from 'react'
import './ProjectAdmin.css'
import axios from 'axios'

export default class ProjectAdmin extends Component {
    state = {
        projects: [],
        title: '',
        sub_1: '',
        sub_2:'',
        sub_3: '',
        body: '',
        cover_image: ''
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
    createProject = (body) => {
        axios.post('/blog/createProjects', body).then(res => {
            this.setState({
                projects: res.data,
            })
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        const {title, sub_1, sub_2, sub_3, body, cover_image} = this.state
        return (
            <div className='ProjectAdmin'>ProjectAdmin
              <div className='admin-outer-box'>
            {this.state.projects.map(el => {
                return (
                  
                    <div className='admin-projects'key={el.id}>
                        <div>
                            <img className='moto' src={el.cover_image} alt=""/>
                        </div>
                        <h3>{el.title}</h3>
                        <div>
                            <p>{el.sub_1}</p>
                            <p>{el.sub_2}</p>
                            <p>{el.sub_3}</p>
                        </div>
                        <p>{el.body}</p>
                        <button>Edit</button>
                    </div>
                )
            })}
              </div>
            <div>
                <input value={this.state.title} onChange={e => this.handleChange(e)}type="text" placeholder='title' name='title'/>
                <input value={this.state.sub_1} onChange={e => this.handleChange(e)}type="text" placeholder='year' name='sub_1'/>
                <input value={this.state.sub_2} onChange={e => this.handleChange(e)}type="text" placeholder='make' name='sub_2'/>
                <input value={this.state.sub_3} onChange={e => this.handleChange(e)}type="text" placeholder='model' name='sub_3'/>
                <input value={this.state.body} onChange={e => this.handleChange(e)}type="text" placeholder='body' name='body'/>
                <input value={this.state.cover_image} onChange={e => this.handleChange(e)}type="text" placeholder='cover_image' name='cover_image'/>
                <button 
                onClick={() => {this.createProject({title, sub_1, sub_2, sub_3, body, cover_image})
                this.setState({
                    title: '',
                    sub_1: '',
                    sub_2:'',
                    sub_3: '',
                    body: '',
                    cover_image: ''
                })
                }}
                >CREATE PROJECT</button>
            </div>


            </div>
        )
    }
}