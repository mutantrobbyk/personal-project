import React, {Component} from 'react'
import './BlogEdit.css'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class BlogEdit extends Component {
    //have access to project_id from match.params 
    constructor (props) {
        super (props)
        this.state = {
            title: "",
            sub_1: "",
            sub_2: "",
            sub_3: "",
            body: "",
            cover_image: ""
        }
        this.handleChange2 = this.handleChange2.bind(this)
    }
    handleChange2(value) {
        this.setState({body: value})
      }
    componentDidMount() {
        this.getProjects()
    }
    getProjects = () => {
        // console.log(this.props)
        axios.get(`/blog/getAllProjects/${this.props.match.params.project_id}`).then(res => {
            this.setState({
                project_id: res.data[0].project_id,
                title: res.data[0].title,
                sub_1: res.data[0].sub_1,
                sub_2: res.data[0].sub_2,
                sub_3: res.data[0].sub_3,
                body: res.data[0].body,
                cover_image: res.data[0].cover_image
            })
            // console.log(res.data)
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateProject = (project_id, body) => {
        axios.put(`/blog/${project_id}`, body).then(() => {
        this.goBack()
        })
      }
      goBack = () => {
          this.props.history.push('/admin/projects')
      }
    render () {
        // console.log(this.state)
        let { title, sub_1, sub_2, sub_3, body, cover_image } = this.state
        // console.log(title)
        return(
            <div>BlogEdit
                <div>
                    <input onChange={e => this.handleChange(e)} value={title} name='title' type="text"/>
                    <input onChange={e => this.handleChange(e)} value={sub_1} name='sub_1' type="text"/>
                    <input onChange={e => this.handleChange(e)} value={sub_2} name='sub_2' type="text"/>
                    <input onChange={e => this.handleChange(e)} value={sub_3} name='sub_3' type="text"/>
                    <ReactQuill value={body} onChange={this.handleChange2}/>
                    <input onChange={e => this.handleChange(e)} value={cover_image}  name='cover_image' type="text"/>
                </div>
                <div>
                    <button onClick={() => this.updateProject(this.state.project_id, this.state)}>UPDATE CHANGES</button>
                    <button onClick={() => this.goBack()}>CANCEL</button>
                </div>
            </div>
        )
    }
}





