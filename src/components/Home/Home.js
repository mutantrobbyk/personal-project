import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <Link to='/auth'>
                <p>Admin</p>
                </Link>
            </div>
        )
    }
}