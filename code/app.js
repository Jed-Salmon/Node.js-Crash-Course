// Express is a framework that helps us to easily manage our routing requests, server-side logic and responses in a much much more elegant way and it makes our code easier to read, update and extend.

const express = require("express");

// initialize express app
const app = express();

// register view engine (ejs)
app.set("view engine", "ejs");
// Express and EJS will look in the 'views' folder by default.

// different folder name configuration:
// app.set("views", "myViews");
// first arg is the default configuration setting 'views'
// second arg is the folder in which you keep your views

// listen for requests
app.listen(3000); // automatically infers localhost
// returns us an instance of the sever, much like the createServer method.

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

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// 404 page - catch all route
app.use((req, res) => {
  // must manually set the 404 status code
  // res.status returns the response object itself
  res.status(404).render("404", { title: "404" });
});
