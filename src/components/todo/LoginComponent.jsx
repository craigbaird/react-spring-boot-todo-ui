import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            loginFailed: false,
            showSuccessMessage: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    logIn() {
        if (this.state.username === 'in28minutes' && this.state.password === 'tacos') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage: true})
            // this.setState({loginFailed: false})
        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({loginFailed: true})
        }
            console.log('failed');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials loginFailed={this.state.loginFailed} /> */}
                    {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <button className="btn" onClick={this.logIn}>Login</button>
                </div>
            </div>
        )
    }

}

export default LoginComponent;