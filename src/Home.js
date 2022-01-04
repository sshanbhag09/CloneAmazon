import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";
//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            id="12321341"
            image="https://images-eu.ssl-images-amazon.com/images/I/91FvDEE9sCL._AC_UL675_SR675,480_.jpg"
            price={799}
            title="American Torister Casual Backpack"
            rating={4}
          />
          <Product
            id="49538094"
            image="https://images-eu.ssl-images-amazon.com/images/I/41JUbD67xQS._AC_SX184_.jpg"
            price={529}
            title="OFIXO Multi-Purpose Laptop Table/Study"
            rating={5}
          />
          <Product
            id="4903850"
            title="Stories We Never Tell"
            price={399.99}
            image="https://m.media-amazon.com/images/I/81dxL5k0sbL._AC_UY218_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            image="https://images-eu.ssl-images-amazon.com/images/I/715nSWenOpL._AC_UL675_SR675,480_.jpg"
            price={899.00}
            title="VT VIRTUE TRADERS Ultra Soft Unisex Woolen Beanie Cap"
            rating={4}
          />
          <Product
            id="3254354345"
            image="https://images-eu.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC_UL675_SR675,480_.jpg"
            title="Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25"
            rating={4}
            price={16789}
          />
          <Product
            id="90829332"
            title="Journey to the Center of the Earth"
            price={300.0}
            image="https://m.media-amazon.com/images/I/81bJyJ3Dp-S._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="6543278"
            title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring,"
            image="https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UY327_FMwebp_QL65_.jpg"
            price={3000}
            rating={5}
          />
          <Product
             id="5678765"
             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
             price={21094.98}
             image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
             rating={4}
          />
          <Product
            id="567897"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={2298.99}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              rating={5}
          />
        </div>
        <div className="home__row">
        <Product
          id="67217"
            image="https://images-eu.ssl-images-amazon.com/images/I/71sxlhYhKWL._AC_UL675_SR675,480_.jpg"
            title="Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25"
            rating={4}
            price={16789}
          />
          <Product
          id="45678"
            image="https://images-eu.ssl-images-amazon.com/images/I/41Q6QY85qlL._AC_SX368_.jpg"
            title="boAt Airdopes 121v2 Bluetooth Truly Wireless in Ear Earbuds with Mic (Active Black)"
            price={1244}
            rating={4}
          />
        </div>

        
      </div>
    </div>
  );
}

export default Home;
