import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
import CustomModal from "./CustomModal";

const ShoeInfoCard = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sm:mx-20 mx-2 grid my-10  sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="">
          <img
            data-aos="fade-right"
            data-aos-duration="1200"
            src={props.image}
            onClick={() => setOpen(true)}
            alt=""
            className=" sm:h-[400px] h-[300px] md:h-[450px] w-[100%] cursor-pointer object-cover  object-center rounded-lg"
          />
          <CustomModal
            open={open}
            setOpen={setOpen}
            imagegallery={props.image}
          />
        </div>

        <div className="col-span-1 ">
          <form
            data-aos="fade-left"
            data-aos-duration="1200"
            action="#"
            className=" w-[100%] md:w-[80%] sm:w-[95%] text-lg"
          >
            <div className="flex items-center  mb-4 border-2 border-sky-400  rounded-lg">
              <p className="md:w-[20%] w-[30%] p-2 border-blue-400 border-r-2 text-center">
                Brand
              </p>
              <p className="p-2 md:w-[80%] w-[70%]  overflow-hidden bg-transparent">
                {props.brand}
              </p>
            </div>
            <div className="flex items-center  mb-4 border-2 border-sky-400  rounded-lg">
              <p className="md:w-[20%] w-[30%] p-2 border-blue-400 border-r-2 text-center">
                Color
              </p>
              <p className="p-2 md:w-[80%] w-[70%]  overflow-hidden bg-transparent">
                {props.color}
              </p>
            </div>
            <div className="flex items-center  mb-4 border-2 border-sky-400  rounded-lg">
              <p className="md:w-[20%] w-[30%] p-2 border-blue-400 border-r-2 text-center">
                Size
              </p>
              <p className="p-2 md:w-[80%] w-[70%]  overflow-hidden bg-transparent">
                {props.size}
              </p>
            </div>
            <div className="flex items-center  mb-4 border-2 border-sky-400  rounded-lg">
              <p className="md:w-[20%] w-[30%] p-2 border-blue-400 border-r-2 text-center">Price</p>
              <p className="p-2 md:w-[80%] w-[70%]  overflow-hidden bg-transparent">
                {props.price}
              </p>
            </div>
            {/* <div className="flex items-center  mb-4 border-2 border-sky-400  rounded-lg">
              <p className="md:w-[20%] w-[30%] p-2 ">Quantity </p>
              <p className="p-2 md:w-[80%] w-[70%]  overflow-hidden bg-transparent">
                {props.quantity}
              </p>
            </div> */}
          </form>
          <div
            data-aos="flip-up"
            data-aos-duration="700"
            className="text-lg text-white text-center"
          >
            <div className="bg-orange-500 hover:bg-orange-700 p-1 flex w-[50%] justify-between rounded-lg my-2 md:my-4">
              <div className="text-center w-[100%]">
                <p>Buy Now</p>
              </div>
              <div className="text-2xl">
                <BiSolidPurchaseTag />
              </div>
            </div>

            <div className="bg-blue-500 hover:bg-blue-700 p-1 flex w-[50%] justify-between rounded-lg my-2 md:my-4">
              <div className="text-center w-[100%]">
                <p>Add to cart</p>
              </div>
              <div className="text-2xl">
                <FaCartArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoeInfoCard;
