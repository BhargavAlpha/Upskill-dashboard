import React, { useEffect, useRef, useState } from "react";
import "./MainCont.css";
import level from "./Levels.json";
import expcoin from "../Assests/expcoin.svg";
import Podium from "../Assests/Podium.png";
import goldcup from "../Assests/goldcup.png";
import silvercup from "../Assests/silvercup.png";
import bronzecup from "../Assests/bronzecup.png";

import bronze from "../Assests/broze Medal.svg";
import silver from "../Assests/Silver medal.png";
import gold from "../Assests/Gold medal.png";
import diamond from "../Assests/diamond.png";
import Emerald from "../Assests/Emerald.png";
import platinum from "../Assests/platinum medal.png";

import fire from "../Assests/fire.gif";

import StreakCalendar from "./StreakCalendar";
import { Virtuoso } from "react-virtuoso";
import LeaderBoard from "./LeaderBoard";
import { Ripple } from "react-awesome-spinners";
const MainCont = ({ user, leaderboard, setSeeLeagues }) => {
  const [st, setSt] = useState(user ? user.userDetails.streakData.streak : 0);
  const virtuosoRef = useRef();

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

  useEffect(() => {
    if (virtuosoRef && virtuosoRef.current) {
      virtuosoRef.current.scrollToIndex({
        index: leaderboard.myRank - 3,
        behavior: "smooth",
        align: "center",
      });
    }
  }, [virtuosoRef, leaderboard]);
  useEffect(() => {
    if (user) {
      setSt(user.userDetails.streakData.streak);
      const darr = user.userDetails.streakData.streakDates;
      if (
        new Date().getDate() - new Date(darr[darr.length - 1]).getDate() >
        1
      ) {
        setSt(0);
      } else if (
        new Date().getDate() - new Date(darr[darr.length - 1]).getDate() ===
        0
      ) {
        const timeDifference = new Date() - new Date(darr[darr.length - 1]);
        if (timeDifference < 300000) {
          setSt(user.userDetails.streakData.streak - 1);
        }
      } else if (
        new Date() - new Date(darr[darr.length - 1]) >
        48 * 60 * 60 * 1000
      ) {
        setSt(0);
      }
    }
  }, [user]);

  return (
    <div className="mc-cont">
      <div className="mc-left">
        <div className="mc-left-top ">
          <div className="tasks-right-cont trc-mc">
            <div className="tr-top-cont">
              <div className="tr-top-expoints">
                <img src={expcoin} alt="expcoin"></img>
                Experience Points!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_194_872)">
                    <path
                      d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM9 15.75C7.66498 15.75 6.35994 15.3541 5.2499 14.6124C4.13987 13.8707 3.27471 12.8165 2.76382 11.5831C2.25293 10.3497 2.11925 8.99251 2.3797 7.68314C2.64015 6.37377 3.28303 5.17103 4.22703 4.22703C5.17104 3.28302 6.37377 2.64015 7.68314 2.3797C8.99252 2.11925 10.3497 2.25292 11.5831 2.76381C12.8165 3.2747 13.8707 4.13987 14.6124 5.2499C15.3541 6.35993 15.75 7.66498 15.75 9C15.7478 10.7895 15.036 12.5052 13.7706 13.7706C12.5052 15.036 10.7895 15.7478 9 15.75Z"
                      fill="white"
                    />
                    <path
                      d="M8.65881 7.15893H8.43381C8.13904 7.15169 7.8522 7.25481 7.62952 7.44808C7.40683 7.64135 7.26437 7.91082 7.23006 8.20368C7.21043 8.49664 7.30613 8.78568 7.49671 9.00905C7.68729 9.23242 7.95765 9.37243 8.25006 9.39918V12.8867C8.25006 13.185 8.36859 13.4712 8.57956 13.6822C8.79054 13.8931 9.07669 14.0117 9.37506 14.0117C9.67343 14.0117 9.95958 13.8931 10.1706 13.6822C10.3815 13.4712 10.5001 13.185 10.5001 12.8867V9.00018C10.5001 8.51185 10.3061 8.04352 9.96078 7.69822C9.61547 7.35291 9.14714 7.15893 8.65881 7.15893Z"
                      fill="white"
                    />
                    <path
                      d="M8.87294 6.34976C9.12749 6.34976 9.37632 6.27428 9.58797 6.13286C9.79961 5.99144 9.96457 5.79044 10.062 5.55527C10.1594 5.3201 10.1849 5.06133 10.1352 4.81168C10.0856 4.56202 9.96298 4.3327 9.78299 4.15271C9.603 3.97272 9.37368 3.85015 9.12403 3.80049C8.87437 3.75083 8.6156 3.77631 8.38043 3.87372C8.14526 3.97113 7.94426 4.13609 7.80284 4.34774C7.66142 4.55938 7.58594 4.80821 7.58594 5.06276C7.58584 5.2318 7.61906 5.3992 7.6837 5.55539C7.74835 5.71158 7.84314 5.8535 7.96267 5.97302C8.0822 6.09255 8.22412 6.18735 8.38031 6.25199C8.5365 6.31663 8.7039 6.34986 8.87294 6.34976Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_194_872">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mc-tr-top-mid">
                <div className="tr-mid">
                  <div className="tr-mid-bronze-img mc-trmbi">
                    <img
                      src={levels[user?.userDetails?.level]?.img || bronze}
                      alt="bronze"
                    />
                  </div>
                  <div>
                    <div className="mc-tr-mid-text">League</div>
                    <div className="mc-tr-mid-head">
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
                  <div className="mc-tr-mid-exp-pts">
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
                <div className="mc-tr-submid-progress">
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
              <div className="mc-tr-top-btm-cont">
                <span>
                  Complete Tasks to get
                  <b style={{ color: "#fff", fontWeight: "600" }}> Points</b>
                </span>
                <img src={expcoin} alt="excoin" />
              </div>
            </div>
          </div>
        </div>
        <div className="mc-left-btm">
          <div className="mc-streak-card">
            <div className="mc-streak-top">
              <div className="mc-str-left">
                <img src={fire} alt="fire"></img>
                <div className="mc-cstr">
                  Current Streak!
                  <span>
                    <b>{st}</b>&nbsp;Days
                  </span>
                </div>
              </div>
              <div className="mc-str-right">
                <div className="mc-cstr">
                  Longest Streak!
                  <span>
                    <b>{user?.userDetails?.streakData?.longestStreak || 0}</b>
                    &nbsp;Days
                  </span>
                </div>
              </div>
            </div>
            <div className="streak-cal">
              <StreakCalendar
                streakDates={
                  user ? user.userDetails.streakData.streakDates : []
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mc-mid">
        <div className="mc-top-card">
          <div className="mc-ce-text">Campus Explanation Video</div>
          <div className="mc-vid">
            {/* <video
              src="https://s3.ap-south-1.amazonaws.com/upskillmafia.com/intro.mp4"
              controls
            ></video> */}
            <iframe
              // width="100%"
              src="https://www.youtube.com/embed/p2RlOaI6zVc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href={`https://${window.location.hostname}/mern/campus`}
            target="_blank"
            className="join-anc"
            rel="noreferrer"
          >
            <div className="mc-join-cont">
              <span>Join Campus</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17.061 10.0251L13.475 6.43913C13.1936 6.15786 12.812 5.99991 12.4141 6C12.0163 6.00009 11.6348 6.15823 11.3535 6.43963C11.0722 6.72102 10.9143 7.10262 10.9144 7.50048C10.9145 7.89834 11.0726 8.27986 11.354 8.56113L13.793 11.0001H5C4.60218 11.0001 4.22064 11.1582 3.93934 11.4395C3.65804 11.7208 3.5 12.1023 3.5 12.5001C3.5 12.898 3.65804 13.2795 3.93934 13.5608C4.22064 13.8421 4.60218 14.0001 5 14.0001H13.793L11.354 16.4391C11.0726 16.7204 10.9145 17.1019 10.9144 17.4998C10.9143 17.8976 11.0722 18.2792 11.3535 18.5606C11.6348 18.842 12.0163 19.0002 12.4141 19.0003C12.812 19.0003 13.1936 18.8424 13.475 18.5611L17.061 14.9751C17.7162 14.3181 18.0842 13.428 18.0842 12.5001C18.0842 11.5722 17.7162 10.6822 17.061 10.0251Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <div className="mc-join-det">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g opacity="0.5" clipPath="url(#clip0_410_1642)">
                <path
                  d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0V0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19975 1.88378 7.99335 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9981 9.5907 13.3653 11.1157 12.2405 12.2405C11.1157 13.3653 9.59071 13.9981 8 14Z"
                  fill="white"
                />
                <path
                  d="M7.69705 6.3636H7.49704C7.23503 6.35716 6.98006 6.44883 6.78212 6.62062C6.58418 6.79242 6.45754 7.03195 6.42704 7.29226C6.4096 7.55268 6.49466 7.8096 6.66407 8.00815C6.83348 8.2067 7.0738 8.33115 7.33371 8.35493V11.4549C7.33371 11.7201 7.43907 11.9745 7.62661 12.162C7.81414 12.3496 8.0685 12.4549 8.33371 12.4549C8.59893 12.4549 8.85329 12.3496 9.04082 12.162C9.22836 11.9745 9.33372 11.7201 9.33372 11.4549V8.00026C9.33372 7.56619 9.16128 7.1499 8.85435 6.84297C8.54741 6.53603 8.13112 6.3636 7.69705 6.3636Z"
                  fill="white"
                />
                <path
                  d="M7.88717 5.64445C8.11343 5.64445 8.33461 5.57735 8.52274 5.45165C8.71087 5.32594 8.8575 5.14727 8.94409 4.93824C9.03068 4.7292 9.05333 4.49918 9.00919 4.27726C8.96505 4.05535 8.85609 3.85151 8.6961 3.69152C8.53611 3.53152 8.33227 3.42257 8.11035 3.37843C7.88844 3.33429 7.65842 3.35694 7.44938 3.44353C7.24034 3.53011 7.06167 3.67674 6.93596 3.86487C6.81026 4.053 6.74316 4.27418 6.74316 4.50045C6.74308 4.6507 6.77261 4.7995 6.83007 4.93834C6.88753 5.07718 6.97179 5.20332 7.07804 5.30957C7.18429 5.41582 7.31044 5.50008 7.44927 5.55754C7.58811 5.615 7.73691 5.64453 7.88717 5.64445Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_410_1642">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>
              Join the upskill mafia campus and find new study buddies to
              connect with!
            </span>
          </div>
        </div>
      </div>
      <div className="mc-right">
        <div className="mc-lb-top">
          <div className="mc-lb-top-head">
            <img src={Podium} alt="podium" />
            <span>Leaderboard</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              onClick={() => setSeeLeagues(true)}
            >
              <g clipPath="url(#clip0_278_2377)">
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM9 15.75C7.66498 15.75 6.35994 15.3541 5.2499 14.6124C4.13987 13.8707 3.27471 12.8165 2.76382 11.5831C2.25293 10.3497 2.11925 8.99251 2.3797 7.68314C2.64015 6.37377 3.28303 5.17103 4.22703 4.22703C5.17104 3.28302 6.37377 2.64015 7.68314 2.3797C8.99252 2.11925 10.3497 2.25292 11.5831 2.76381C12.8165 3.2747 13.8707 4.13987 14.6124 5.2499C15.3541 6.35993 15.75 7.66498 15.75 9C15.7478 10.7895 15.036 12.5052 13.7706 13.7706C12.5052 15.036 10.7895 15.7478 9 15.75V15.75Z"
                  fill="white"
                />
                <path
                  d="M8.65881 7.15856H8.43381C8.13904 7.15132 7.8522 7.25444 7.62952 7.44771C7.40683 7.64098 7.26437 7.91046 7.23006 8.20331C7.21043 8.49628 7.30613 8.78531 7.49671 9.00868C7.68729 9.23205 7.95765 9.37206 8.25006 9.39881V12.8863C8.25006 13.1847 8.36859 13.4708 8.57956 13.6818C8.79054 13.8928 9.07669 14.0113 9.37506 14.0113C9.67343 14.0113 9.95958 13.8928 10.1706 13.6818C10.3815 13.4708 10.5001 13.1847 10.5001 12.8863V8.99981C10.5001 8.51148 10.3061 8.04315 9.96078 7.69785C9.61547 7.35255 9.14714 7.15856 8.65881 7.15856V7.15856Z"
                  fill="white"
                />
                <path
                  d="M8.87294 6.34939C9.12749 6.34939 9.37632 6.27391 9.58797 6.13249C9.79961 5.99108 9.96457 5.79007 10.062 5.55491C10.1594 5.31974 10.1849 5.06096 10.1352 4.81131C10.0856 4.56166 9.96298 4.33234 9.78299 4.15235C9.603 3.97235 9.37368 3.84978 9.12403 3.80012C8.87437 3.75046 8.6156 3.77595 8.38043 3.87336C8.14526 3.97077 7.94426 4.13573 7.80284 4.34737C7.66142 4.55902 7.58594 4.80785 7.58594 5.06239C7.58584 5.23143 7.61906 5.39883 7.6837 5.55502C7.74835 5.71121 7.84314 5.85313 7.96267 5.97266C8.0822 6.09219 8.22412 6.18698 8.38031 6.25162C8.5365 6.31627 8.7039 6.34949 8.87294 6.34939V6.34939Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_278_2377">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mc-lb-top-text">
            <span>Climb the leaderboard by earning Exp. Points</span>
          </div>
        </div>
        {/* <div className="mc-lb-mid"> */}
        {leaderboard.lb ? (
          <>
            {leaderboard?.lb?.slice(0, 3)?.map((e, i) => {
              return (
                <div className="mc-rank-list-chip" key={i}>
                  <div className="mc-rank-list-name-cont">
                    {i > 2 && `${i + 1}`}
                    {i === 0 && <img src={goldcup} alt="goldcup"></img>}
                    {i === 1 && <img src={silvercup} alt="goldcup"></img>}
                    {i === 2 && <img src={bronzecup} alt="goldcup"></img>}
                    <span>{e.name}</span>
                  </div>
                  <div className="mc-rank-list-points-cont">
                    <img src={expcoin} alt="expcoin" />
                    <div>{e?.userDetails?.points}XP</div>
                  </div>
                </div>
              );
            })}
            <Virtuoso
              ref={virtuosoRef}
              className="mc-lb-mid"
              data={leaderboard?.lb?.slice(3)}
              itemContent={(index, e) => (
                <LeaderBoard
                  e={e}
                  index={index + 3}
                  mine={leaderboard?.myRank === index + 3}
                />
              )}
            />
          </>
        ) : (
          <div
            className="mc-lb-mid"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Ripple color={"#49d043"} />
            Loading...
          </div>
        )}
        {/* </div> */}
        <div className="mc-lb-btm">
          <div className="gotorankcont">
            <div className="your-rank">Your Rank!</div>
            <div
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => {
                virtuosoRef?.current?.scrollToIndex({
                  index: leaderboard.myRank - 3,
                  align: "center",
                  behavior: "smooth",
                });
              }}
            >
              <u>Go to your rank</u>
            </div>
          </div>
          <div className="mc-rank-list-chip top-ranks">
            <div className="mc-my-rank-list-name-cont">
              {leaderboard.myRank ? leaderboard.myRank + 1 : "..."}

              <span>{user?.name}</span>
            </div>
            <div className="mc-rank-list-points-cont">
              <img src={expcoin} alt="expcoin" />
              <div>{user?.userDetails?.points} XP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCont;
