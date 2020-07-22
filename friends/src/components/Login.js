import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        inputs: {
            username: "",
            password: ""
        }
    }

    onChange = evt => {
        this.setState({
            inputs: {
                ...this.state.inputs,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onSubmit = evt => {
        evt.preventDefault();
        axios.post(`http://localhost:5000/api/login`, { username: `${this.state.inputs.username}`, password: `${this.state.inputs.password}` })
            .then(response => {
                console.log(response);
                localStorage.setItem("token", response.data.payload);
                this.props.history.push(`/friendos`);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div className = "input">
                        <label>Username: </label>
                        <input
                            type = "text"
                            name = "username"
                            value = {this.state.inputs.username}
                            placeholder = "username..."
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className = "input">
                        <label>Password: </label>
                        <input
                            type = "password"
                            name = "password"
                            value = {this.state.inputs.password}
                            placeholder = "password..."
                            onChange = {this.onChange}
                        />
                    </div>
                    <button onClick = {this.onSubmit}>LogIn</button>
                </form>
            </div>
        );
    }
}

export default Login;