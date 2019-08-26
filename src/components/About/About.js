import React, {Component} from 'react'
import './About.css'
import axios from 'axios'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default class About extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        text: '',
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sendEmail = (body) => {
        // const {name, email, subject, text} = this.state
        axios.post('/api/email', body).then(res => {
            this.setState({
                name: '',
                email: '',
                subject: '',
                text: ''
            })
        })
    }
    render () {
        const {name, email, subject,  text} = this.state
        return (
            <div className='About'><br/><br/><br/>SYNDICATE DEVELOPMENT <br/> Doug Hasket has been working on 
            motorcycles since the late 90's. He has woked with many pro motocross and supercross riders
            such as Kyle Chisolm, Bracken Hall, Landon Powell. He has collaborated with industry experts such
            as "Bones", longtime Kawasaki suspension expert. 
            <hr/>
            <p className='shop_contact'>Contact The Shop</p>
            <br/>
            <br/>
            <input type="text" placeholder='your name' name='name' value={name} onChange={this.handleInput}/>
            <input type="text" placeholder='your email' name='email' value={email} onChange={ this.handleInput}/>
            <input type="text" placeholder='subject' name='subject' value={subject} onChange={this.handleInput}/>
            {/* <input type="text" placeholder='message' name='text' value={text} onChange={this.handleInput}/> */}
            <ReactQuill value={text} onChange={this.handleInput}/>
            <br/>
            <br/>
            <button onClick={() => {
                this.sendEmail({name, email, subject, text})
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    text: ''
                })
            }}

                >SUBMIT MESSAGE</button>
            </div>
        )
    }
}