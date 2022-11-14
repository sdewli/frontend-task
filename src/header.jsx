import './header.css'
import logo from './images/logo.png';
import profilePhoto from './images/profile_photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faMoon, faSun, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Header () {
    return (
        <header className="main-header">
            <div className="icon-container">
                <img src={logo} alt="logo"/>
                <span className="logo-text"> P2E Pro </span>
            </div>
            <div className="search-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Collection, item or user" />
            </div>
            <div className="button-container">
                <menu className="main-menu">
                    <span>Home</span>
                    <span>Explore <FontAwesomeIcon icon={faAngleDown} /> </span>
                    <span>Create <FontAwesomeIcon icon={faAngleDown} /> </span>
                    <span>Blog <FontAwesomeIcon icon={faAngleDown} /> </span>
                    <span>Contact </span>
                </menu>
                {/*<div className="theme-container">*/}
                {/*    <FontAwesomeIcon icon={faSun} />*/}
                {/*    <FontAwesomeIcon icon={faMoon} />*/}
                {/*</div>*/}
                <img className="profile-photo" src={profilePhoto} />
                <button type="button" className="login-btn">
                    <FontAwesomeIcon icon={faHouse} />
                    Login
                </button>
            </div>
        </header>
    )
}