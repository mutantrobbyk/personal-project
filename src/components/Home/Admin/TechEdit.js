import React, {Component} from 'react'
import './TechEdit.css'
import axios from 'axios'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Cloudinary from "../../Blogs/Cloudinary";
import Cloudinary3 from "../../Blogs/Cloudinary3";


export default class TechEdit extends Component {
    constructor (props) {
        super (props)
        this.state = {
            category: '',
            title: '',
            body: '',
            url: '',
            pics: [],
            images: []
        }
        this.handleChange2 = this.handleChange2.bind(this)
    }
    handleChange2(value) {
        this.setState({body: value})
      }
    componentDidMount() {
        this.getTips()
        this.getAdditionalPics()
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
    getAdditionalPics = () => {
        // console.log(this.state.pics)
        axios.get(`/tips/getAllTips/pics/${this.props.match.params.tip_id}`).then(res => {
            this.setState({
                images: res.data
            })
        })
    }
    addMultiplePics = body => {
        console.log(body)
        axios.post(`/techtips/morepics/${this.props.match.params.tip_id}`, body).then(res => {
            this.setState({
                pics: res.data
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
    getPic = pic => {
        console.log(pic)
            this.setState({
              pics: [...this.state.pics, pic]
            });
    };
    render () {
        let {category, title, body, url, pics, images} = this.state
        return(
            <div>TechEdit
                <div>
                    <input onChange={e => this.handleChange(e)} value={category} name='category' type="text"/>
                    <input onChange={e => this.handleChange(e)} value={title} name='title' type="text"/>
                    <ReactQuill value={body} onChange={this.handleChange2}/>
                    <input onChange={e => this.handleChange(e)} value={url} name='url' type="text"/>
                    <Cloudinary/>
                </div>
                <div>
                    <button onClick={() => this.updateTips(this.state.tip_id, this.state)}>UPDATE CHANGES</button>
                    <button onClick={() => this.goBack()}>CANCEL</button>
                </div>
                <hr/>
                <div>
                   {images ? (
                       images.map(el => {
                        return (
                            <img key={el.id} src={el.image} alt=""/>
                        )
                    })) : null}   
                    <hr/>
                   {pics !==null || pics !== undefined || pics !== 'undefined' ? (
                       pics.map(el => {
                       return (
                           <img src={el} alt=""/>
                       )
                   })): <p>No Images To Upload</p>}
                    <Cloudinary3 getPic={this.getPic}/>
                    <button onClick={() => this.addMultiplePics(pics)}>ADD MORE PICS</button>
                </div>
            </div>
        )
    }
}