import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth';    

const Friend = ({data, setFriends}) => {

    const handleDelete = () => {
        axiosWithAuth().delete(`/api/friends/${data.id}`)
        .then(res => {
            console.log(res);
            setFriends(res.data);
        })
    }
    return (
        <div className="card-div">
        <Card className="card">
            <CardHeader className="friend-name">{data.name}</CardHeader>
            <CardText>Age: {data.age}</CardText>
            <CardText>{data.email}</CardText>
            <Button onClick={handleDelete} className="delete-btn">Delete</Button>
        </Card>
        </div>
    )
}

export default Friend;