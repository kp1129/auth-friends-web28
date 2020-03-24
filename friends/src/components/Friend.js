import React from 'react';

const Friend = ({data}) => {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>age: {data.age}</p>
            <p>{data.email}</p>
        </div>
    )
}

export default Friend;