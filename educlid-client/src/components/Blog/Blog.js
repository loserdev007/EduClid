import React from "react";
import "./Blog.css";

const Blog = () => {
   return (
      <div className="container mx-auto mt-32">
         <h3>What is cors?</h3>
         <br />
         <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
         </p>
         <br />
         <br />
         <br />
         <h3>
            Why are you using firebase? What other options do you have to
            implement authentication?
         </h3>
         <br />
         <p>
            The Firebase Realtime Database is a cloud-hosted database. Data is
            stored as JSON and synchronized in realtime to every connected
            client. When you build cross-platform apps with our Apple platforms,
            Android, and JavaScript SDKs, all of your clients share one Realtime
            Database instance and automatically receive updates with the newest
            data.
         </p>
         <br />
         <br />
         <br />
         <h3>How does the private route work?</h3>
         <br />
         <p>
            logo About Hire Blog Courses RSS React Router 6: Private Routes
            (alias Protected Routes) February 06, 2022 by Robin Wieruch - Edit
            this Post Follow on Twitter Follow on Facebook Private Routes in
            React Router (also called Protected Routes) require a user being
            authorized to visit a route (read: page). So if a user is not
            authorized for a specific page, they cannot access it. The most
            common example is authentication in a React application where a user
            can only access the protected pages when they are authorized (which
            means in this case being authenticated). Authorization goes beyond
            authentication though. For example, a user can also have roles and
            permissions which give a user access to specific areas of the
            application.
         </p>
         <br />
         <br />
         <br />
         <h3>What is Node? How does Node work?</h3>
         <br />
         <p>
         As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
         </p>
      </div>
   );
};

export default Blog;
