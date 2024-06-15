import React, { useState } from "react";
import "./ReferCard.css";
import "./RedeemCard.css"; 
import RedeemCard from "./RedeemCard"; 
import RedeemSuccess from "./RedeemSuccess";
import ReferalHistory from "./ReferalHistory";
import products from "./ReferItems";
import StarButton from "./StarButton";



function ReferCard({ product, credits }) {
  const [isRedeemCardOpen, setIsRedeemCardOpen] = useState(false);
  const [isAnotherCardOpen, setIsAnotherCardOpen] = useState(false);
  const locked = credits < product.referals;

  const cardStyle = credits >= product.referals
    ? {
        boxShadow: "0px 4px 32px 0px rgba(255, 207, 51, 0.05)",
        border: "1px solid #49D043"
      }
    : {};

  const cardHeaderStyle = credits >= product.referals
    ? {
        background: "#f8b913",
        color: "var(--Neutral-Color-950, #25252C)"
      }
    : {};

  const handleRedeemClick = () => {
    setIsRedeemCardOpen(true);
  };

  const closeRedeemCard = () => {
    setIsRedeemCardOpen(false);
  };

  const handleRedeemConfirmed = () => {
    setIsRedeemCardOpen(false);
    setIsAnotherCardOpen(true);
  };

  const closeAnotherCard = () => {
    setIsAnotherCardOpen(false);
  };

  return (
    <>
      <div className="refer-card" style={cardStyle}>
        <div className="refer-card-header" style={cardHeaderStyle}>{product.referals} Referals</div>
        <div className="refer-card-div1">{product.name}</div>
        <div className="refer-card-div2">
          <img src={product.img} alt="mug" className="refer-card-img" />
        </div>
        <div className="refer-card-div3">
          {locked ? (
            <button className="refer-card-lock-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
              >
                <path
                  d="M10.6092 5.4639V4.6092C10.6092 2.33975 8.76947 0.5 6.50002 0.5C4.23056 0.5 2.39084 2.33975 2.39084 4.60918V5.46388C1.31119 6.01485 0.631082 7.12408 0.629761 8.3362V11.2713C0.631714 13.0537 2.07607 14.498 3.8584 14.5H9.14163C10.924 14.498 12.3683 13.0537 12.3703 11.2713V8.33622C12.369 7.12411 11.6889 6.01485 10.6092 5.4639ZM6.50002 2.26108C7.79683 2.26108 8.84811 3.31236 8.84811 4.60918V5.10756H4.15192V4.60918C4.15192 3.31236 5.2032 2.26108 6.50002 2.26108ZM10.6092 11.2713C10.6092 12.0818 9.95217 12.7389 9.14166 12.7389H3.85842C3.04791 12.7389 2.39087 12.0818 2.39087 11.2713V8.33622C2.39087 7.52571 3.04791 6.86867 3.85842 6.86867H9.14166C9.95217 6.86867 10.6092 7.52571 10.6092 8.33622V11.2713V11.2713Z"
                  fill="#AFAFAF"
                />
                <path
                  d="M6.20659 8.62988H6.7936C7.27991 8.62988 7.67414 9.02412 7.67414 9.51042C7.67414 9.99672 7.27991 10.391 6.7936 10.391H6.20659C5.72028 10.391 5.32605 9.99672 5.32605 9.51042C5.32605 9.02412 5.72028 8.62988 6.20659 8.62988Z"
                  fill="#AFAFAF"
                />
              </svg>
            </button>
          ) : (
            <div onClick={handleRedeemClick} >
            <StarButton text="Redeem Reward" />
            </div>
            
          )}
        </div>
      </div> 
      {isRedeemCardOpen && <RedeemCard onClose={closeRedeemCard} onConfirm={handleRedeemConfirmed} product={product} credits={credits} />}
      {isAnotherCardOpen && <RedeemSuccess onClose={closeAnotherCard} product={product} />}
      {/* {isAnotherCardOpen && <ReferalHistory products={products} onClose={closeAnotherCard} />} */}
    </>
  );
}

export default ReferCard;
