import React from "react";
import "./RedeemCard.css";
import ReferCard from "./ReferCard";
import products from "./ReferItems";
import StarButton from "./StarButton";

function RedeemCard({ product, credits, onClose,onConfirm }) {
  const cardStyle =
    credits >= product.referals
      ? {
          boxShadow: "0px 4px 32px 0px rgba(255, 207, 51, 0.05)",
          border: "1px solid #49D043",
        }
      : {};

  const cardHeaderStyle =
    credits >= product.referals
      ? {
          background: "#f8b913",
          color: "var(--Neutral-Color-950, #25252C)",
        }
      : {};
  return (
    <div className="redeem-card-overlay">
      <div className="redeem-card">
        <div className="redeem-left-card" style={cardStyle}>
          <div className="refer-card-header" style={cardHeaderStyle}>
            {product.referals} Referals
          </div>
          <div className="refer-card-div1">{product.name}</div>
          <div className="refer-card-div2">
            <img src={product.img} alt="mug" className="refer-card-img" />
          </div>
        </div>
        <div className="redeem-card-right">
          <svg
            onClick={onClose}
            className="redeem-close-btn"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
              fill="#F5F5F6"
            />
          </svg>
          <div className="redeem-text">Redeem Summary</div>
          <div className="redeem-text-cont">
            <div className="redeem-card-text-div1">
              <span className="redeem-card-text-div-text1">
                Total Referral Credits
              </span>
              <span>{credits}</span>
            </div>
            <div className="redeem-card-text-div2">
              <span className="redeem-card-text-div-text1">
                Required Referral Credits
              </span>
              <span>{product.referals}</span>
            </div>
            <div className="redeem-card-text-div3">
              <span className="redeem-card-text-div-text1">
                Balance Referral Credits
              </span>
              <span>{credits - product.referals}</span>
            </div>
          </div>
          <div onClick={onConfirm}  style={{width:"100%",display:"flex",alignSelf:"stretch"}}>
            <StarButton text="Redeem" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default RedeemCard;
