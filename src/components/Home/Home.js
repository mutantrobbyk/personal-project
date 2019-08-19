import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import MainImage from '../images/m45a2849.jpg'
import Spring from '../images/noun_suspension_378329.png'
import Piston from '../images/noun_Piston_103816.png'
import Pic from '../images/noun_Photo_1827280.png'
import Wrench from '../images/noun_Photo_1827280.png'

export default class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <div className='main_image'>
                <img className='mainImage' src={MainImage} alt="Motorcycle"/>
                <h1 className='SD'>SYNDICATE DEVELOPMENT</h1>
                <p className='sub_1'>Performance, Passion,  Precision</p>
                <Link to='projects'>
                <p className='project_gallery'>PROJECT GALLERY</p>
                </Link>
                </div>
                <hr/>
                <div className='mission_container'>
                <h1 className='mission_statement'>DREAM IT. BUILD IT. RIDE IT. LOVE IT.</h1>
                <h4 className='tagline'><b>SPECIALIZING IN CUSTOM PERFORMANCE MOTOCROSS AND SUPERCROSS MOTORCYCLES</b></h4>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.</p>
                </div>
                <Link to=''>
                <img src={Piston} alt="Piston"/>
                </Link>
                <Link>
                <img src={Spring} alt="Suspension"/>
                </Link>
                <Link>
                <img src={Pic} alt="Picture Icon"/>
                </Link>
                <Link>
                <img src={Wrench} alt="Wrench"/>
                </Link>
                <div>
                    
                </div>
                <Link to='/auth'>
                <p>Admin</p>
                </Link>
            </div>
        )
    }
}