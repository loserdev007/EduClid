import React from "react";
import "./Home.css";
import List from "../Course/CourseList/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLandmark } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
   return (
      <>
         <div
            className="hero min-h-screen"
            style={{
               backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}
         >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-lg">
                  <h1 className="mb-5  text-6xl font-bold">
                     The most <span className="text-primary">effective</span>{" "}
                     programming course's website
                  </h1>
                  <p className="mb-5 text-xl">
                     Start, switch, or advance your career with effective
                     courses, Professional Certificates, and degrees from
                     world-class universities and companies.
                  </p>
                  <button className="btn btn-secondary btn-lg btn-wide">
                     Start Course
                  </button>
               </div>
            </div>
            <div className="stats stats-vertical md:stats-horizontal shadow absolute bottom-0 translate-y-1/2">
               <div className="stat bg-base-200">
                  <div className="stat-figure text-primary">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                     </svg>
                  </div>
                  <div className="stat-title">Total Reviews</div>
                  <div className="stat-value text-primary">25.6K</div>
                  <div className="stat-desc">21% more than last month</div>
               </div>

               <div className="stat bg-base-200">
                  <div className="stat-figure text-secondary">
                     <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="text-2xl"
                     />
                  </div>
                  <div className="stat-title">Total Students</div>
                  <div className="stat-value text-secondary">2.6M</div>
                  <div className="stat-desc">21% more than last month</div>
               </div>

               <div className="stat bg-base-200">
                  <div className="stat-figure text-secondary">
                     <FontAwesomeIcon
                        icon={faLandmark}
                        className="text-2xl"
                     ></FontAwesomeIcon>
                  </div>
                  <div className="stat-value">20+</div>
                  <div className="stat-title">Premium Courses</div>
                  <div className="stat-desc text-secondary">
                     50% more than last month
                  </div>
               </div>
            </div>
         </div>
         <div className="container mx-auto my-52 max-w-screen-xl px-10 md:px-20 xl:p-0">
            <List></List>
         </div>
      </>
   );
};

export default Home;
