import React from "react";
import { useSelector } from "react-redux";

function UserInfo() {
    const { name, age, gender } = useSelector((state) => state.user);

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
        </div>
    );
}

export default UserInfo;
