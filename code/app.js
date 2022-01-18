const { render } = require("ejs");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");

// initialize express app
const app = express();

// register view engine (ejs)
app.set("view engine", "ejs");

// connect to MongoDB
const dbURI =
  "mongodb+srv://jED:eAZtqOeyeOigEwOK@cluster0.jljg1.mongodb.net/node-cc?retryWrites=true&w=majority";
// We could connect and make queries using the plain MongoDB API and package. Although for this crash course we will be using Mongoose to connect and interact with our database.
// We must install Mongoose as its a third party package.
// for more information see 'info.md'

// connect to our database
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
// An asynchronous task, takes some time to do...
// we do not want our server listening for requests until the connection had been made. By moving app.listen() to within the .then() block, we then only listen for requests after the connection is complete.

// Middleware & Static files
app.use(morgan("dev"));
app.use(express.static("public"));
// give access to static files
// allows our views to reference files relatively, as it looks into the public folder by default.

app.use(express.urlencoded({ extended: true }));
// middleware to parse incoming data sent (POST) from our form (create.ejs) to a workable format. Takes the URL encoded data from our form submission and parses that to an object that we can use on the request object.

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
// With Express router we can extract our routes into different files, create a kind of mini app and then use those routes in our app
app.use("/blogs", blogRoutes);
// applies all handlers to our express app
// scoped the routes to "/blogs"

// 404 page - catch all route
app.use((req, res) => {
  // must manually set the 404 status code
  res.status(404).render("404", { title: "404" });
});
