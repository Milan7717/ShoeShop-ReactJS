import React, { useState } from "react";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const ShoeCard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="rounded-xl border-1 border-slate-400 bg-gray-500 shadow-2xl shadow-black-500/50">
        {props.image && (
          <div className="block  space-y-4 sm:flex sm:space-y-0 sm:space-x-4 cursor-pointer lg:col-span-1 flex sm:items-center  ">
            <img
              src={props.image}
              onClick={() => setOpen(true)}
              alt=""
              className="h-[250px] w-[100%] object-cover object-center rounded-lg"
            />
            <CustomModal
              open={open}
              setOpen={setOpen}
              imagegallery={props.image}
            />
          </div>
        )}
        {props.price && (
          <div>
            <p className="flex justify-end mx-1 my-2">{props.price}</p>
          </div>
        )}

        {props.heading && (
          <div className="p-5">
            <h1 className="text-center mb-2 text-xl md:text-2xl underline font-semibold ">
              {props.heading}
            </h1>
            <Link to={props.link}>
              <button
                type="button"
                className="btn mr-4 bg-blue-500 border-2 border-sky-400 text-lg rounded-lg p-1 my-4"
              >
                See More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoeCard;
