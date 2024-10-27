import React from 'react'

function Footer() {
    return (
        <>
            <div class="footer">
                <div class="container">
                    <div>
                        <h2><b>MIDTOWN</b></h2>
                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Midtown One</a></li>
                            <li><a href="#">Midtown Instamart</a></li>
                            <li><a href="#">Midtown Genie</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Partner with Us</a></li>
                            <li><a href="#">Ride with Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>


                    <div className='doa'>
                        <h3>Download Our App</h3>
                        <a href="#" class="download-link1"><img src="http://pluspng.com/img-png/get-it-on-google-play-png-an-error-occurred-1000.png" alt="Google Play" /></a>
                        <a href="#" class="download-link2"><img src="https://firstpaloalto.com/wp-content/uploads/2020/02/apple-store-logo-png-1-transparent.png" alt="App Store" /></a>
                    </div>
                </div>

                <p>&copy; 2024 Bundl Technologies Pvt. Ltd. All rights reserved.</p>
            </div>

        </>
    )
}

export default Footer
