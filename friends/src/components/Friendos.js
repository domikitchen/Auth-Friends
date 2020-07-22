import React from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friendos extends React.Component {
    state = {
        friendos: [],
        newFriendo: {
            id: uuid(),
            name: "",
            email: "",
            age: ""
        }
    };

    componentDidMount() {
        this.getTheStuff();
    }

    getTheStuff = () => {
        axiosWithAuth().get(`/api/friends`)
            .then(response => {
                this.setState({ friendos: response.data })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    
    onChange = evt => {
        this.setState({
            newFriendo: {
                ...this.state.newFriendo,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onSubmit = evt => {
        evt.preventDefault();

        axiosWithAuth().post(`http://localhost:5000/api/friends`, this.state.newFriendo)
            .then(response => {
                console.log(response);
                this.setState({ friendos: response.data});
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    render() {
        return(
            <div>
                {this.state.friendos.length > 0 && <div>
                    <h3>Friend Data</h3>
                        {this.state.friendos.map(friend => {
                            return(
                                <div key = {friend.id}>
                                    <p>{friend.name} | {friend.email}</p>
                                    <p>{friend.age} years old</p>
                                </div>
                            );
                        })}
                        <form onSubmit = {this.onSubmit}>
                            <h4>New Friend?</h4>
                            <label>
                                Name: 
                                <input
                                    type = "text"
                                    name = "name"
                                    value = {this.state.newFriendo.name}
                                    onChange = {this.onChange}
                                    placeholder = "name..."
                                />
                            </label>
                            <label>
                                Email: 
                                <input
                                    type = "text"
                                    name = "email"
                                    value = {this.state.newFriendo.email}
                                    onChange = {this.onChange}
                                    placeholder = "email..."
                                />
                            </label>
                            <label>
                                Age: 
                                <input
                                    type = "number"
                                    name = "age"
                                    value = {this.state.newFriendo.age}
                                    onChange = {this.onChange}
                                    placeholder = "age..."
                                />
                            </label>
                            <br/>
                            <button onClick = {this.onSubmit}>Add Friend</button>
                        </form>
                    </div>
                }
            </div>
        );
    };
}

export default Friendos;