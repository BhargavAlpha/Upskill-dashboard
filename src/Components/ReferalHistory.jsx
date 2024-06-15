import React from 'react'
import './ReferalHistory.css'
import products from './ReferItems'
function ReferalHistory({products,onClose,set}) {

    const redeemComponent = ({ product}) => {
        return (
          <div className='redeem-hist-comp'>
               <svg 
               className='redeem-hist-close-btn'
                onClick={onClose}
               xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#F5F5F6"/>
</svg>
            <img src={product.img} alt='mug' className='redeem-hist-img' />
            <div className='redeem-hist-name-cont'>
                    <div className='redeem-hist-name'>{product.name}</div>
                    <div className='redeem-hist-date'>Redeemed on 12th March 2021</div>
            </div>
            <div className='redeem-hist-credit'>-3 credits</div>
          </div>
        );
      };
  return (
    <div className='redeem-card-overlay'>
    <div className='referal-history'>
        <div className='referal-history-header'>
            Referal History
        </div>
        <div className='redeem-hist-cont'>
            {redeemComponent({product:products[0]})}
            {redeemComponent({product:products[1]})}
            {redeemComponent({product:products[2]})}
            {redeemComponent({product:products[3]})}
            {redeemComponent({product:products[4]})}
            {redeemComponent({product:products[5]})}
            {redeemComponent({product:products[6]})}
            {redeemComponent({product:products[7]})}
            {redeemComponent({product:products[8]})}
            {redeemComponent({product:products[9]})}
            {redeemComponent({product:products[10]})}
        </div>
    </div>
    </div>
  )
}

export default ReferalHistory