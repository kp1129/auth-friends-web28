import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriend from './AddFriend';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      });
  }, []);

  return (
    <div>
      
      <AddFriend setFriends={setFriends} />
    <div className="friends-container">
      {friends.map(friend => (
        <Friend setFriends={setFriends} data={friend} />
      ))}
      </div>
    </div>
  );
};

export default FriendList;
