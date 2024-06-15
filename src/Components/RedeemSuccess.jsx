import React from "react";
import "./RedeemSuccess.css";
function RedeemSuccess({ product, onClose }) {
  return (
    <div className="redeem-card-overlay">
      <div className="refer-success">
        <svg
          onClick={onClose}
          className="redeem-success-close-btn"
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
        <div className="refer-success-div1">Redeem Successful</div>
        <div className="refer-success-div2">
          <span>{product.name}</span>
          <div className="refer-success-div2-sub">
            <img src={product.img} alt="mug" className="redeem-success-img" />
          </div>
        </div>
        <div className="refer-success-div3">
          <span>Send these details to the given whatsapp number:</span>
          <ul>
            <li>Full Name</li>
            <li>Email ID</li>
            <li>Contact Number</li>
            <li>Address</li>
          </ul>
        </div>
        <button className="redeem-send-wa-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M14.5126 3.49125C13.8606 2.83271 13.0841 2.31057 12.2282 1.95529C11.3724 1.6 10.4544 1.41869 9.52771 1.42192C5.64504 1.42192 2.4806 4.58636 2.4806 8.46903C2.4806 9.71347 2.80771 10.9224 3.41926 11.989L2.42371 15.6441L6.15704 14.6628C7.18815 15.2246 8.34726 15.5233 9.52771 15.5233C13.4104 15.5233 16.5748 12.3588 16.5748 8.47614C16.5748 6.5917 15.8424 4.82103 14.5126 3.49125ZM9.52771 14.3286C8.47526 14.3286 7.44415 14.0441 6.54104 13.5108L6.32771 13.3828L4.10904 13.9659L4.69926 11.8041L4.55704 11.5837C3.97233 10.65 3.66185 9.57071 3.66104 8.46903C3.66104 5.24058 6.29215 2.60947 9.52059 2.60947C11.085 2.60947 12.557 3.22103 13.6593 4.33036C14.205 4.87363 14.6375 5.51981 14.9317 6.23146C15.2259 6.94312 15.3759 7.70608 15.373 8.47614C15.3873 11.7046 12.7562 14.3286 9.52771 14.3286ZM12.7419 9.94814C12.5641 9.86281 11.6966 9.43614 11.5402 9.37214C11.3766 9.31525 11.2628 9.28681 11.1419 9.45747C11.021 9.63525 10.6868 10.0335 10.5873 10.1473C10.4877 10.2681 10.381 10.2824 10.2033 10.1899C10.0255 10.1046 9.45659 9.91259 8.78815 9.31525C8.26193 8.84592 7.91348 8.26992 7.80682 8.09214C7.70726 7.91436 7.79259 7.82192 7.88504 7.72947C7.96326 7.65125 8.06282 7.52325 8.14815 7.4237C8.23348 7.32414 8.26904 7.24592 8.32593 7.13214C8.38282 7.01125 8.35437 6.9117 8.31171 6.82636C8.26904 6.74103 7.91348 5.87347 7.77126 5.51792C7.62904 5.17658 7.47971 5.21925 7.37304 5.21214H7.03171C6.91082 5.21214 6.72593 5.25481 6.56237 5.43258C6.40593 5.61036 5.95082 6.03703 5.95082 6.90458C5.95082 7.77214 6.58371 8.61125 6.66904 8.72503C6.75437 8.84592 7.91348 10.6237 9.67704 11.3846C10.0966 11.5695 10.4237 11.6761 10.6797 11.7544C11.0993 11.8895 11.4833 11.8681 11.789 11.8255C12.1304 11.7757 12.8344 11.3988 12.9766 10.9864C13.1259 10.5739 13.1259 10.2255 13.0762 10.1473C13.0264 10.069 12.9197 10.0335 12.7419 9.94814Z"
              fill="white"
            />
          </svg>
          <span>Send to +91 96000 16417</span>
        </button>
      </div>
    </div>
  );
}

export default RedeemSuccess;
