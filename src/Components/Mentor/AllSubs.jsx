import React, { useEffect, useState } from "react";
import "./FeedBack.css";
import Cookies from "js-cookie";
import ForgotPass from "../User/ForgotPass";
import Register from "../User/Register";
import Login from "../User/Login";
import Givefeedback from "./Givefeedback";
import reset from "../../Assests/reset.png";

import taskss from "../Tasks.json";
import ViewFeedback from "../Tasks/ViewFeedback";
const AllSubs = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(Cookies.get("mentor_filter") || "");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const otpSent = Cookies.get("otp_sent") ? true : false;
  const [giveFeedBack, setGiveFeedBack] = useState(false);
  const [viewFeedback, setViewFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");

  const fetchbyEmail = async () => {
    setTasksLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/submissions/get?email=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setTasks(result.submissions.tasks);
      if (Cookies.get("mentor_filter")) {
        const t = result?.tasks?.filter(
          (task) => task.taskName === Cookies.get("mentor_filter")
        );
        setFilteredTasks(t);
      } else {
        setFilteredTasks(result.submissions.tasks);
      }
      setTasksLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setTasksLoading(false);
    }
  };

  useEffect(() => {
    const email = Cookies.get("user_email");
    if (!email) {
      setShowSign(true);
    }
  }, []);

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

  return (
    <div className="mfb-cont">
      {giveFeedBack && (
        <Givefeedback setGiveFeedBack={setGiveFeedBack} data={data} />
      )}
      {viewFeedback && (
        <ViewFeedback setViewFeedback={setViewFeedback} feedback={feedback} />
      )}

      <div className="task-details-cont">
        <div className="tdc-header">
          <div className="tdc-header-head">
            Task <b style={{ color: "#FED12E" }}>Submissions</b>
          </div>
          <div className="tdc-search-cont">
            <div className="search-cont-inner">
              <input
                className="tdc-email-inp"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search By Email"
              />
              <div className="search-cta" onClick={fetchbyEmail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.6353 17.871L15.7644 13.9984C18.6608 10.1278 17.871 4.64195 14.0004 1.74551C10.1297 -1.15092 4.6439 -0.361157 1.74747 3.50949C-1.14897 7.38013 -0.359203 12.866 3.51144 15.7624C6.62066 18.0891 10.8911 18.0891 14.0004 15.7624L17.873 19.635C18.3596 20.1216 19.1486 20.1216 19.6353 19.635C20.1219 19.1483 20.1219 18.3593 19.6353 17.8727L19.6353 17.871ZM8.78818 15.015C5.34814 15.015 2.55946 12.2263 2.55946 8.78623C2.55946 5.34618 5.34814 2.55751 8.78818 2.55751C12.2282 2.55751 15.0169 5.34618 15.0169 8.78623C15.0132 12.2247 12.2267 15.0113 8.78818 15.015Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div
                className="search-cta"
                onClick={() => {
                  fetchbyEmail()
                  setFilter("Select Task");
                  Cookies.remove("mentor_filter");
                }}
              >
                <img src={reset} alt="reset" />
              </div>

              <select
                className="tdc-email-inp"
                type="text"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  if (e.target.value !== "Select Task") {
                    Cookies.set("mentor_filter", e.target.value);
                    const t = tasks.filter(
                      (task) => task.taskName === e.target.value
                    );
                    setFilteredTasks(t);
                  } else {
                    Cookies.remove("mentor_filter");
                    setFilteredTasks(tasks);
                  }
                }}
              >
                <option>Select Task</option>
                {taskss.map((task, ind) => {
                  return <option key={ind}>{task.nameid}</option>;
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="tdc-list-cont">
          {!tasksLoading && filteredTasks?.length === 0 && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ts-det">No Data Available</div>
            </div>
          )}

          {tasksLoading && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="ts-det">Data Loading ...</div>
            </div>
          )}
          {!tasksLoading && filteredTasks?.length !== 0 && (
            <div className="tasks-info-cont">
              <div className="tasks-info-row thead">
                <div className="task-info-col theadcol tic-no">No.</div>
                <div className="task-info-col theadcol">Task Name</div>
                <div className="task-info-col theadcol">Status</div>
                <div className="task-info-col theadcol">Actions</div>
                <div className="task-info-col theadcol">Status</div>
              </div>
              <div className="tasks-det-cont">
                {filteredTasks.map((t, ind) => {
                  return (
                    <div className="tasks-info-row" key={ind}>
                      <div className="task-info-col tic-no">
                        <div className="task-num">{ind + 1}</div>
                      </div>
                      <div className="task-info-col">{t.taskName}</div>
                      <div className="task-info-col">{t.status}</div>
                      <div className="task-info-col">
                        <div className="task-exp-cont">
                          <div
                            className="task-submit-btn"
                            style={{ color: "#fff" }}
                            onClick={() => {
                              if (t.taskLink.startsWith("https://")) {
                                window.open(t.taskLink, "_blank");
                              } else {
                                var fullURL = "https://" + t.taskLink;
                                window.open(fullURL, "_blank");
                              }
                            }}
                          >
                            <div>View Task</div>
                          </div>
                        </div>
                      </div>

                      <div className="task-info-col">
                        {t.status === "submitted" && (
                          <div
                            className="task-submit-btn"
                            style={{ color: "#fff" }}
                            onClick={() => {
                              setData(t);
                              setGiveFeedBack(true);
                            }}
                          >
                            <div>Review</div>
                          </div>
                        )}
                        {t.status !== "submitted" && (
                          <div
                            className="task-submit-btn"
                            style={{ color: "#51B846" }}
                            onClick={() => {
                              const feed = {
                                feedbackk: "feedback",
                                feedback: t.feedback || "",
                                task: t.taskLink,
                                rejected: t.status === "rejected",
                              };
                              setData(t.nameid);
                              setFeedback(feed);
                              setViewFeedback(true);
                            }}
                          >
                            <div>View Feedback </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllSubs;
