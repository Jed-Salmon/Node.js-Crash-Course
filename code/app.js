// MIDDLEWARE EXPLANATION
// code which runs on the sever between getting a request and sending a response.
// the .use() method is generally used to run middleware code
// middleware runs from top to bottom until we exit the process or explicitly send a response to the browser.

// MIDDLEWARE EXAMPLES
// logger middleware to log details of every request
// Authentication check middleware for protected routes
// Middleware to parse JSON data from requests
// Return 404 pages

const express = require("express");
const morgan = require("morgan");

// initialize express app
const app = express();

// register view engine (ejs)
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// OUR MIDDLEWARE EXAMPLE
app.use((req, res, next) => {
  console.log("new request made");
  // console.log("host: ", req.hostname);
  // console.log("path: ", req.path);
  // console.log("method: ", req.method);
  next();
});
// The browser hangs after running our middleware as Express does not know how to move on to our next piece of code.
// We have to explicitly tell it to move on by use a function called 'next'.

// There are available middleware functions to Express & Node
// For example 'Morgan' which is a logger, 'Helmet' which is a security piece of middleware. Sessions, cookie validation, etc.
// We don't always have to write our middleware from scratch if there's a middleware package that solves the issue for us.

// MORGAN MIDDLEWARE EXAMPLE
app.use(morgan("dev"));

// STATIC FILES
// The server protects all of our files from users in the browser automatically.
// To allow the browser to access something, we must specify which files should be publicly accessed.
// To do this we use a ready-made middleware that comes along with Express - 'static' middleware.

app.use(express.static("public")); // pass in folder name
// Anything inside public will be made available as a static file for the front-end/browser.
// http://localhost:3000/styles.css

// respond to requests
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
  // takes the view, render it and send back the browser
  // second arg used to pass data from our handler to the view (ejs file)
});

// unreachable on homepage as we send a response to "/" prior
app.use((req, res, next) => {
  console.log("In the next middleware");
  next();
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// 404 page - catch all route
app.use((req, res) => {
  // must manually set the 404 status code
  res.status(404).render("404", { title: "404" });
});
