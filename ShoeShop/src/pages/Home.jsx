import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Nav from "../components/Navbar";
import ShoeCard from "../components/ShoeCard";
// import Foot from "../components/Footer";

const image = [
  "/src/assets/img/kid2.jpg",
  "/src/assets/img/men1.jpg",
  "/src/assets/img/women1.jpg",
];

const recentApi = [
  {
    image: "/src/assets/img/men2.jpg",
    price: "500",
  },
];

const categoriesApi = [
  {
    image: "/src/assets/img/men4.jpg",
    heading: "Mens",
    link: "/men",
  },
  {
    image: "/src/assets/img/women2.jpg",
    heading: "Womens",
    link: "/women",
  },
  {
    image: "/src/assets/img/kinds1.jpg",
    heading: "Kids",
    link: "/kid",
  },
];

const Home = () => {
  return (
    <>
      <Nav />
      <div className="md:mx-24">
        <div className="my-10 mx-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
            <div className="lg:col-span-1 flex sm:items-center justify-center">
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, dolorum non. Delectus fugit ab non cupiditate
                architecto nemo quas totam repellendus ad sequi consequuntur
                perferendis ducimus vitae sed, ut numquam enim ratione
                temporibus veniam dolor repellat officiis ipsam consectetur!
                Laborum ex quisquam amet quis maxime neque cumque veniam
                incidunt recusandae.
              </p>
            </div>
            <div className="lg:col-span-1 flex items-center justify-center h-56 lg:h-[50vh] overflow-hidden rounded-lg sm:h-96">
              <ImageCarousel images={image} />
            </div>
          </div>
        </div>

        {/* Recent Shoes */}
        <div>
          <h1 className="my-10 text-4xl font-bold text-center">Recent Lunch and Popular Shoes</h1>
          <div className="sm:mx-10 mx-2 grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-10">
            {recentApi.map((data, index) => {
              return (
                <ShoeCard key={index} image={data.image} price={data.price} />
              );
            })}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="my-6 sm:mx-10 mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {categoriesApi.map((data, index) => {
            return (
              <ShoeCard
                key={index}
                image={data.image}
                heading={data.heading}
                link={data.link}
              />
            );
          })}
        </div>
      </div>

      {/* <Foot /> */}
    </>
  );
};

export default Home;
