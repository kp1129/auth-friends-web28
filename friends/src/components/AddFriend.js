import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const AddFriend = ({setFriends}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const newFriend = {
            name,
            age,
            email,
            id: Date.now()
        }

        axiosWithAuth().post("/api/friends", newFriend)
        .then(res => {
            console.log(res);
            setFriends(res.data);
        });

        setName("");
        setAge("");
        setEmail("");
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleAgeChange = e => {
        setAge(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleNameChange} type="text" placeholder="name" name="name" id="name" value={name} />
            <input onChange={handleAgeChange} type="text" placeholder="age" name="age" id="age" value={age} />
            <input onChange={handleEmailChange} type="text" placeholder="email" name="email" id="email" value={email} />
            <button type="submit">add friend</button>
        </form>
    )
}

export default AddFriend;