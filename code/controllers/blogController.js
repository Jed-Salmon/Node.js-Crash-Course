// Controller file separates all the logic from the routes
// Makes our code neater and more maintainable

const Blog = require("../models/blog"); // Import Blog Model

// blog_index - get all blogs & inject to index view
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    // sort by a particular field in our document
    // -1 means in descending order (newest to oldest)
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
      // passed down the title and blogs to our view (similar to props)
    })
    .catch((error) => console.log(error));
};

// blog_details - get a single blog & inject to details view
const blog_details = (req, res) => {
  // extract the route parameter from the URL
  const id = req.params.id;
  // we use '.id' since we specified our route parameter variable as 'id'.

  // retrieve the document with the id from the database:
  Blog.findById(id)
    .then((result) => {
      // send the blog to our view
      res.render("blogs/details", { title: "Blog Details", blog: result });
    })
    .catch((error) => {
      // return the 404 page
      res.status(404).render("404", { title: "Blog not found" });
    });
};

// blog_create_get - renders the form/view on the route blogs/create
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create a new Blog" });
};

// blog_create_post - add a new blog
const blog_create_post = (req, res) => {
  // urlencoded middleware parses the data to req.body as a javascript object.
  console.log(req.body);

  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((error) => console.log(error));
};

// blog_delete - delete a blog
const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
      // send JSON data back to the browser with a redirect property. When we receive that data back (response), the redirect property will be a URL to where want to redirect to, and that will be done on the frontend.
    })
    .catch((error) => console.log(error));
  // when we send an ajax request (sending from details page using plain JavaScript and Fetch API) we cannot use a redirect as a response. We have to instead send JSON or plain text data back to the browser.
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
