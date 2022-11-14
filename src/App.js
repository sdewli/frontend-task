import './App.css';
import Header from './header';
import ExploreNft from './explore_nft';
import { HeaderSeek } from './header-seek';
import {AuctionCardList} from './auction-card';
import {SellerCardList} from './seller-card-list';
import {CollectionsList} from './collections-list';
import Footer from './footer';

function App() {
  return (
    <div className="App">
        <Header />
        <ExploreNft />
        <div className="main-container">
            <HeaderSeek label="Trending Auctions" />
            <AuctionCardList />
            <HeaderSeek label="Our Top Sellers" />
            <SellerCardList />
            <HeaderSeek label="Hot Collections" />
            <CollectionsList />
        </div>
        <Footer/>
    </div>
  );
}

export default App;
