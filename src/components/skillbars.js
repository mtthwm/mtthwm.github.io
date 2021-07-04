import logo from '../logo.svg';
import { useRef, useState } from "react";

const SkillBars = () => {
    const debugSkills = [
        {
            iconLink: "",
            name: "React",
            percent: 75,
        },
        {
            iconLink: "",
            name: 'Django',
            percent: 89,
        }
    ];

    const [skills, setSkills] = useState(debugSkills);

    return (
        <div className="justify-center col">
            {
                skills.map((element) => {
                    return (
                        <div className="skill-card row">
                            <img src={logo} alt={element.name} width={150} height={150} style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                            <div className="col skill-card-right">
                                <h2 className="skill-text">{element.name}</h2>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{width: `${element.percent}%`}}>
                                        <h1 className="percentage-text">{element.percent}%</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillBars;