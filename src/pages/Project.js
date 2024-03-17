import { useParams } from 'react-router-dom';

import {projects} from './../helpers/ProjectList'

import p1 from "./../img/projects/tatoo-site.jpg";
import BtnGitHub from "../components/GitHub-btn/GitHub-Btn";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    console.log(project)
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgMax} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    {project.gitHub && (
                        <BtnGitHub link={project.gitHub} />
                    )}

                </div>
            </div>
        </main>
    );
}

export default Project;