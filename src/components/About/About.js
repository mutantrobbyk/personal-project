import React, {Component} from 'react'
import './About.css'

export default class About extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        message: '',
        image: ''
    }
    render () {
        return (
            <div className='About'>About
            <input type="text" placeholder='name'/>
            <input type="text" placeholder='phone number'/>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='message'/>
            <input type="text" placeholder='image'/>
            <button>SUBMIT MESSAGE</button>
            </div>
        )
    }
}