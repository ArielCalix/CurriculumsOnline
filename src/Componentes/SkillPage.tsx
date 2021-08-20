import React from 'react';
import { ProgressBar } from "react-bootstrap";
import { ISkills, ISkill } from "../Interfaces/ISkills";
// import 'bootstrap/dist/css/bootstrap.min.css';

const skills: ISkill[] = [
    {
        skillName: 'CSS',
        skillPercentage: 75,
    },
    {
        skillName: 'HTML',
        skillPercentage: 60,
    },
    {
        skillName: 'JavaScript',
        skillPercentage: 60,
    },
    {
        skillName: 'SASS',
        skillPercentage: 60,
    },
    {
        skillName: 'Bootstrap',
        skillPercentage: 75,
    },
    {
        skillName: 'Photoshop',
        skillPercentage: 70,
    },
]

export function SkillPage() {
    const rows = skills.length / 2;
    const Rows = [];
    let start = 0
    let finish = 2
    for (let index = 0; index < rows; index++) {
        const SkillsArray = skills.slice(start, finish);
        start += 2;
        finish += 2;
        Rows.push(<Row key={index} skills={SkillsArray} />);
    }
    return <div className="section" id="skills">
        <div className="container">
            <div className="h4 text-center mb-4 title">Professional Skills</div>
            <div className="card" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                    {Rows}
                </div>
            </div>
        </div>
    </div>
}

function Row(Skills: ISkills) {
    const cols = Skills.skills.map((skill, index) => {
        return <Column key={index} skillName={skill.skillName} skillPercentage={skill.skillPercentage} />
    })
    return <div className="row">
        {cols}
    </div>
}

function Column(Skill: ISkill) {
    return <div className="col-md-6">
        <div className="progress-container progress-primary"><span className="progress-badge">{Skill.skillName}</span>
            <div className="progress">
                <ProgressBar animated striped now={Skill.skillPercentage} />
                <span className="progress-value">{`${Skill.skillPercentage}%`}</span>
            </div>
        </div>
    </div>
}