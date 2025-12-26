import React from "react";
import HeroSection from "./HeroSectoin";
import ProductCard from "../productCard";
import List from "./List";
import { links, productData } from "../../helper/constant";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <List links={links} />
      <div >
        <h3>popular items</h3>
      </div>
      <div className="prodParent">
        {productData.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
