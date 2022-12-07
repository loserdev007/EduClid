import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./List.css";

const List = () => {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      fetch("https://b610-lerning-platform-server-side-loserdev007.vercel.app/data")
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, []);

   console.log(courses);

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6">
         {courses.map((e) => (
            <>
               <div className="card w-full bg-base-200 shadow-xl">
                  <figure>
                     <img className="w-full" src={e.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title"><Link to={`/course/${e.id}`}>{e.title}</Link></h2>
                     <p className="mt-2 grow">{e.excerpt}</p>
                     <div className="card-meta my-4 grid grid-cols-2 gap-2">
                        <p className="text-orange-400 text-sm">{e.rating} rating</p>
                        <p className="text-orange-400 text-right text-sm">{e.students} students</p>
                        <div class="badge badge-warning font-bold text-sm">{e.category}</div>
                        <p className="text-orange-400 text-right text-sm">{e.content.duration}</p>
                     </div>
                     <div className="card-actions items-center">
                        <p className={`text-2xl ${e.premium? 'text-secondary' : 'text-white'} font-bold`}>
                           {e.premium? `${e.price} ₩` : 'Free'}
                        </p>
                        <button className={`btn ${e.premium? `btn-warning` : 'btn-primary'}`}>{e.premium? `Get Premium Access` : 'Enroll Now'}</button>
                     </div>
                  </div>
               </div>
            </>
         ))}
      </div>
   );
};

export default List;
