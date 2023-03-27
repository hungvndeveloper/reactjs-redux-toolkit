import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../app/appSlice";

function UserInfoForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = { name, age, gender };
        dispatch(setUserInfo(userInfo));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                />
            </label>
            <label>
                Gender:
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserInfoForm;
