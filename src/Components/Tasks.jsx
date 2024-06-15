import React, { useState } from "react";
import "./Task.css";

import progressimg from "../Assests/progressimg.png";
import bronze from "../Assests/broze Medal.svg";
import silver from "../Assests/Silver medal.png";
import gold from "../Assests/Gold medal.png";
import diamond from "../Assests/diamond.png";
import Emerald from "../Assests/Emerald.png";
import platinum from "../Assests/platinum medal.png";

import viewTask from "../Assests/viewtask.svg";
import viewFeedbackk from "../Assests/viewfeedback.png";
import uploadTask from "../Assests/uploadtask.png";
import expcoin from "../Assests/expcoin.svg";
import taskss from "./Tasks.json";
import Challengess from "./Challenges.json";
import level from "./Levels.json";
import SubmitTask from "./Tasks/SubmitTask";
import ViewFeedback from "./Tasks/ViewFeedback";
const Tasks = ({ tasks, user, setSeeLeagues, cort }) => {
  const [switcher, setSwitcher] = useState(cort);
  const [submitTask, setSubmitTask] = useState(false);
  const [viewFeedback, setViewFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [data, setData] = useState("");
  const updates = {};
  tasks?.forEach((task) => {
    updates[task.taskName] = task;
  });

  const levels = {
    "Bronze III": {
      img: bronze,
    },
    "Bronze II": {
      img: bronze,
    },
    "Bronze I": {
      img: bronze,
    },
    "Silver III": {
      img: silver,
    },
    "Silver II": {
      img: silver,
    },
    "Silver I": {
      img: silver,
    },
    "Gold III": {
      img: gold,
    },
    "Gold II": {
      img: gold,
    },
    "Gold I": {
      img: gold,
    },
    "Platinum III": {
      img: platinum,
    },
    "Platinum II": {
      img: platinum,
    },
    "Platinum I": {
      img: platinum,
    },
    "Diamond III": {
      img: diamond,
    },
    "Diamond II": {
      img: diamond,
    },
    "Diamond I": {
      img: diamond,
    },
    Emarald: {
      img: Emerald,
    },
  };

  return (
    <div className="tasks-cont">
      {submitTask && (
        <SubmitTask setSubmitTask={setSubmitTask} taskName={data} />
      )}
      {viewFeedback && (
        <ViewFeedback
          setViewFeedback={setViewFeedback}
          setSubmitTask={setSubmitTask}
          feedback={feedback}
        />
      )}
      <div className="tasks-left-outer">
        <div className="task-switch">
          <div
            className={`ts-tasks ${!switcher && "task-act"}`}
            onClick={() => setSwitcher(false)}
          >
            Tasks
          </div>
          <div
            className={`ts-challanges ${switcher && "task-act"}`}
            onClick={() => setSwitcher(true)}
          >
            Challenges
          </div>
        </div>
        {!switcher && (
          <div className="tasks-left-cont">
            <div className="tasks-left-head">
              <img src={progressimg} alt="progressimg" />
              <span>
                Your Task <b style={{ color: "#1ABA5B" }}>Progress</b>
              </span>
            </div>
            <div className="tl-mob-details-cont">
              <div className="tl-mob-det-top">
                <div className="tl-mob-det-top-text">
                  <img src={uploadTask} alt="uploadTask" />
                  Submit Task
                </div>
                <div className="tl-mob-det-top-text">
                  <img src={viewTask} alt="uploadTask" />
                  View/ReSubmit
                </div>
                <div className="tl-mob-det-top-text">
                  <img src={viewFeedbackk} alt="uploadTask" />
                  Feedback
                </div>
              </div>
              <div className="tl-mob-det-btm">
                <div className="tl-mob-det-btm-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_df_264_1109)">
                      <circle cx="13.5" cy="13" r="5" fill="#FFCF33" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_df_264_1109"
                        x="0.5"
                        y="0"
                        width="26"
                        height="26"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.2 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_264_1109"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_264_1109"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect2_foregroundBlur_264_1109"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Pending Review
                </div>
                <div className="tl-mob-det-btm-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_df_264_1112)">
                      <circle cx="13" cy="13" r="5" fill="#FF5A5A" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_df_264_1112"
                        x="0"
                        y="0"
                        width="26"
                        height="26"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_264_1112"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_264_1112"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect2_foregroundBlur_264_1112"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Rejected
                </div>
                <div className="tl-mob-det-btm-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_df_264_1115)">
                      <circle cx="13.5" cy="13" r="5" fill="#51B846" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_df_264_1115"
                        x="0.5"
                        y="0"
                        width="26"
                        height="26"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.317647 0 0 0 0 0.721569 0 0 0 0 0.27451 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_264_1115"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_264_1115"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect2_foregroundBlur_264_1115"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Approved
                </div>
              </div>
            </div>
            <div className="tasks-info-cont">
              <div className="tasks-info-row thead">
                <div className="task-info-col theadcol tic-no">No.</div>
                <div className="task-info-col theadcol">Task Name</div>
                <div className="task-info-col theadcol">Points</div>
                <div className="task-info-col theadcol">Actions</div>
                <div className="task-info-col theadcol">Status</div>
              </div>
              <div className="tasks-det-cont">
                {taskss.map((t, ind) => {
                  return (
                    <div className="tasks-info-row" key={ind}>
                      <div className="task-info-col tic-no">
                        <div className="task-num">{ind + 1}</div>
                      </div>
                      <div className="task-info-col">{t.name}</div>
                      <div className="task-info-col">
                        <div className="task-exp-cont">
                          <img src={expcoin} alt="expcoin"></img>
                          {t.points} XP
                        </div>
                      </div>

                      <div className="task-info-col">
                        {updates.hasOwnProperty(t.nameid) ? (
                          updates[t.nameid]?.status === "submitted" ? (
                            <div
                              className="task-submit-btn"
                              style={{ color: "#fff" }}
                              onClick={() => {
                                const feed = {
                                  feedbackk: "resubmit",
                                  feedback: updates[t.nameid]?.feedback || "",
                                  task: updates[t.nameid].taskLink,
                                  rejected:
                                    updates[t.nameid].status === "rejected",
                                };
                                setData(t.nameid);
                                setFeedback(feed);
                                setViewFeedback(true);
                              }}
                            >
                              <div>View/ReSubmit</div>
                              <img src={viewTask} alt="uploadTask" />
                            </div>
                          ) : (
                            <div
                              className="task-submit-btn"
                              style={{ color: "#51B846" }}
                              onClick={() => {
                                const feed = {
                                  feedbackk: "feedback",
                                  feedback: updates[t.nameid]?.feedback || "",
                                  task: updates[t.nameid].taskLink,
                                  rejected:
                                    updates[t.nameid].status === "rejected",
                                };
                                setData(t.nameid);
                                setFeedback(feed);
                                setViewFeedback(true);
                              }}
                            >
                              <div>View Feedback </div>
                              <img src={viewFeedbackk} alt="uploadTask" />
                            </div>
                          )
                        ) : (
                          <div
                            className="task-submit-btn"
                            onClick={() => {
                              setData(t.nameid);
                              setSubmitTask(true);
                            }}
                          >
                            <div>Submit Task</div>
                            <img src={uploadTask} alt="uploadTask" />
                          </div>
                        )}
                      </div>
                      <div className="task-info-col">
                        {updates.hasOwnProperty(t.nameid) ? (
                          updates[t.nameid]?.status === "submitted" ? (
                            <div
                              className="task-status-btn"
                              style={{ color: "#FFCF33" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="27"
                                viewBox="0 0 26 27"
                                fill="none"
                              >
                                <g filter="url(#filter0_df_194_752)">
                                  <circle
                                    cx="13"
                                    cy="13.5"
                                    r="5"
                                    fill="#FFCF33"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_df_194_752"
                                    x="0"
                                    y="0.5"
                                    width="26"
                                    height="26"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.2 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_194_752"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_194_752"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      result="effect2_foregroundBlur_194_752"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div>Review Pending</div>
                            </div>
                          ) : updates[t.nameid]?.status === "approved" ? (
                            <div
                              className="task-status-btn"
                              style={{ color: "#51B846" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="27"
                                viewBox="0 0 26 27"
                                fill="none"
                              >
                                <g filter="url(#filter0_df_194_780)">
                                  <circle
                                    cx="13"
                                    cy="13.5"
                                    r="5"
                                    fill="#51B846"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_df_194_780"
                                    x="0"
                                    y="0.5"
                                    width="26"
                                    height="26"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0.317647 0 0 0 0 0.721569 0 0 0 0 0.27451 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_194_780"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_194_780"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      result="effect2_foregroundBlur_194_780"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div>Approved</div>
                            </div>
                          ) : (
                            <div className="task-status-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="27"
                                viewBox="0 0 27 27"
                                fill="none"
                              >
                                <g filter="url(#filter0_df_194_766)">
                                  <circle
                                    cx="13.5"
                                    cy="13.5"
                                    r="5"
                                    fill="#FF5A5A"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_df_194_766"
                                    x="0.5"
                                    y="0.5"
                                    width="26"
                                    height="26"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_194_766"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_194_766"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      result="effect2_foregroundBlur_194_766"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div>Rejected</div>
                            </div>
                          )
                        ) : (
                          <div className="task-status-btn pending-sub">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                            >
                              <g filter="url(#filter0_df_194_738)">
                                <circle
                                  cx="13.5"
                                  cy="13.5"
                                  r="5"
                                  fill="#FF5A5A"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_df_194_738"
                                  x="0.5"
                                  y="0.5"
                                  width="26"
                                  height="26"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset />
                                  <feGaussianBlur stdDeviation="4" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_194_738"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_194_738"
                                    result="shape"
                                  />
                                  <feGaussianBlur
                                    stdDeviation="2"
                                    result="effect2_foregroundBlur_194_738"
                                  />
                                </filter>
                              </defs>
                            </svg>
                            <div>Pending Submission</div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* {switcher === 2 && <div className="tasks-left-cont task-coming-soon">Coming Soon!!!</div>} */}

        {switcher && (
          <div className="tasks-left-cont">
            <div className="tasks-left-head">
              <img src={progressimg} alt="progressimg" />
              <span>
                Your Challenges <b style={{ color: "#1ABA5B" }}>Progress</b>
              </span>
            </div>
            <div className="tl-mob-details-cont">
              <div className="tl-mob-det-top">
                <div className="tl-mob-det-top-text">
                  <img src={uploadTask} alt="uploadTask" />
                  Submit Solution
                </div>
                <div className="tl-mob-det-top-text">
                  <img src={viewTask} alt="uploadTask" />
                  View/ReSubmit
                </div>
                <div className="tl-mob-det-top-text">
                  <img src={viewFeedbackk} alt="uploadTask" />
                  Feedback
                </div>
              </div>
              <div className="tl-mob-det-btm">
                <div className="tl-mob-det-btm-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_df_264_1109)">
                      <circle cx="13.5" cy="13" r="5" fill="#FFCF33" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_df_264_1109"
                        x="0.5"
                        y="0"
                        width="26"
                        height="26"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.2 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_264_1109"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_264_1109"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect2_foregroundBlur_264_1109"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Pending Review
                </div>
                <div className="tl-mob-det-btm-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_df_264_1112)">
                      <circle cx="13" cy="13" r="5" fill="#FF5A5A" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_df_264_1112"
                        x="0"
                        y="0"
                        width="26"
                        height="26"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_264_1112"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_264_1112"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect2_foregroundBlur_264_1112"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Rejected
                </div>
                <div className="tl-mob-det-btm-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_df_264_1115)">
                      <circle cx="13.5" cy="13" r="5" fill="#51B846" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_df_264_1115"
                        x="0.5"
                        y="0"
                        width="26"
                        height="26"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.317647 0 0 0 0 0.721569 0 0 0 0 0.27451 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_264_1115"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_264_1115"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          result="effect2_foregroundBlur_264_1115"
                        />
                      </filter>
                    </defs>
                  </svg>
                  Approved
                </div>
              </div>
            </div>
            <div className="tasks-info-cont">
              <div className="tasks-info-row thead">
                <div className="task-info-col theadcol tic-no">No.</div>
                <div className="task-info-col theadcol">Chall. Name</div>
                <div className="task-info-col theadcol">Points</div>
                <div className="task-info-col theadcol">Actions</div>
                <div className="task-info-col theadcol">Status</div>
              </div>
              <div className="tasks-det-cont">
                {Challengess.map((t, ind) => {
                  return (
                    <div className="tasks-info-row" key={ind}>
                      <div className="task-info-col tic-no">
                        <div className="task-num">{ind + 1}</div>
                      </div>
                      <div className="task-info-col">{t.name}</div>
                      <div className="task-info-col">
                        <div className="task-exp-cont">
                          <img src={expcoin} alt="expcoin"></img>
                          {t.points} XP
                        </div>
                      </div>

                      <div className="task-info-col">
                        {updates.hasOwnProperty(t.nameid) ? (
                          updates[t.nameid]?.status === "submitted" ? (
                            <div
                              className="task-submit-btn"
                              style={{ color: "#fff" }}
                              onClick={() => {
                                const feed = {
                                  feedbackk: "resubmit",
                                  feedback: updates[t.nameid]?.feedback || "",
                                  task: updates[t.nameid].taskLink,
                                  rejected:
                                    updates[t.nameid].status === "rejected",
                                };
                                setData(t.nameid);
                                setFeedback(feed);
                                setViewFeedback(true);
                              }}
                            >
                              <div>View/ReSubmit</div>
                              <img src={viewTask} alt="uploadTask" />
                            </div>
                          ) : (
                            <div
                              className="task-submit-btn"
                              style={{ color: "#51B846" }}
                              onClick={() => {
                                const feed = {
                                  feedbackk: "feedback",
                                  feedback: updates[t.nameid]?.feedback || "",
                                  task: updates[t.nameid].taskLink,
                                  rejected:
                                    updates[t.nameid].status === "rejected",
                                };
                                setData(t.nameid);
                                setFeedback(feed);
                                setViewFeedback(true);
                              }}
                            >
                              <div>View Feedback </div>
                              <img src={viewFeedbackk} alt="uploadTask" />
                            </div>
                          )
                        ) : (
                          <div
                            className="task-submit-btn"
                            onClick={() => {
                              setData(t.nameid);
                              setSubmitTask(true);
                            }}
                          >
                            <div>Submit Task</div>
                            <img src={uploadTask} alt="uploadTask" />
                          </div>
                        )}
                      </div>
                      <div className="task-info-col">
                        {updates.hasOwnProperty(t.nameid) ? (
                          updates[t.nameid]?.status === "submitted" ? (
                            <div
                              className="task-status-btn"
                              style={{ color: "#FFCF33" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="27"
                                viewBox="0 0 26 27"
                                fill="none"
                              >
                                <g filter="url(#filter0_df_194_752)">
                                  <circle
                                    cx="13"
                                    cy="13.5"
                                    r="5"
                                    fill="#FFCF33"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_df_194_752"
                                    x="0"
                                    y="0.5"
                                    width="26"
                                    height="26"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.2 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_194_752"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_194_752"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      result="effect2_foregroundBlur_194_752"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div>Review Pending</div>
                            </div>
                          ) : updates[t.nameid]?.status === "approved" ? (
                            <div
                              className="task-status-btn"
                              style={{ color: "#51B846" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="27"
                                viewBox="0 0 26 27"
                                fill="none"
                              >
                                <g filter="url(#filter0_df_194_780)">
                                  <circle
                                    cx="13"
                                    cy="13.5"
                                    r="5"
                                    fill="#51B846"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_df_194_780"
                                    x="0"
                                    y="0.5"
                                    width="26"
                                    height="26"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0.317647 0 0 0 0 0.721569 0 0 0 0 0.27451 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_194_780"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_194_780"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      result="effect2_foregroundBlur_194_780"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div>Approved</div>
                            </div>
                          ) : (
                            <div className="task-status-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="27"
                                viewBox="0 0 27 27"
                                fill="none"
                              >
                                <g filter="url(#filter0_df_194_766)">
                                  <circle
                                    cx="13.5"
                                    cy="13.5"
                                    r="5"
                                    fill="#FF5A5A"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_df_194_766"
                                    x="0.5"
                                    y="0.5"
                                    width="26"
                                    height="26"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_194_766"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_194_766"
                                      result="shape"
                                    />
                                    <feGaussianBlur
                                      stdDeviation="2"
                                      result="effect2_foregroundBlur_194_766"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div>Rejected</div>
                            </div>
                          )
                        ) : (
                          <div className="task-status-btn pending-sub">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                            >
                              <g filter="url(#filter0_df_194_738)">
                                <circle
                                  cx="13.5"
                                  cy="13.5"
                                  r="5"
                                  fill="#FF5A5A"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_df_194_738"
                                  x="0.5"
                                  y="0.5"
                                  width="26"
                                  height="26"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset />
                                  <feGaussianBlur stdDeviation="4" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.352941 0 0 0 0 0.352941 0 0 0 1 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_194_738"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_194_738"
                                    result="shape"
                                  />
                                  <feGaussianBlur
                                    stdDeviation="2"
                                    result="effect2_foregroundBlur_194_738"
                                  />
                                </filter>
                              </defs>
                            </svg>
                            <div>Pending Submission</div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="tasks-right-cont">
        <div className="tr-top-cont">
          <div className="tr-top-expoints">
            <img src={expcoin} alt="expcoin"></img>
            Experience Points!
          </div>
          <div className="tr-top-mid">
            <div className="tr-mid">
              <div className="tr-mid-bronze-img">
                <img
                  src={levels[user?.userDetails?.level]?.img || bronze}
                  alt="bronze"
                />
              </div>
              <div>
                <div className="tr-mid-text">League</div>
                <div className="tr-mid-head">
                  {(user?.userDetails?.level === "Bronze III"
                    ? "Bronze III"
                    : user?.userDetails?.level) || "Bronze III"}
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                >
                  <circle
                    cx="4.5"
                    cy="5"
                    r="4.5"
                    fill="white"
                    fillOpacity="0.05"
                  />
                </svg>
              </div>
              <div className="tr-mid-exp-pts">
                {user?.userDetails?.points || "0"} XP
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => setSeeLeagues(true)}
              style={{ cursor: "pointer" }}
            >
              <g clipPath="url(#clip0_194_882)">
                <path
                  d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C20.9971 14.3861 20.0479 16.6736 18.3608 18.3607C16.6736 20.0479 14.3861 20.9971 12 21Z"
                  fill="white"
                />
                <path
                  d="M11.5451 9.54528H11.2451C10.8521 9.53562 10.4696 9.67312 10.1727 9.93081C9.87578 10.1885 9.68583 10.5478 9.64007 10.9383C9.61391 11.3289 9.74151 11.7143 9.99562 12.0121C10.2497 12.3099 10.6102 12.4966 11.0001 12.5323V17.1823C11.0001 17.5801 11.1581 17.9616 11.4394 18.2429C11.7207 18.5242 12.1023 18.6823 12.5001 18.6823C12.8979 18.6823 13.2794 18.5242 13.5607 18.2429C13.8421 17.9616 14.0001 17.5801 14.0001 17.1823V12.0003C14.0001 11.3492 13.7414 10.7247 13.281 10.2643C12.8206 9.80393 12.1962 9.54528 11.5451 9.54528Z"
                  fill="white"
                />
                <path
                  d="M11.8303 8.4663C12.1697 8.4663 12.5014 8.36566 12.7836 8.1771C13.0658 7.98855 13.2858 7.72055 13.4156 7.40699C13.5455 7.09343 13.5795 6.7484 13.5133 6.41553C13.4471 6.08266 13.2837 5.77689 13.0437 5.53691C12.8037 5.29692 12.4979 5.13349 12.165 5.06727C11.8322 5.00106 11.4871 5.03505 11.1736 5.16493C10.86 5.29481 10.592 5.51475 10.4035 5.79694C10.2149 6.07914 10.1143 6.41091 10.1143 6.7503C10.1141 6.97569 10.1584 7.19889 10.2446 7.40714C10.3308 7.6154 10.4572 7.80462 10.6166 7.96399C10.7759 8.12336 10.9652 8.24976 11.1734 8.33595C11.3817 8.42214 11.6049 8.46643 11.8303 8.4663Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_194_882">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="tr-top-submid-cont">
            <div className="tr-submid-progress">
              <div>{level[user?.userDetails?.level]?.start} XP</div>
              <div>{level[user?.userDetails?.level]?.end + 1} XP</div>
            </div>
            <div className="tr-prog-bar">
              <div
                className="tr-prog-bar-col"
                style={{
                  width: `${
                    ((user?.userDetails?.points -
                      level[user?.userDetails?.level]?.start) /
                      (level[user?.userDetails?.level]?.end -
                        level[user?.userDetails?.level]?.start)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
            <div className="tr-submid-progress">
              <div>{user?.userDetails?.level}</div>
              <div>
                <b>
                  {level[user?.userDetails?.level]?.end -
                    user?.userDetails?.points +
                    1}
                  XP{" "}
                </b>
                to Level UP
              </div>
            </div>
          </div>
          <div className="tr-top-btm-cont">
            <span>
              {" "}
              Get Your Next Task Approved to gain
              <b style={{ color: "#fff", fontWeight: "600" }}> Points</b>
            </span>
            <img src={expcoin} alt="excoin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
