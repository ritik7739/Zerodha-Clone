import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col-4 p-3 mt-3 ">
                <img src="assets/images/smallcaseLogo.png"/>
                <p className='text-small text-muted'>Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-3 mt-3">
                <img src="assets/images/streakLogo.png" style={{width:"50%"}}/>
                <p className='text-small text-muted'>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
            </div>
            <div className="col-4 p-3 mt-3">
                <img src="assets/images/sensibullLogo.svg"/>
                <p className='text-small text-muted'>Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-3 mt-3">
                <img src="assets/images/ZerodhaFundhouse.png"/>
                <p className='text-small text-muted'>Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-3 mt-3">
                <img src="assets/images/goldenpiLogo.png"/>
                <p className='text-small text-muted'>Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.</p>
            </div>
            <div className="col-4 p-3 mt-3">
                <img src="assets/images/dittoLogo.png" style={{width:"40%"}}/>
                <p className='text-small text-muted'>Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.</p>
            </div>
            <button  className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up Now</button>
        </div>
    </div>
);
}

export default Universe;