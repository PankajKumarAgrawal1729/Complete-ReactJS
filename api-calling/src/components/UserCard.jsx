import React from "react";

const UserCard = (props) => {
    const user = props.data;
    // console.log(user);
    return (
        <div className="user-card">
            <img src={user.picture.large} alt="User Pic" className="user-img"/>
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
            <p>{user.phone}</p>
            <p>{user.location.country}</p>
            <button type="button" onClick={props.refresh}>Refresh</button>
        </div>
    );
};

export default UserCard;