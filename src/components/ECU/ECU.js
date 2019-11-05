import React, {Component} from 'react'
import './ECU.css'

export default class ECU extends Component{
    hide () {
        const drop = document.getElementById('dropdown')
        if (!drop.classList.contains('hide')) {
            drop.classList.add('hide')
        }
    }
    render(){
        return(
            <div onClick={this.hide} className="ecu-room">
                
            </div>
        )
    }
}