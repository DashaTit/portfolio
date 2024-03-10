import github from './../../img/icons/gitHub.svg';

import "./style.css"


const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        
                        <li className="social__item"><a href="https://github.com/DashaTit"><img src={github} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>See my GitHub</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;