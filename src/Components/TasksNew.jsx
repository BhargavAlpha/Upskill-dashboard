import React, { useState } from "react";
import "./TaskNew.css";

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
const TasksNew = ({ tasks, user, setSeeLeagues, cort }) => {
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
      <div className="tasks-left-outerr">
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
            <div className="tasks-left-header">
              <div className="tasks-left-head">
                <img src={progressimg} alt="progressimg" />
                <span>
                  Your <b style={{ color: "#1ABA5B" }}>Progress</b>
                </span>
              </div>
              <div className="tr-top-submid-cont" style={{ minWidth: "300px" }}>
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
                <div className="task-info-col theadcol">Task No.</div>
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
                      <div className="task-info-col">{t.topic}</div>
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

        {switcher && (
          <div className="tasks-left-cont">
            <div className="tasks-left-header">
              <div className="tasks-left-head">
                <img src={progressimg} alt="progressimg" />
                <span>
                  Your <b style={{ color: "#1ABA5B" }}>Progress</b>
                </span>
              </div>
              <div className="tr-top-submid-cont" style={{ minWidth: "300px" }}>
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
    </div>
  );
};

export default TasksNew;
