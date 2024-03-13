import p1 from "./../img/projects/tatoo-site.jpg";
import BtnGitHub from "../components/GitHub-btn/GitHub-Btn";


const Project = () => {
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={p1} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <BtnGitHub link="https://github.com/DashaTit/tatoo_site" />

            </div>
        </div>
    </main>
    );
}

export default Project;