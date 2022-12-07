import React, { useContext } from "react";
import "./Register.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { getAuth } from "firebase/auth";
// import app from "../../firebase/firebase.init";
import { AuthContext } from "../../context/UserContext";

const Register = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const { emailPassSignUp, googleSignIn, githubSignIn } =
      useContext(AuthContext);

   const handleEmailPassSignUp = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      emailPassSignUp(email, password)
         .then((userCredential) => {
            // console.log(user);
            e.target.reset();
            navigate(from, {replace: true});
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const handleGoogleSignIn = (e) => {
      googleSignIn()
         .then((userCredential) => {
            // console.log(userCredential.user);
            navigate(from, {replace: true});
         })
         .catch((e = {}));
   };
   const handleGithubSignIn = (e) => {
      githubSignIn()
         .then((userCredential) => {
            // console.log(userCredential.user);
            navigate(from, {replace: true});
         })
         .catch((e = {}));
   };
   return (
      <div className="hero min-h-screen bg-base-100">
         <div className="hero-content flex-col container mx-auto">
            <div className="text-center py-5">
               <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <form
               className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200"
               onSubmit={handleEmailPassSignUp}
            >
               <div className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Full Name</span>
                     </label>
                     <input
                        name="fullname"
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Photo URL</span>
                     </label>
                     <input
                        name="photo"
                        type="text"
                        placeholder="url"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-secondary">Register</button>
                  </div>
                  <label className="label">
                     <p className="text-sm text-center">
                        Already have an account?
                        <Link
                           to="/login"
                           className="label-text-alt link link-hover mx-1 text-sm text-cyan-500"
                        >
                           Login
                        </Link>
                        here.
                     </p>
                  </label>
               </div>
            </form>
            <div className="divider">OR</div>
            <div class="btn-group btn-group-horizontal">
               <button
                  className="btn gap-2 btn-lg"
                  onClick={handleGoogleSignIn}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-7 w-7"
                     fill="rgb(234 88 12)"
                     stroke="currentColor"
                     viewBox="0 0 488 512"
                  >
                     <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                  Google
               </button>
               <button
                  className="btn gap-2 btn-lg"
                  onClick={handleGithubSignIn}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-7 w-7"
                     fill="rgb(234 88 12)"
                     stroke="currentColor"
                     viewBox="0 0 496 512"
                  >
                     <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  Github
               </button>
               {/* <button className="btn gap-2 btn-lg">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-7 w-7"
                     fill="rgb(234 88 12)"
                     stroke="currentColor"
                     viewBox="0 0 512 512"
                  >
                     <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                  Facebook
               </button> */}
            </div>
         </div>
      </div>
   );
};

export default Register;
