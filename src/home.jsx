import Categories from "./Components/Categories"
import FeaturedProd from "./Components/Featured Products/FeaturedProducts"
import ClassOffer from "./Components/ClassOffer"
import Testimonal from "./Components/Testiminial/Testimonlial"
import Brands from "./Components/Brands/Brands"

import HeroHeader from "./Components/HeroHeader"


function Home() {

    return (
      <>
       
            <HeroHeader/>
            <Categories/>
            <FeaturedProd/> 
            <ClassOffer/>
            <Testimonal/> 
            <Brands/>
            
         
      </>
    );
  };
  
  export default Home;
  