import React, { Component } from 'react'
import './App.css';

class Login extends Component {
    static defaultProps = {
        emailId: ["test123@gmail.com"],
        password: ["abcd@1234"]
    };

    constructor(props){
        super(props)
        this.state = {matched: false, email: "", password: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value})
    }

    handleSubmit(evt){
        if(this.state.email === this.props.emailId[0] && this.state.password === this.props.password[0]) {
            this.setState(prevState => ({matched: !prevState.matched}))
            this.props.history.push("/")
        }else{
            this.props.history.push("/login")
        }
        
    }

    render() {
        return (
            <div className="section-book">
                    <div className="book">
                        <div className="book__form">
                            <form className="form" >
                                <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">Welcome Back!</h2>
                                </div>

                                <div className="form__group">
                                <input
                                    type="email"
                                    className="form__input"
                                    placeholder="Email address"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                                <label htmlFor="email" className="form__label">Email address</label>
                                </div>

                                <div className="form__group">
                                <input
                                    type="password"
                                    className="form__input"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />
                                <label htmlFor="password" className="form__label">Password</label>
                                </div>
                                
                                <div className="form__group">
                                <button onClick={this.handleSubmit} className="btn btn--green" name="submit">
                                            Login &rarr;
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Login