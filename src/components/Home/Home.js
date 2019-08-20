import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import MainImage from '../images/m45a2849.jpg'
import Spring from '../images/noun_suspension_378329.png'
import Piston from '../images/noun_Piston_103816.png'
import Pic from '../images/noun_Photo_1827280.png'
import Wrench from '../images/noun_Wrench_2558227.png'
import Jay from '../images/m45a2996.jpg'

export default class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <div className='main_image'>
                <img className='mainPageImages' src={MainImage} alt="Motorcycle"/>
                <h1 className='SD'>SYNDICATE DEVELOPMENT</h1>
                <p className='sub_1'>Performance, Passion, Precision</p>
                <Link to='/projects'>
                <p className='project_gallery'>PROJECT GALLERY</p>
                </Link>
                </div>
                <hr/>
                <div className='mission_container'>
                <h1 className='mission_statement'>DREAM IT. BUILD IT. RIDE IT. LOVE IT.</h1>
                <h4 className='tagline'><b>SPECIALIZING IN CUSTOM PERFORMANCE MOTOCROSS AND SUPERCROSS MOTORCYCLES</b></h4>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cum, aperiam voluptatum unde sed doloremque nesciunt soluta tempora nihil sunt quia harum amet eius provident earum explicabo at iste debitis.</p>
                </div>
                <hr/>
                <div className='icons'>
                <Link to='/engine'>
                    <div className='icon_pic'>
                <img src={Piston} alt="Piston"/>
                <h3>ENGINE</h3>
                    </div>
                </Link>
                <Link to='/suspension'>
                    <div className="icon_pic">
                <img src={Spring} alt="Suspension"/>
                <h3>SUSPENSION</h3>
                    </div>
                </Link>
                <Link to='/projects'>
                    <div className="icon_pic">
                <img src={Pic} alt="Icon"/>
                <h3>PROJECTS</h3>
                    </div>
                </Link>
                <Link to='/techtips'>
                    <div className="icon_pic">
                <img src={Wrench} alt="Wrench"/>
                <h3>SHOP TALK</h3>
                    </div>
                </Link>
                </div>
                <div className='contact'>
                    <img className='mainPageImages_1' src={Jay} alt=""/>
                    <h1>READY TO START BUILDING?</h1>
                    <Link to='/about'>
                    <p>CONTACT THE SHOP</p>
                    </Link>
                </div>
                <Link to='/auth'>
                <p>Admin</p>
                </Link>
            </div>
        )
    }
}