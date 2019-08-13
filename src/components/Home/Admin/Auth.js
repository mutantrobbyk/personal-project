import React, {Component} from 'react'
import './Auth.css'
import axios from 'axios'

export default class Auth extends Component {
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
            console.log('registered')
            this.props.history.push('/admin/landing')
        })
        .catch(err => {
            alert('Email already in use.')
        })
    }
    login = () => {
        const {emailInput: email, passwordInput: password} = this.state
        axios.post('/auth/login', {email, password}).then(res => {
            console.log('logged in')
            this.props.history.push('/admin/landing')
        })
        .catch(err => {
            alert('failed login')
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
    render () {
        return (
            <div className='Auth'>
                <input onChange={e => {this.handleChange(e)}} type="text" placeholder='email' value={this.state.emailInput}/>
                <input onChange={e => {this.handleChange(e)}} type="text" placeholder='password' value={this.state.passwordInput}/>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.registerUser}>REGISTER</button>
            </div>
        )
    }
}