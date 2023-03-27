import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
    const userInfo = useSelector((state) => state.app.userInfo);

    if (!userInfo) {
        return <div>No user info yet</div>;
    }

    return (
        <div>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>Gender: {userInfo.gender}</p>
        </div>
    );
}

export default UserInfo;
