import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../src/app/userSlice";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <UserForm />
        <UserInfo />
      </div>
    </Provider>
  )
}

export default App;
