import React, { useEffect, useState } from "react";
import "./Main.css";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import MainCont from "./MainCont";
import Cookies from "js-cookie";
import Dashhack from "./Dashhack";
import WhatsappPopup from "./User/WhatsappPopup";
import Tasks from "./Tasks";
import { useParams } from "react-router-dom";
import { Ripple } from "react-awesome-spinners";
import ForgotPass from "./User/ForgotPass";
import Register from "./User/Register";
import Login from "./User/Login";
import LeaguePopup from "./Leagues/LeaguePopup";
import TasksNew from "./TasksNew";
import Internship from "./Internships/Internship";
import Refer from "./Refer";
// import ShowEnroll from "../../Pages/Syllabus/ShowEnroll";

const Main1 = () => {
  const [showLogin, setShowLogin] = useState(false);
  // const [showEnroll, setShowEnroll] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const otpSent = Cookies.get("otp_sent") ? true : false;

  const [isOpen, setIsOpen] = useState(false);
  const [wpPop, setwpPop] = useState(false);
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState([]);
  const [leaderboard, setLeaderboard] = useState({});

  const [tasksLoading, setTasksLoading] = useState(true);
  const [internships, setInternships] = useState([]);
  const [internshipsLoading, setInternshipsLoading] = useState(true);
  const [active, setActive] = useState(1);
  const email = Cookies.get("user_email");
  const [seeLeagues, setSeeLeagues] = useState(false);
  const [cort, setT] = useState(false);
  const { stage } = useParams();
  const [applied, setApplied] = useState([]);
  const [showRefHistory, setShowRefHistory] = useState(false);
  useEffect(() => {
    const email = Cookies.get("user_email");

    if (!email) {
      // setShowSign(true);
    }
    fetchData();

    fetchData1();
    updatelogin();
    fetchLeaderBoard();
    fetchInternships();
    fetchApplied();
    if (stage) {
      if (
        stage !== "stage" &&
        stage !== "tasks" &&
        stage !== "challenges" &&
        stage !== "hackathon" &&
        stage !== "campus"
      ) {
        window.location.href = `https://${window.location.hostname}/mern/dashboard`;
        return <h1> Not a Valid URL !!!!</h1>;
      } else if (stage === "stage") {
        if (Cookies.get("user_email"))
          window.location.href = `https://${window.location.hostname}/mern/campus/stage`;
      } else if (stage === "campus") {
        if (Cookies.get("user_email"))
          window.location.href = `https://${window.location.hostname}/mern/campus`;
      } else if (stage === "tasks") {
        setActive(3);
      } else if (stage === "challenges") {
        setT(true);
        setActive(3);
      } else if (stage === "hackathon") {
        setActive(2);
      }
    }

    checkEnrolled(email);
  }, []);

  const checkEnrolled = async (email) => {
    try {
      setTasksLoading(true);
      const response = await fetch(
        `https://api.upskillmafia.com/api/v1/user/checkEnrolled?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setShowEnroll(!result.enrolled);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    } finally {
      setTasksLoading(false);
    }
  };

  const fetchInternships = async () => {
    setInternshipsLoading(true);
    try {
      const response = await fetch(
        `https://script.googleusercontent.com/macros/echo?user_content_key=f-iyfix-O8ViI8Db71zY1keq9aw1E1wdZiwln7NY-cJiuvRBhSjjYqxgjZeRlFJ7geGY3Y2xOGHW5eGB4ys8wNl4XMX0igYSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKxdf36711TehRSUg7uBytz8m6dkQYKSYxx2tdd_0qiOi_3UeYBPJ0joth75-aadKy9UMkL0sk1WQB6T5sSe-b5pZbU44FjKKdz9Jw9Md8uu&lib=MnocnJEpWenSzPiZuWA8OHmo_iLhghlE1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      result.shift();
      setInternships(result);
      setInternshipsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setInternshipsLoading(false);
    }
  };
  const updatelogin = async () => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/user/lastlogin?email=${email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log("e", e);
    }
  };
  const fetchLeaderBoard = async () => {
    setTasksLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/leaderboard?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setLeaderboard({
        lb: result.leaderboard,
        myRank: result.myRank,
      });
      setTasksLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setTasksLoading(false);
    }
  };
  const fetchData = async () => {
    setTasksLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/getuser?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setUser(result.userGot);
      setTasksLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setTasksLoading(false);
    }
  };
  const fetchData1 = async () => {
    setTasksLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/submissions/get?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTasks(result?.submissions?.tasks);
      setTasksLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setTasksLoading(false);
    }
  };
  const fetchApplied = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/jobs/getApplications?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setApplied(result?.applied?.jobIds);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  if (showForgot || otpSent)
    return (
      <ForgotPass
        setShowLogin={setShowLogin}
        otpSent={otpSent}
        setShowForgot={setShowForgot}
      />
    );

  if (showSign)
    return <Register setShowLogin={setShowLogin} setShowSign={setShowSign} />;

  if (showLogin)
    return (
      <Login
        setShowLogin={setShowLogin}
        setShowSign={setShowSign}
        setShowForgot={setShowForgot}
      />
    );
  // if (showEnroll) {
  //   return <ShowEnroll />;
  // }
  return (
    <>
      {tasksLoading ? (
        <div className="loader-cont">
          <Ripple color={"#49d043"} />
          Loading...
        </div>
      ) : (
        <div className="main-cont">
          {seeLeagues && <LeaguePopup setSeeLeagues={setSeeLeagues} />}
          {wpPop && (
            <div className="wp-pop-outer">
              <WhatsappPopup email={email} setwpPop={setwpPop} />
            </div>
          )}
          {isOpen && (
            <div className="abs-menu">
              <Leftbar
                setIsOpen={setIsOpen}
                name={user ? user.name : "User"}
                active={active}
                setActive={setActive}
              />
            </div>
          )}
          <div className="main-left">
            <Leftbar
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
                user={user}
                active={active}
              />
            </div>
            {active === 1 && (
              <div className="main-data-cont">
                <MainCont
                  setSeeLeagues={setSeeLeagues}
                  tasksLoading={tasksLoading}
                  setActive={setActive}
                  user={user}
                  tasks={tasks}
                  leaderboard={leaderboard}
                />
              </div>
            )}
            {active === 2 && (
              <div className="main-data-cont">
                <Dashhack />
              </div>
            )}
            {active === 3 && (
              <div className="main-data-cont">
                <div className="tasknewcont">
                  <TasksNew
                    tasksLoading={tasksLoading}
                    tasks={tasks}
                    user={user}
                    setSeeLeagues={setSeeLeagues}
                    cort={cort}
                  />
                </div>
                <div className="taskoldcont">
                  <Tasks
                    tasksLoading={tasksLoading}
                    tasks={tasks}
                    user={user}
                    setSeeLeagues={setSeeLeagues}
                    cort={cort}
                  />
                </div>
              </div>
            )}
            {active === 4 && (
              <div className="main-data-cont">
                <Internship
                  applied={applied}
                  user={user}
                  internships={internships}
                  internshipsLoading={internshipsLoading}
                />
              </div>
            )}
            {active === 10 && (
              <div className="main-data-cont">
                <Refer />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Main1;
