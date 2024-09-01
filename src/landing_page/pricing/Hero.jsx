import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center mt-5 pt-5">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-1 mb-5 pb-5 fs-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-4">
          <img src="/assets/images/pricingEquity.svg" style={{width:"80%"}}/>
          <h3>Free equity delivery</h3>
          <p className="text-muted p-2">
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="/assets/images/intradayTrades.svg" style={{width:"80%"}} />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted p-2">
          Flat ₹ 20 or 0.03% (whichever is lower) 
          <br/>
          per executed order on intraday trades
          <br/>
          across equity, currency, and commodity 
          <br/>
          trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="/assets/images/pricingEquity.svg"  style={{width:"80%"}}/>
          <h3>Free direct MF</h3>
          <p className="text-muted p-2">
          All direct mutual fund investments are
          <br/>
          absolutely free — ₹ 0 commissions & DP 
          <br/>
          charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
