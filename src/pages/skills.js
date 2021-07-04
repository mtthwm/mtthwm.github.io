import '../styles/pages/about.scss';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js'
import Footer from '../components/footer';
import SkillBars from '../components/skillbars';

const Skills = () => 
{
    return (
        <div className="container about-background">
            <Header/>
            <Navbar/>
            <SkillBars/>
            <Footer/>
        </div>
    )
}

export default Skills;