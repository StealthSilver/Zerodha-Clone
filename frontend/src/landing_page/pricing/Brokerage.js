import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul>
            <li>GST</li>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
            <li>SEBI Charges</li>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
            <li>DP (Depository participant) charges</li>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity. Female demat account holders (as first
            holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
            fee. Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
            <li>Pledging charges</li>
            ₹30 + GST per pledge request per ISIN.
            <li>AMC (Account maintenance charges)</li>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here For non-BSDA
            demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To
            learn more about AMC, Click here
            <li>Corporate action order charges</li>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console. Off-market transfer charges
            ₹25 per transaction.
            <li>Physical CMR request</li>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
            <li>Payment gateway charges</li>
            ₹9 + GST (Not levied on transfers done via UPI)
            <li>Delayed Payment Charges</li>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>

          <ul>
            <li>Brokerage</li>

            <li>SEBI Charges</li>

            <li>DP (Depository participant) charges</li>

            <li>Pledging charges</li>

            <li>AMC (Account maintenance charges)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
