import React from "react";
import Nav from "../components/Navbar";
import Foot from "../components/Footer";
import ShoeInfoCard from "../components/ShoeInfoCard";

const womenProductApi = [
  {
    brand: "Adidas",
    color: "Black",
    size: "10",
    price: "10000",
    image: "/src/assets/img/women1.jpg",
  },
  {
    brand: "Converse",
    color: "Blue,Red",
    size: "12",
    price: "12000",
    image: "/src/assets/img/women2.jpg",
  },
  {
    brand: "Adidas",
    color: "White",
    size: "9",
    price: "10000",
    image: "/src/assets/img/women4.jpg",
  },
];

const Women = () => {
  return(
  <>
    <Nav />
    <div>
      {womenProductApi.map((data, index) => {
        return (
          <ShoeInfoCard
            key={index}
            brand={data.brand}
            color={data.color}
            size={data.size}
            price={data.price}
            image={data.image}
          />
        );
      })}
    </div>

    <Foot />
  </>
  )
};

export default Women;
