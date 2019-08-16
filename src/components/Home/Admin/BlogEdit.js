import React, {Component} from 'react'
import './BlogEdit.css'
import axios from 'axios'

export default class BlogEdit extends Component {
    //have access to project_id from match.params 
    state = {
        projects: {}
    }
    componentDidMount() {
        this.getProjects()
    }
    getProjects = () => {
        console.log(this.props)
        axios.get(`/blog/getAllProjects/${this.props.match.params.project_id}`).then(res => {
            this.setState({
               projects: res.data[0]
            })
            console.log(res.data)
        })
    }
    render () {
        console.log(this.state)
        let { title, sub_1, sub_2, sub_3, body, cover_image } = this.state.projects
        console.log(title)
        return(
            <div>BlogEdit
                <div>
                    <input value={title} name={title} type="text"/>
                    <input value={sub_1} name={sub_1} type="text"/>
                    <input value={sub_2} name={sub_2} type="text"/>
                    <input value={sub_3} name={sub_3} type="text"/>
                    <input value={body} name={body} type="text"/>
                    <input value={cover_image}  name={cover_image} type="text"/>
                </div>
            </div>
        )
    }
}





