import React, { useEffect, useState } from "react";
import './CoinTable.css'



export default function CoinsTable() { 
  return (
        <div className='table'>
          <div className='table-head'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Currency</h3>
            </div>
            <div className='line-1'>
              <h3>WE BUY</h3>
            </div>
            <div className='line-1'>
              <h3>WE SELL</h3>
            </div>
          </div>
          <hr className="header-hr"/>
            
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Bitcoin</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Dollars</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Etherum</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
          <div className='table-card'>
            <div className='line-1'>
              {/* <img src="img/bit.png" alt=''/> */}
              <h3>Giftcard</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>75.69</h3>
            </div>
            <div className='line-1'>
              <h3><span>$</span>78.67</h3>
            </div>
          </div>
        </div>

     
  );
}
