import './seller-card.css';
import card1 from './images/cards/card1.png';
import card2 from './images/cards/card2.png';
import card3 from './images/cards/card3.png';
import card4 from './images/cards/card4.png';

const SellerCard = ({ profile, name, sold}) => {
    return (
        <div className="seller-card">
            <img src={profile}/>
            <div className="profile-name">{name}</div>
            <div className="sold">{sold}</div>
        </div>
    )
}

const SellerCardList = () => {
    const sellerList = [
        {
            profile: card1,
            name: 'Jim_Sechen',
            sold: '$1,954'
        },
        {
            profile: card2,
            name: 'Ravi_O_Leigh',
            sold: '$2,008'
        },
        {
            profile: card3,
            name: 'Sue_Shei07',
            sold: '$12,067'
        },
        {
            profile: card4,
            name: 'Jackson_pot',
            sold: '$9,493'
        },
        {
            profile: card2,
            name: 'Jim_Sechen',
            sold: '$4,564'
        }
    ];
    return (
        <div className="seller-card-list">
            {sellerList.map((seller, idx) => (
                <SellerCard
                    key={idx}
                    {...seller}
                />
            ))}
        </div>
    )
}


export { SellerCardList }