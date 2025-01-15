import React from 'react';

function Awards() {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/assets/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all the volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Futures and Options
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Commodities and Derivatives
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Currency Derivatives
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Stocks & IPOs
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Direct Mutual Funds
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        Bonds and govt. securities
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img src='media/assets/pressLogos.png' style={{ width: "90%" }}></img>


                </div>
            </div>
        </div>
    );
}

export default Awards;