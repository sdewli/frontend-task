import './collection-list.css';
import card1 from './images/cards/card1.png';
import card2 from './images/cards/card2.png';
import card3 from './images/cards/card3.png';
import card4 from './images/cards/card4.png';

const CollectionCard = ({ mainImage, profile, image2, image3, title, title2 }) => {
    return (
        <div className="collection-card">
            <img src={mainImage} className="cont-1"/>
            <div className="cont-2">
                <img className="img1" src={image2}/>
                <img className="img2" src={profile}/>
                <img className="img3" src={image3}/>
            </div>
            <div className="cont-3">
                {title}
            </div>
            <div className="cont-4">
                {title2}
            </div>
        </div>
    )
};

const CollectionsList = () => {
    const list = [
        {
            mainImage: card1,
            profile: card2,
            image2: card3,
            image3: card4,
            title: 'Sound of Silence',
            title2: '235 in Collection'
        },
        {
            mainImage: card2,
            profile: card3,
            image2: card4,
            image3: card1,
            title: 'Modern Art Collection',
            title2: '235 in Collection'
        },
        {
            mainImage: card3,
            profile: card4,
            image2: card1,
            image3: card2,
            title: 'Modern Art Collection',
            title2: '235 in Collection'
        }
    ];

    return (
        <div className="collections-list">
            {list.map((card, idx) => (
                <CollectionCard
                    key={idx}
                    {...card}
                />
            ))}
        </div>
    )
};

export { CollectionsList };