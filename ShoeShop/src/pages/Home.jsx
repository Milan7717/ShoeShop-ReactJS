import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Nav from "../components/Navbar";
import ShoeCard from "../components/ShoeCard";
import { Link } from "react-router-dom";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Foot from "../components/Footer";

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
      <div className="md:mx-32 lg:mx-36 sm:mx-24 mx-8">
        <div className="my-10 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8">
            <div className="lg:col-span-1 flex sm:items-center justify-center">
              <p>
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
        <div className="my-10">
          <h1 className="my-4 sm:text-3xl text:2xl md:text-4xl font-bold">
            Recent Lunch and Popular Shoes
          </h1>

          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-10">
            {recentApi.map((data, index) => {
              return (
                <ShoeCard key={index} image={data.image} price={data.price} />
              );
            })}
          </div>
        </div>

        <div className="my-10">
          <h1 className="my-4 sm:text-3xl text:2xl md:text-4xl font-bold">Categories</h1>
          <div className="my-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        <div className=" my-10">
          <p className="my-4 sm:text-3xl text:2xl md:text-4xl font-bold">About Us</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            rerum molestiae totam! Labore vel tempora voluptas blanditiis nisi
            nostrum consectetur eveniet odit ad quod minima corporis
            exercitationem a porro laboriosam dolores ducimus quis aperiam,
            quidem similique ex. Laudantium iste rerum accusantium, vitae odit
            culpa consequuntur soluta nostrum rem libero hic!
          </p>
        </div>

        <div className=" my-10 itallic">
          <p className="my-4 sm:text-3xl text:2xl md:text-4xl font-bold">Contact us</p>
          <div className="">
            <p className="my-2">Contact : 10000000</p>
            <p className="my-2">Email : mail@gmail.com</p>
            <p className="my-2 ">Address : Somewhere,Nepal</p>
            <div className="flex sm:text-3xl md:text-4xl text-2xl">
            <Link to={"/"}><div className="mx-1 sm:mx-2 hover:bg-blue-300"><FaLinkedin /></div></Link> 
            <Link to={"/"}><div className="mx-1 sm:mx-2 hover:bg-blue-300"><FaFacebook /></div></Link> 
            </div>
            <Link to={"/contact"} ><button className=" btn p-2 my-2">Send Message</button></Link>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default Home;
