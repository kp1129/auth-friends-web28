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
      <h1>wow you logged in</h1>
      {friends.map(friend => (
        <Friend data={friend} />
      ))}
      <AddFriend setFriends={setFriends} />
    </div>
  );
};

export default FriendList;
