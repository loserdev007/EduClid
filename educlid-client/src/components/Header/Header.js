import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./sitelogo.png";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   const handlelogout = (e) => {
      logOut()
         .then(() => {
            // Sign-out successful.
         })
         .catch((error) => {
            // An error happened.
         });
   };
   return (
      <div className="w-full fixed top-0 left-0 z-50">
         <div className="navbar container mx-auto bg-base-200 py-2 px-10 rounded">
            <div className="flex-1">
               <Link className="mr-2" to="/">
                  <img src={logo} alt="logo" />
               </Link>
               <Link className="btn btn-ghost normal-case text-xl">
                  EduClid
               </Link>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal p-0">
                  <li className="mx-1">
                     <Link to="/courses">Course</Link>
                  </li>
                  <li className="mx-1">
                     <Link>FAQ</Link>
                  </li>
                  <li className="mx-1">
                     <Link to="/blog">Blog</Link>
                  </li>
                  <input type="checkbox" className="toggle my-auto" checked />
               </ul>

               {/* 
                  If the user is logged out,
                  login button will appear

               <li className="mx-1">
                  <Link>Blog</Link>
               </li> */}

               <div className="dropdown dropdown-end ml-5">
                  {user ? (
                     <div
                        class="tooltip tooltip-bottom"
                        data-tip={user && user.displayName}
                     >
                        <label
                           tabindex="0"
                           class="btn btn-ghost btn-circle avatar"
                        >
                           <div class="w-10 rounded-full">
                              <img src={user && user.photoURL} alt={user && user.displayName}/>
                           </div>
                        </label>
                     </div>
                  ) : (
                     <Link to="/login" className="btn btn-ghost">{user || 'Login'}</Link>
                  )}

                  {user && (
                     <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
                     >
                        <li>
                           <Link>Profile</Link>
                        </li>
                        <li>
                           <Link>Settings</Link>
                        </li>
                        <li>
                           <Link onClick={handlelogout}>Logout</Link>
                        </li>
                     </ul>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
