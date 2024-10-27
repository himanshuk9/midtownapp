import React from 'react'

function Hero() {
    return (
        <>
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Welcome to <b><span>MIDTOWN</span></b></h1>
                        <h2>  Our mission is to delight your taste buds with fresh dishes crafted .</h2>
                        <br />
                        <a href="/Menu" className='menu-button'><b>View Menu</b></a>
                    </div>
                    <div class="hero-image">
                        <img src="https://noveltysweets.co.nz/wp-content/uploads/2021/08/Veg-Chowmein-min.png" alt="Delicious Food" />
                    </div>
                </div>
            </section>

        </>

    )
}

export default Hero
