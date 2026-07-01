import React from "react";
import CreateUser from "./components/User/CreateUser";
import DashBoard from "./components/Dashboard/DashBoard";
import { Routes, Route } from 'react-router-dom'
import UserDetails from "./components/UserDetails/UserDetails";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/create" element={ <CreateUser />} />
        <Route path="/userDetails" element={ <UserDetails />} />
      </Routes>
    </>
  );
};

export default App;
