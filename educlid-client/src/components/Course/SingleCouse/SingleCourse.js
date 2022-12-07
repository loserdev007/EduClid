import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleCourse.css";

const SingleCourse = () => {
   const data = useLoaderData();
   console.log(data);
   return (
      <>
         <div
            className="hero h-96 mt-28"
            style={{
               backgroundImage: `url("${data.image}")`,
            }}
         >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-5xl">
                  <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
               </div>
            </div>
         </div>
         <p className="container mx-auto mt-20">{data.description}</p>
      </>
   );
};

export default SingleCourse;
