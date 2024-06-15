import React, { useEffect, useState } from "react";
import "./MentorReview.css";
import Leftbar from "../Components/Leftbar";
import Navbar from "../Components/Navbar";
import Cookies from "js-cookie";
import FeedBack from "../Components/Mentor/FeedBack";
import AllSubs from "../Components/Mentor/AllSubs";
import NewDash from "../Components/Mentor/NewDash";
const MentorReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [active, setActive] = useState(1);
  const email = Cookies.get("user_email");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/getuser?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.userGot.role !== "mentor") {
        alert("This page is accessible only to mentors");
        window.location.href = "https://upskillmafia.com/dashboard";
        setRedirect(true);
      }
      setUser(result.userGot);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (redirect) {
    return <>Redirecting....</>;
  }

  return (
    <div className="main-cont">
      {isOpen && (
        <div className="abs-menu">
          <Leftbar
            setIsOpen={setIsOpen}
            isMentor={true}
            name={user ? user.name : "User"}
            active={active}
            setActive={setActive}
          />
        </div>
      )}
      <div className="main-left">
        <Leftbar
          isMentor={true}
          name={user ? user.name : "User"}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="main-right">
        <div className="main-nav-cont">
          <Navbar
            setIsOpen={setIsOpen}
            name={user ? user.name : "User"}
            active={active}
          />
        </div>
        {active === 1 && (
          <div className="main-data-cont">
            <FeedBack />
          </div>
        )}
        {active === 2 && (
          <div className="main-data-cont">
            <AllSubs />
          </div>
        )}
        {active === 3 && (
          <div className="main-data-cont">
            <NewDash />
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorReview;
