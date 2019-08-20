import React, {Component} from 'react'
import './Suspension.css'
import Todd from '../images/m45a2817 copy.jpg'

export default class Suspension extends Component {
    render () {
        return (
            <div className='Suspension_room'>
                <div className='Suspension'>
                    <img src={Todd} alt=""/>
                    <h1>SUSPENSION.</h1>
                </div>
            </div>
        )
    }
}