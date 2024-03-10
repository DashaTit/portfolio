import htnl from "./../../img/icons/html.svg";
import css from "./../../img/icons/css.svg";
import js from "./../../img/icons/js.svg";
import scss from "./../../img/icons/scss.svg";
import sass from "./../../img/icons/sass.svg";
import git from "./../../img/icons/git.svg";
import react from "./../../img/icons/react.svg";
import python from "./../../img/icons/python.svg";

import "./style.css";


const Main = () => {
    return ( 
        <main className="section">
            <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">My skills</h2>
                        
                        <div className="content-list_item1">
                            <img src={htnl} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                            <img src={scss} alt="" />
                        </div>
                        <div className="content-list_item1">
                            <img src={sass} alt="" />
                            <img src={git} alt="" />
                            <img src={react} alt="" />
                            <img src={python} alt="" />
                        </div>
                    </li>
                </ul>

            </div>
        </main>
    );
}
export default Main;