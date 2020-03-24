import React, {useState} from 'react';
import axios from 'axios';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", {username, password})
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', JSON.stringify(res.data.payload));
            props.history.push("/home");        
        });
    }

    return (
        <form onSubmit={login}>
            <label htmlFor="username">Username: <input type="text" value={username} name="username" id="username" onChange={handleUsernameChange}/></label>
            
            <label htmlFor="password">Password: <input type="text" value={password} name="password" id="password" onChange={handlePasswordChange} /></label>
            
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;