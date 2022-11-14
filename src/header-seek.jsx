import './header-seek.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const HeaderSeek = ({ label }) => {
    return (
        <div className="header-seek">
            <h1>{label}</h1>
            <div className="seek">
                <div className="dot"></div>
                <div className="line"></div>
                <div className="dot"></div>
            </div>
            <button type="button" className="button caret-icon">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button type="button" className="button caret-icon">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button type="button" className="button view-all">
                View All&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export { HeaderSeek }