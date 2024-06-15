import React from "react";
import "./LeaguePopup.css";
import bronze from "../../Assests/broze Medal.svg";
import silver from "../../Assests/Silver medal.png";
import gold from "../../Assests/Gold medal.png";
import platinum from "../../Assests/platinum medal.png";
import diamond from "../../Assests/diamond.png";
import Emerald from "../../Assests/Emerald.png";

const LeaguePopup = ({ setSeeLeagues }) => {
  return (
    <div className="league-cont">
      <div className="league-pop">
        <div className="league-header">
          Leagues
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={() => setSeeLeagues(false)}
          >
            <path
              d="M28.2417 23.9996L35.9997 16.2336C36.5034 15.6612 36.7702 14.9184 36.7458 14.1562C36.7215 13.3941 36.4079 12.6698 35.8687 12.1306C35.3295 11.5915 34.6052 11.2778 33.8431 11.2535C33.0809 11.2292 32.3382 11.4959 31.7657 11.9996L23.9997 19.7576L16.2197 11.9756C15.941 11.697 15.6102 11.4759 15.2461 11.3251C14.882 11.1743 14.4918 11.0967 14.0977 11.0967C13.7036 11.0967 13.3133 11.1743 12.9492 11.3251C12.5852 11.4759 12.2543 11.697 11.9757 11.9756C11.697 12.2543 11.476 12.5851 11.3251 12.9492C11.1743 13.3133 11.0967 13.7035 11.0967 14.0976C11.0967 14.4917 11.1743 14.882 11.3251 15.2461C11.476 15.6102 11.697 15.941 11.9757 16.2196L19.7577 23.9996L11.9997 31.7636C11.6954 32.0356 11.4498 32.3668 11.278 32.737C11.1061 33.1071 11.0116 33.5084 11.0002 33.9164C10.9888 34.3243 11.0607 34.7303 11.2116 35.1094C11.3625 35.4886 11.5891 35.833 11.8777 36.1216C12.1663 36.4102 12.5107 36.6368 12.8899 36.7877C13.269 36.9386 13.675 37.0105 14.0829 36.9991C14.4909 36.9877 14.8922 36.8932 15.2624 36.7213C15.6325 36.5495 15.9637 36.3039 16.2357 35.9996L23.9997 28.2416L31.7557 35.9996C32.3185 36.5624 33.0818 36.8786 33.8777 36.8786C34.6736 36.8786 35.4369 36.5624 35.9997 35.9996C36.5625 35.4369 36.8786 34.6735 36.8786 33.8776C36.8786 33.0817 36.5625 32.3184 35.9997 31.7556L28.2417 23.9996Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="league-inner-cont">
          <div className="league-details">
            <div className="league-sub-det">
              <img src={bronze} alt="bronze" />
              <div className="league-name">
                League
                <span>Bronze League</span>
              </div>
            </div>
            <div className="league-xps">0 XP to 200 XP</div>
          </div>
          <div className="league-details">
            <div className="league-sub-det">
              <img src={silver} alt="bronze" />
              <div className="league-name">
                League
                <span>Silver League</span>
              </div>
            </div>
            <div className="league-xps">200 XP to 600 XP</div>
          </div>
          <div className="league-details">
            <div className="league-sub-det">
              <img src={gold} alt="bronze" />
              <div className="league-name">
                League
                <span>Gold League</span>
              </div>
            </div>
            <div className="league-xps">600 XP to 1250 XP</div>
          </div>
          <div className="league-details">
            <div className="league-sub-det">
              <img src={platinum} alt="bronze" />
              <div className="league-name">
                League
                <span>Platinum League</span>
              </div>
            </div>
            <div className="league-xps">1250 XP to 2100 XP</div>
          </div>
          <div className="league-details">
            <div className="league-sub-det">
              <img src={diamond} alt="bronze" />
              <div className="league-name">
                League
                <span>Diamond League</span>
              </div>
            </div>
            <div className="league-xps">2100 XP to 3500 XP</div>
          </div>
          <div className="league-details">
            <div className="league-sub-det">
              <img src={Emerald} alt="bronze" />
              <div className="league-name">
                League
                <span>Emerald League</span>
              </div>
            </div>
            <div className="league-xps">3500+ XP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaguePopup;
