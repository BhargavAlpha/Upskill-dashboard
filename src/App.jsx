import "./App.css";
import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import { useEffect } from "react";
import Main1 from "./Components/Main";
import Cookies from "js-cookie";
import MentorReview from "./Pages/MentorReview";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mern">
          
          <Route path="dashboard" element={<Main1 />} />
          <Route path="dashboard/mentor/review" element={<MentorReview />} />
          {/* <Route
            path="dashboard/hackathon-task"
            element={<GoogleDocEmbed1 />}
          /> */}
          <Route path="dashboard/:stage" element={<Main1 />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;