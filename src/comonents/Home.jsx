import React from 'react'
import About from './About'
import Hero from './Hero'
import Scrollitem from './Scrollitem'
import Services from './Services'
import Menu from './Menu'
import Footer from './Footer'
import Rotate from './Rotate'


function Home() {
    return (
        <>
            <Hero />
            <Scrollitem />
            <Menu />
            <About />
            <Services />
            <Footer />
            <Rotate />
        </>
    )
}

export default Home
