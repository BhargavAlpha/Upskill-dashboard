import React from "react";
import "./Refer.css";
import coin from "../Assests/coin2.svg";
import ReferCard from "./ReferCard";
import products from "./ReferItems";
function Refer() {
  return (
    <div className="refer-container">
      <div className="ref-top">
        <div className="ref-top-left">
          <div className="ref-top-left1">
            <span className="ref-top-left1-text1">
              Share the Referral Link!
            </span>
            <span className="ref-top-left1-text2">
              Refer more users to Upskill Mafia and earn exciting Rewards.
            </span>
          </div>
          <div className="ref-top-left2">
            <span className="ref-top-left2-text1">Invite Link</span>
            <div className="ref-top-left2-div2">
              <div>
                https://upskillmafia.com/wnhfiencv
                <button className="ref-copy-link-btn"
                onClick={()=>navigator.clipboard.writeText()}
                >Copy Link</button>
              </div>
            </div>
          </div>
          <div className="ref-top-left3">
            <div className="ref-top-left3-div">
              <span className="ref-top-left3-div-text1">24</span>
              <span className="ref-top-left3-div-text2">Referral Credits</span>
              <img src={coin} alt="coin" className="ref-coin-img" />
            </div>
          </div>
        </div>
        <div className="ref-top-right">
          <div className="ref-top-right-div1">How refer and earn works</div>
          <div className="ref-top-right-div2">
            <div className="ref-top-right-div2-sub">
              <div className="ref-top-right-div2-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5.24998 7.00033C5.24998 7.80574 4.59706 8.45866 3.79165 8.45866C2.98623 8.45866 2.33331 7.80574 2.33331 7.00033C2.33331 6.19491 2.98623 5.54199 3.79165 5.54199C4.59706 5.54199 5.24998 6.19491 5.24998 7.00033Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.16667 3.79199L5.25 5.83366"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.16667 10.208L5.25 8.16634"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.0834 10.7913C11.0834 11.5968 10.4304 12.2497 9.62502 12.2497C8.8196 12.2497 8.16669 11.5968 8.16669 10.7913C8.16669 9.98593 8.8196 9.33301 9.62502 9.33301C10.4304 9.33301 11.0834 9.98593 11.0834 10.7913Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11.0834 3.20833C11.0834 4.01375 10.4304 4.66667 9.62502 4.66667C8.8196 4.66667 8.16669 4.01375 8.16669 3.20833C8.16669 2.40292 8.8196 1.75 9.62502 1.75C10.4304 1.75 11.0834 2.40292 11.0834 3.20833Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div>
                <p className="ref-top-right-div2-t1">Share Referral</p>
                <p className="ref-top-right-div2-t2">
                  Share your referral link to your friends.
                </p>
              </div>
            </div>
            <div className="ref-top-right-div2-sub">
              <div className="ref-top-right-div2-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M5.7066 2.54146C6.53552 2.15285 7.46446 2.15285 8.29338 2.54146L12.1966 4.37137C13.0456 4.76941 13.0456 6.14728 12.1966 6.54532L8.29344 8.3752C7.46452 8.76382 6.53558 8.76382 5.70666 8.3752L1.80345 6.54529C0.95443 6.14725 0.954433 4.76939 1.80346 4.37135L5.7066 2.54146Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M1.16669 5.45801V8.66634"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.0834 7.20801V10.1978C11.0834 10.7859 10.7896 11.3364 10.2752 11.6213C9.41869 12.0956 8.04769 12.7497 7.00002 12.7497C5.95235 12.7497 4.58135 12.0956 3.7248 11.6213C3.2104 11.3364 2.91669 10.7859 2.91669 10.1978V7.20801"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="ref-top-right-div2-t1">
                  Share your referral link to your friends.
                </p>
                <p className="ref-top-right-div2-t2">
                  Friends enroll with your link
                </p>
              </div>
            </div>
            <div className="ref-top-right-div2-sub">
              <div className="ref-top-right-div2-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_402_807)">
                    <path
                      d="M12.8334 7H1.16669"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 1.16699V12.8337"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7.58331 7C7.58331 8.28866 8.62798 9.33333 9.91665 9.33333"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.41665 7C6.41665 8.28866 5.37198 9.33333 4.08331 9.33333"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 5.85332C7 4.98422 7.59149 4.22665 8.43464 4.01586C9.37015 3.78199 10.2175 4.62937 9.98366 5.56488C9.77287 6.40803 9.0153 6.99952 8.1462 6.99952H7V5.85332Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M7.00001 5.85332C7.00001 4.98422 6.40852 4.22665 5.56537 4.01586C4.62986 3.78199 3.78247 4.62937 4.01635 5.56488C4.22714 6.40803 4.98471 6.99952 5.85381 6.99952H7.00001V5.85332Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                    <path
                      d="M1.16669 7.00033C1.16669 4.25047 1.16669 2.87554 2.02096 2.02126C2.87523 1.16699 4.25016 1.16699 7.00002 1.16699C9.74988 1.16699 11.1248 1.16699 11.9791 2.02126C12.8334 2.87554 12.8334 4.25047 12.8334 7.00033C12.8334 9.75018 12.8334 11.1251 11.9791 11.9794C11.1248 12.8337 9.74988 12.8337 7.00002 12.8337C4.25016 12.8337 2.87523 12.8337 2.02096 11.9794C1.16669 11.1251 1.16669 9.75018 1.16669 7.00033Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_402_807">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="ref-top-right-div2-t1">Earn Reward!</p>
                <p className="ref-top-right-div2-t2">
                  You and your friend get rewards
                </p>
              </div>
            </div>
          </div>
          <div className="ref-top-right-div3">
            <div className="ref-top-right-div3-sub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_402_820)">
                  <path
                    d="M11.3079 2.67861C10.775 2.30095 10.2163 1.90414 9.64488 1.46961C9.38454 1.2708 9.0837 1.13162 8.76364 1.0619C8.44358 0.992187 8.1121 0.993646 7.79267 1.06618C7.48179 1.13482 7.18976 1.27085 6.93718 1.46465C6.68461 1.65846 6.47763 1.90533 6.33087 2.18785C5.79063 3.27945 5.4132 4.44431 5.21061 5.64531C5.04874 5.4652 4.84897 5.3232 4.62567 5.22953C4.40236 5.13586 4.16107 5.09284 3.91916 5.10357C3.67724 5.11431 3.44071 5.17853 3.22658 5.29161C3.01244 5.40469 2.82604 5.56382 2.68076 5.75756C1.6557 7.00736 1.16803 8.61262 1.32465 10.2214C1.45265 11.8568 2.12413 13.4024 3.23216 14.6121C4.34019 15.8217 5.82108 16.6259 7.43903 16.8966C8.07301 17.0001 8.71736 17.0246 9.35737 16.9697C10.3285 16.886 11.2737 16.6117 12.1388 16.1624C13.0038 15.7131 13.7718 15.0976 14.3987 14.3512C15.0256 13.6048 15.4993 12.7421 15.7924 11.8124C16.0856 10.8828 16.1926 9.90448 16.1073 8.93345C15.8416 5.89572 13.7411 4.40645 11.3079 2.67861ZM12.4048 13.5484C12.2276 13.7112 12.0395 13.8618 11.8419 13.9991C11.9977 13.5845 12.0594 13.1405 12.0226 12.6991C11.9107 11.4193 10.8888 10.0117 9.67437 8.80563C9.53518 8.66892 9.36803 8.56401 9.18441 8.4981C9.00078 8.4322 8.80506 8.40688 8.61071 8.42388C8.41637 8.44089 8.22801 8.49981 8.05863 8.5966C7.88924 8.69338 7.74284 8.82573 7.62951 8.98453C6.22773 10.9529 5.42273 13.0189 6.47507 14.545C5.59523 14.1467 4.83829 13.5197 4.28315 12.7294C3.72801 11.9391 3.39499 11.0144 3.31878 10.0516C3.21574 9.11117 3.45217 8.16485 3.98543 7.38337C4.09277 7.52924 4.20653 7.66941 4.32671 7.80389C4.52538 8.02826 4.78544 8.18949 5.07476 8.26765C5.36407 8.34581 5.66994 8.33748 5.95457 8.24369C6.24361 8.15217 6.50012 7.97921 6.69334 7.74556C6.88656 7.51191 7.00828 7.22749 7.0439 6.9264C7.17531 5.60145 7.53574 4.30936 8.10914 3.1077C8.12096 3.0838 8.13817 3.06296 8.15939 3.04682C8.18062 3.03068 8.2053 3.01968 8.23149 3.01468C8.26628 3.00702 8.30231 3.00704 8.33709 3.01475C8.37186 3.02245 8.40453 3.03766 8.43282 3.0593C9.02358 3.50886 9.60083 3.91877 10.1515 4.30826C12.4268 5.92143 13.9296 6.98918 14.1147 9.1051C14.1894 9.92743 14.074 10.7559 13.7776 11.5266C13.4811 12.2972 13.0114 12.9894 12.4049 13.5497L12.4048 13.5484Z"
                    fill="#FFCF33"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_402_820">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 1.72754) rotate(-5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Your Reward: 
              <span
                style={{color:"#FFA50B"}}
              >
              1 Referral Credit
              </span></span>
            </div>
            <div className="ref-top-right-div3-sub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_402_820)">
                  <path
                    d="M11.3079 2.67861C10.775 2.30095 10.2163 1.90414 9.64488 1.46961C9.38454 1.2708 9.0837 1.13162 8.76364 1.0619C8.44358 0.992187 8.1121 0.993646 7.79267 1.06618C7.48179 1.13482 7.18976 1.27085 6.93718 1.46465C6.68461 1.65846 6.47763 1.90533 6.33087 2.18785C5.79063 3.27945 5.4132 4.44431 5.21061 5.64531C5.04874 5.4652 4.84897 5.3232 4.62567 5.22953C4.40236 5.13586 4.16107 5.09284 3.91916 5.10357C3.67724 5.11431 3.44071 5.17853 3.22658 5.29161C3.01244 5.40469 2.82604 5.56382 2.68076 5.75756C1.6557 7.00736 1.16803 8.61262 1.32465 10.2214C1.45265 11.8568 2.12413 13.4024 3.23216 14.6121C4.34019 15.8217 5.82108 16.6259 7.43903 16.8966C8.07301 17.0001 8.71736 17.0246 9.35737 16.9697C10.3285 16.886 11.2737 16.6117 12.1388 16.1624C13.0038 15.7131 13.7718 15.0976 14.3987 14.3512C15.0256 13.6048 15.4993 12.7421 15.7924 11.8124C16.0856 10.8828 16.1926 9.90448 16.1073 8.93345C15.8416 5.89572 13.7411 4.40645 11.3079 2.67861ZM12.4048 13.5484C12.2276 13.7112 12.0395 13.8618 11.8419 13.9991C11.9977 13.5845 12.0594 13.1405 12.0226 12.6991C11.9107 11.4193 10.8888 10.0117 9.67437 8.80563C9.53518 8.66892 9.36803 8.56401 9.18441 8.4981C9.00078 8.4322 8.80506 8.40688 8.61071 8.42388C8.41637 8.44089 8.22801 8.49981 8.05863 8.5966C7.88924 8.69338 7.74284 8.82573 7.62951 8.98453C6.22773 10.9529 5.42273 13.0189 6.47507 14.545C5.59523 14.1467 4.83829 13.5197 4.28315 12.7294C3.72801 11.9391 3.39499 11.0144 3.31878 10.0516C3.21574 9.11117 3.45217 8.16485 3.98543 7.38337C4.09277 7.52924 4.20653 7.66941 4.32671 7.80389C4.52538 8.02826 4.78544 8.18949 5.07476 8.26765C5.36407 8.34581 5.66994 8.33748 5.95457 8.24369C6.24361 8.15217 6.50012 7.97921 6.69334 7.74556C6.88656 7.51191 7.00828 7.22749 7.0439 6.9264C7.17531 5.60145 7.53574 4.30936 8.10914 3.1077C8.12096 3.0838 8.13817 3.06296 8.15939 3.04682C8.18062 3.03068 8.2053 3.01968 8.23149 3.01468C8.26628 3.00702 8.30231 3.00704 8.33709 3.01475C8.37186 3.02245 8.40453 3.03766 8.43282 3.0593C9.02358 3.50886 9.60083 3.91877 10.1515 4.30826C12.4268 5.92143 13.9296 6.98918 14.1147 9.1051C14.1894 9.92743 14.074 10.7559 13.7776 11.5266C13.4811 12.2972 13.0114 12.9894 12.4049 13.5497L12.4048 13.5484Z"
                    fill="#FFCF33"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_402_820">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 1.72754) rotate(-5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>
                Your Friend’s Reward:
                <span style={{ color: "#FFA50B" }}> 90% OFF ( ₹99</span>
                <span style={{ color: "rgba(255, 165, 11, 0.50)",textDecoration:"line-through" }}> ₹1000 )</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ref-bottom">
        <div className="ref-bottom-header-cont">
          <div className="ref-bottom-sq-left"></div>
          <div className="ref-reward-heading">THE REWARDS SHOP</div>
          <div className="ref-bottom-sq-right"></div>
        </div>

        {Object.keys(products).map((product) => {
          return (
            <ReferCard key={product} product={products[product]} credits={3} />
          );
        })}
      </div>
    </div>
  );
}

export default Refer;
