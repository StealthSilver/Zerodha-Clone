import React from "react";

function Hero() {
  return (
    <div className="container p-5  text-center">
      <div className="row text-center">
        <h1 className="mt-5">Charges</h1>
        <h5 className="text-muted  mt-2">List of all charges and taxes</h5>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-5">
          <img src="media/assets/pricingEquity.svg"></img>
          <h1>Free Equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/assets/intradayTrades.svg"></img>
          <h1>Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/assets/pricingEquity.svg"></img>
          <h1>Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
