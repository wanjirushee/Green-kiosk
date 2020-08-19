import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",


      tomatoImage: '/images/tomatoes.jpeg',

      veg2: "Cabbage",
      veg2Img:'./images/cabbage.jpeg',
      cabbageQuantity: 100,

      veg3: "Beetroots",
      veg3Img:'./images/beetroot.jpeg',
        
      beetrootsQuantity: 30,

      veg4: "Lettuce",
      veg4Img:'./images/lettuce.jpeg',
      carrotQuantity: 50,
      type2: "Fruits",
      fruit1: "Apple",
      fruit1Img:
        "https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      appleQuantity:100,

      fruit2: "Strawberry",
      fruit2Img:
        "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      strawberryQuantity: 50,

      appleImg:
        "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      appleImgQuantity: 30,
      appleImgPrice: 100,

      bunchImg:
        "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      bunch2Img:
        "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      bunch3Img:
        "https://images.pexels.com/photos/2820144/pexels-photo-2820144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  }

  render() { 
    return (
      <div style={{ textAlign: "center" }}>
        <h1>MAMA MBOGA WEBSITE</h1>
      

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.tomatoImage} alt="" />
            </div>
            <div className="product-info">
              <h5> Tomato</h5>
              <p> Ksh 50 {this.state.appleImgPrice}</p>
              <p> Quantity  {this.state.tomatoQuantity} </p>
              
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Cabbage</h5>
              <p> Ksh 80</p>
              <p> Quantity {this.state.cabbageQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg3Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Beetroots</h5>
              <p> Ksh 60</p>
              <p> Quantity  {this.state.beetrootQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg4Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Lettuce </h5>
              <p> Ksh 30</p>
              <p> Quantity {this.state.lettuceQuantity} </p>
             
            </div>
          </div>
 </section>
      </div>

    
    
    );
  }
}

export default App;

