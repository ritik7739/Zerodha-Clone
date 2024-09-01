import React from 'react';

function Team() {
    return ( 
        <div className="container">
        <div className="row p-3 border-top">
            <h1 className='fs-2 text-center'>People</h1>
        </div>

        <div className="row text-muted " style={{fontSize:"1.1em", lineHeight:"1.8"}}>
             <div className="col-6 p-3 ml-2 text-center"> 
                <img src='/assets/images/ritikSingh.jpeg' style={{borderRadius:"100%", width:"60%"}}/>
                <h4 className='mt-5'>Ritik Singh</h4>
                <h6 className='mt-3'>Founder, CEO</h6>
             </div>
             <div className="col-6 p-4">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage </a>/<a href='' style={{textDecoration:"none"}}> TradingQnA </a> /<a href='' style={{textDecoration:"none"}}> Twitter</a></p>
             </div>
        </div>
    </div>
    );
}

export default Team;