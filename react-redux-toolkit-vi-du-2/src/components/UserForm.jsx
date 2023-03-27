import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName, setUserAge, setUserGender } from "../app/userSlice";

function UserForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserName(name));
        dispatch(setUserAge(age));
        dispatch(setUserGender(gender));
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
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;
