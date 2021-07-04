import '../styles/pages/about.scss';
import Header from '../components/header.js';
import Who from '../components/who.js';
import Navbar from '../components/navbar.js'
import Footer from '../components/footer';
import {useRef, createRef, useEffect} from 'react';

const About = () => 
{
    const startRef = createRef(null);
    const scroll = () => () => {
        console.log("SCROLL!!");
        startRef.current && startRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="container about-background">
            <Header onScroll={scroll()}/>
            <Navbar/>
            <Who id="who" ref={startRef}/>
            <Footer/>
        </div>
    )
}

export default About;