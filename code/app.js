const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// initialize express app
const app = express();

// register view engine (ejs)
app.set("view engine", "ejs");

// give access to static files
app.use(express.static("public"));

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

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my newest blog",
    body: "more about my newest blog",
  });
  // use the model to create a new instance of a blog document, where we pass an object with the different properties of this blog.

  // instance method to save it to the database
  // asynchronous and returns a promise
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => console.log(error));
  // Once mongoose saves to the database, the database then sends us back an object version of the document inside the collection that it has saved.
  // http://localhost:3000/add-blog
});

// find a single blog
app.get("/single-blog", (req, res) => {
  // mongoose handles the conversion from MongoDB ObjectId to a string and vice-versa.
  Blog.findById("61e5852e442a686b98f10b3f")
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
});

// retrieve all blogs in the collection
app.get("/all-blogs", (req, res) => {
  // get all documents inside the blog collection.
  // asynchronous operation, must handle promises.
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => console.log(error));
});

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
  res.status(404).render("404", { title: "404" });
});
