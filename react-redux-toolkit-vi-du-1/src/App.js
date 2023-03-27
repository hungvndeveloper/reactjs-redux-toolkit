import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from './app/appSlice';
import UserInfoForm from "./components/UserInfoForm";
import UserInfo from "./components/UserInfo";

const store = configureStore({
  reducer: {
    app: appReducer
  }
});


function App() {
  return (
    <Provider store={store}>
      <div>
        <UserInfoForm />
        <UserInfo />
      </div>
    </Provider>
  )
}

export default App;
