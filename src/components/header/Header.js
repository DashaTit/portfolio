import "./style.css";

const Header = () => {
    return ( 
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Darya</em></strong><br />
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <button className="btn"><a className="header__text" href="https://t.me/arrya_dt">Contact me</a></button>
        </div>
    </header>
    );
}
 
export default Header;