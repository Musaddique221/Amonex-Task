import React from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Router, Routes, Route } from "react-router-dom";
import JobDetail from "./screens/JobDetail";
import Profile from "./screens/Profile";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
