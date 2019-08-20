import React, {Component} from 'react'
import './Engine.css'
import Matt from '../images/m45a2778 copy.jpg'

export default class Engine extends Component {
    render () {
        return (
            <div className='Engine_room'>
                <div className='Engine'>
                <img src={Matt} alt=""/>
                <h1>ENGINE.</h1>
                </div>
            </div>
        )
    }
}