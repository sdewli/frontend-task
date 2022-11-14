import './auction-card.css'

import Card1 from './images/cards/card1.png';
import Card2 from './images/cards/card2.png';
import Card3 from './images/cards/card3.png';
import Card4 from './images/cards/card4.png';
import {faHeart, faGem, } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const AuctionCard = ({ username, profilePhoto, title, bidPrice, endTime, mainImage, otherName, otherProfilePhoto }) => {
    return (
        <div className="auction-card">
            <div className="top-section">
                <img className="profile-icon" src={profilePhoto}/>
                <span className="profile-title">{username}</span>
                <div className="icon-container"><FontAwesomeIcon icon={faHeart} /></div>

            </div>
            <div className="image-section">
                <img className="background-image" src={profilePhoto}/>
            </div>
            <div className="title-section">
                <div className="first-div">
                    <img className="profile-icon" src={otherProfilePhoto}/>
                    <span className="profile-title">{otherName}</span>
                </div>
                <div className="second-div">
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="bottom-section">
                <div className="bid-title">
                    <span>Current bid</span>
                    <span>Ending in</span>
                </div>
                <div className="price-container">
                    <span><FontAwesomeIcon icon={faGem} />&nbsp;{bidPrice}</span>
                    <span>{endTime}</span>
                </div>
            </div>
        </div>
    )
}

const AuctionCardList = () => {
    const cardList = [
        {
            username: "@user1",
            profilePhoto: Card1,
            otherProfilePhoto: Card2,
            title: "Way Back Home",
            otherName: "Special Surprise",
            bidPrice: "0.40 ETH",
            endTime: "07h 34m 34s"
        },
        {
            username: "@GlamBeckett",
            profilePhoto: Card2,
            otherProfilePhoto: Card3,
            title: "Way Back Home",
            otherName: "@kuraja",
            bidPrice: "0.40 ETH",
            endTime: "07h 34m 34s"
        },
        {
            username: "@hermippe",
            profilePhoto: Card3,
            otherProfilePhoto: Card4,
            title: "Cowboy",
            otherName: "Special Surprise",
            bidPrice: "0.40 ETH",
            endTime: "07h 34m 34s"
        },
        {
            username: "@GHARIDETER",
            profilePhoto: Card4,
            otherProfilePhoto: Card1,
            title: "Pretty Mundane",
            otherName: "Armament",
            bidPrice: "0.40 ETH",
            endTime: "07h 34m 34s"
        }
    ]
    return (
        <div className="auction-card-list">
            {cardList.map((card, idx) => (
                <AuctionCard
                    key={idx}
                    {...card}
                />
            ))}
        </div>
    )
}

export { AuctionCardList, AuctionCard }