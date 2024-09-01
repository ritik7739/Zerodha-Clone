import React from 'react';

function RightSection({
    imagURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div className='mt-3'>
                    <a href={learnMore} style={{marginLeft:"120px",textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col-6 ">
                    <img src={imagURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;