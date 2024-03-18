import "./../../styles/main.css";

const LinkBtn = ({link}) => {
    return ( 
        <a  href={link} target="_blank" rel="noreferrer"  className="btn-outline btn-links">
                    GitHub pages
        </a>
    );
}
export default LinkBtn;