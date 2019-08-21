import React, {Component} from 'react'
import './About.css'
import axios from 'axios'

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
            <div className='About'>About
            <input type="text" placeholder='your name' name='name' value={name} onChange={this.handleInput}/>
            <input type="text" placeholder='your email' name='email' value={email} onChange={ this.handleInput}/>
            <input type="text" placeholder='subject' name='subject' value={subject} onChange={this.handleInput}/>
            <input type="text" placeholder='message' name='text' value={text} onChange={this.handleInput}/>
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