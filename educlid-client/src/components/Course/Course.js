import React, { useState, useEffect } from "react";
import "./Course.css";
import List from "./CourseList/List";

const Course = (props) => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      fetch("https://b610-lerning-platform-server-side-loserdev007.vercel.app/categories")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);
   // const [course, setCourse] = useState({});
   return (
      <div className="grid grid-cols-4">
         <div className="col-span-1 py-32 my-32 px-5 bg-gray-900">
            {categories.map((el) => (
               <div className="form-control my-3">
                  <label className="label cursor-pointer btn px-6 btn-accent">
                     <span className="label-text text-black">
                        {el.categoryName}
                     </span>
                     <input
                        type="radio"
                        name="category"
                        className="radio checked:bg-red-500"
                     />
                  </label>
               </div>
            ))}
         </div>
         <div className="col-span-3 px-8 py-52">
            <List></List>
         </div>
      </div>
   );
};

export default Course;
