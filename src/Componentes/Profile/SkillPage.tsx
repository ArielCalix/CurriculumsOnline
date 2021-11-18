import React from 'react';
import { ProgressBar } from "react-bootstrap";
import { ISkill, ISkillsPage } from "../../Interfaces/ISkills";
// import 'bootstrap/dist/css/bootstrap.min.css';

const skillsPage: ISkillsPage = {
    title: 'Habilidades',
    skills: [
    {
        skillName: 'CSS',
        skillPercentage: 75,
    },
    {
        skillName: 'HTML',
        skillPercentage: 90,
    },
    {
        skillName: 'JavaScript',
        skillPercentage: 90,
    },
    {
        skillName: 'SASS',
        skillPercentage: 75,
    },
    {
        skillName: 'Bootstrap',
        skillPercentage: 90,
    },
    {
        skillName: 'Photoshop',
        skillPercentage: 70,
    },
]}

export function SkillPage() {
    const rows = skillsPage.skills.length / 2;
    const Rows = [];
    let start = 0
    let finish = 2
    for (let index = 0; index < rows; index++) {
        const SkillsArray = skillsPage.skills.slice(start, finish);
        start += 2;
        finish += 2;
        Rows.push(<RowSkills key={index} skills={SkillsArray} />);
    }
    return <div className="section" id="skills">
        <div className="container">
            <div className="h4 text-center mb-4 title">{skillsPage.title}</div>
            <div className="card" data-data-aos="fade-up" data-data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                    {Rows}
                </div>
            </div>
        </div>
    </div>
}

function RowSkills(props: ISkillsPage) {
    const cols = props.skills.map((skill, index) => {
        return <Column key={index} skillName={skill.skillName} skillPercentage={skill.skillPercentage} />
    })
    return <div className="row">
        {cols}
    </div>
}

function Column(props: ISkill) {
    return <div className="col-md-6">
        <div className="progress-container progress-primary"><span className="progress-badge">{props.skillName}</span>
            <div className="progress">
                <ProgressBar bsPrefix='progress-bar' now={props.skillPercentage} />
                <span className="progress-value">{`${props.skillPercentage}%`}</span>
            </div>
        </div>
    </div>
}