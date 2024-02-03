import React from "react";
import ShoeInfoCard from "../components/ShoeInfoCard";
import Nav from "../components/Navbar";
import Foot from "./../components/Footer";

const kidProductApi = [
  {
    brand: "Nike",
    color: "Black",
    size: "5",
    price: "5000",
    image: "/src/assets/img/kid2.jpg",
  },
  {
    brand: "Adidas",
    color: "Blue",
    size: "4",
    price: "1500",
    image: "/src/assets/img/kinds1.jpg",
  },
  {
    brand: "Converse",
    color: "White",
    size: "7",
    price: "2000",
    image: "/src/assets/img/men5.jpg",
  },
];

const Kid = () => {
  return (
    <>
      <Nav />
      <div>
        {kidProductApi.map((data, index) => {
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
  );
};

export default Kid;
