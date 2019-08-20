import React, {Component} from 'react'
import './TechEdit.css'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class TechEdit extends Component {
    constructor (props) {
        super (props)
        this.state = {
            category: '',
            title: '',
            body: '',
            url: ''
        }
        this.handleChange2 = this.handleChange2.bind(this)
    }
    handleChange2(value) {
        this.setState({body: value})
      }
    componentDidMount() {
        this.getTips()
    }
    getTips = () => {
        axios.get(`/tips/getAllTips/${this.props.match.params.tip_id}`).then(res => {
            this.setState({
                tip_id: res.data[0].tip_id,
                category: res.data[0].category,
                title: res.data[0].title,
                body: res.data[0].body,
                url: res.data[0].url
            })
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateTips = (tip_id, body) => {
        axios.put(`/tips/${tip_id}`, body).then(() => {
            this.goBack()
        })
    }
    goBack = () => {
        this.props.history.push('/admin/tech')
    }
    render () {
        let {category, title, body, url} = this.state
        return(
            <div>TechEdit
                <div>
                    <input onChange={e => this.handleChange(e)} value={category} name='category' type="text"/>
                    <input onChange={e => this.handleChange(e)} value={title} name='title' type="text"/>
                    <ReactQuill value={body} onChange={this.handleChange2}/>
                    <input onChange={e => this.handleChange(e)} value={url} name='url' type="text"/>
                </div>
                <div>
                    <button onClick={() => this.updateTips(this.state.tip_id, this.state)}>UPDATE CHANGES</button>
                    <button onClick={() => this.goBack()}>CANCEL</button>
                </div>
            </div>
        )
    }
}