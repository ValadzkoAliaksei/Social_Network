import React from "react";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="content-img"
          src="images/App-background.jpg"
          alt="App-background"
        ></img>
      </div>
      <div className="user">
        <img className="avatar" src="images/avatar1.jpg" alt="avatar"></img>
        <p className="user-name">Valadzko Aliaksei</p>
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  );
};
