import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-5" id='supportWrapper'>
               <a href='' style={{color:"white",textDecoration:"none"}}><h4>Support Portal</h4></a>
               <a href=''>Track tickets</a>
            </div>

            <div className="row p-3 mb-5">
                <div className="col-8 p-5">
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='how do i activate F&O,why is my order getting rejected...'/>
                    <br/>
                    <a href="" className='p-3'>Track account opening </a>
                    <a href="" className='p-3'>Track segment activation </a>
                    <a href="" className='p-3'>Intraday margins </a>
                    <br/>
                    <a href="" className='p-3'>Kite user manual</a>
                </div>
                <div className="col-4">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=''>Current Buybacks - August 2024</a></li>
                        <li><a href=''>Offer for sale (OFS) - August 2024</a></li>
                    </ol>
                </div>
            </div>

        </section>
     );
}

export default Hero;