import React, {Component} from 'react'
import './AdminLanding.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class AdminLanding extends Component {
    userLogout = () => {
        axios.delete('/auth/logout').then(() => {
            console.log('Logged out')
            this.props.history.push('/')
        })
    }
    render () {
        return (
            <div className='AdminLanding'>AdminLanding
            <button onClick={this.userLogout}>LOGOUT</button>
            <br/>
            <Link to='/admin/projects'>
            <h3>Update Projects</h3>
            </Link>
            <Link to='/admin/tech'>
            <h3>Update Tech Tips</h3>
            </Link>
            </div>
        )
    }
}