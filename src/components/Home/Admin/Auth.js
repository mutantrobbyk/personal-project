import React, {Component} from 'react'
import './Auth.css'
import axios from 'axios'
import {setUser, isAdmin} from '../../../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component {
    state = {
        emailInput: '',
        passwordInput: ''
    }
    registerUser = () => {
        const {
            emailInput: email,
            passwordInput: password
        } = this.state
        axios.post('/auth/register', {email, password})
        .then(res => {
            const {email, user_id, is_admin} = res.data.user
            this.props.setUser({email, user_id, is_admin})
            this.props.history.push('/admin/landing')
        })
        .catch(err => {
            alert('Email already in use.')
        })
    }
    login = () => {
        const {emailInput: email, passwordInput: password} = this.state
        axios.post('/auth/login', {email, password}).then(res => {
            const {email, user_id, is_admin} = res.data.user
            this.props.setUser({email, user_id, is_admin})
            // if (email = 'rob@rob.com') {
            //     is_admin(true)
            // } else {is_admin(false)}
            this.props.history.push('/admin/landing')
        })
        .catch(err => {
            alert('failed login')
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        // console.log(this.props)
        return (
            <div className='Auth'>
                <input onChange={e => this.handleChange(e)} name='emailInput' type="text" placeholder='email' value={this.state.emailInput}/>
                <input onChange={e => this.handleChange(e)} name='passwordInput' type="password" placeholder='password' value={this.state.passwordInput}/>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.registerUser}>REGISTER</button>
            </div>
        )
    }
}
export default connect(null, {setUser, isAdmin})(Auth)