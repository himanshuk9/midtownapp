import React from 'react'

function Services() {
    return (
        <>
            <div className='s'>
                <h1 id='serviceheading'><b>--- How It Works --- </b></h1>

                <div className="servicecard">
                    <div class="scard">
                        <p class="cardtitle">Easy Order</p>
                        <h1 class="cardtitle1"><i class="fa-solid fa-paper-plane"></i></h1>

                        <p class="smalldesc">
                            Our user-friendly interface ensures a smooth and hassle-free ordering process. Enjoy fast, reliable delivery right to your doorstep, or choose to pick up your order at your convenience.
                        </p>
                        <div class="gocorner">
                            <div class="goarrow">→</div>
                        </div>
                    </div>


                    <div class="scard">

                        <p class="cardtitle"><b>High Quality</b></p>
                        <h1 class="cardtitle1"><i class="fa-solid fa-trophy"></i></h1>

                        <p class="smalldesc">
                            Our team of passionate chefs uses the freshest, locally-sourced ingredients to create a diverse menu that caters to all tastes and preferences.
                        </p>
                        <div class="gocorner">
                            <div class="goarrow">→</div>
                        </div>
                    </div>  <div class="scard">
                        <p class="cardtitle">Fast Delivery </p>
                        <h1 class="cardtitle3"><b><i class="fa-solid fa-clock"></i></b> </h1>
                        <p class="smalldesc">
                            That's why we pride ourselves on offering a lightning-fast delivery service, ensuring that your favorite meals arrive hot and fresh right at your doorstep.
                        </p>
                        <div class="gocorner">
                            <div class="goarrow">→</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
