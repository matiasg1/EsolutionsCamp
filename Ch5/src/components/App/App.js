import React from "react";
import "./App.css";
import UserContext from "../User.js/User";
import Header from "../Header/Header";
import TripMaker from "../TripMaker/TripMaker";

const user = {
  name: "Marcelo",
  email: "marcelo@gmail.com",
};

function App() {
  return (
    <React.StrictMode>
      <UserContext.Provider value={user}>
        <Header />
        <TripMaker />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
