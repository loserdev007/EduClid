import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import SingleCourse from "./components/Course/SingleCouse/SingleCourse";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
            {
               path: "/home",
               element: <Home></Home>,
            },
            {
               path: "/courses",
               element: <Course></Course>,
            },
            {
               element: <SingleCourse />,
               path: "/course/:courseId",
               loader: async ({ params }) => {
                  return fetch(
                     `https://b610-lerning-platform-server-side-loserdev007.vercel.app/categories/${params.courseId}`
                  );
               },
            },
            {
               path: "/login",
               element: <Login></Login>,
            },
            {
               path: "/blog",
               element: <Blog></Blog>,
            },
            {
               path: "/register",
               element: <Register></Register>,
            },
            {
               path: "*",
               element: <Error></Error>,
            },
         ],
      },
   ]);

   return (
      <div className="app">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
