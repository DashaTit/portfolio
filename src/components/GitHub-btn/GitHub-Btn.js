import "./../../styles/main.css";
import gh from "./../../img/icons/gitHub-black.svg"

const BtnGitHub = ({link}) => {
    return ( 
        <a  href={link} target="_blank" rel="noreferrer"  className="btn-outline">
                    <img src={gh} alt="" />
                    GitHub repo
        </a>
    );
}

export default BtnGitHub;