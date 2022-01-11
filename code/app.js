// Express is a framework that helps us to easily manage our routing requests server-side logic and responses in a much much more elegant way and it makes our code easier to read, update and extend.

const express = require("express");

// initialize express app
const app = express();

// listen for requests
app.listen(3000); // automatically infers localhost
// returns us an instance of the sever, much like the createServer method.

// respond to requests
app.get("/", (req, res) => {
  // res.send(`<p>home page</p>`);
  // send method automatically infers the type of content we are trying to send and sets the content-type header. It also infers the status code, although there are cases you will manually set this.

  res.sendFile("./views/index.html", { root: __dirname });
  // path must be absolute, or if we use relative we must tell express where it is from. For this we provide an options object specifying the root of the project.
  // An alternative to __dirname would be to use the path module, which is a core module in node to join together the directory name with the file path.
});
// first arg - path or url you want to listen to
// second arg - callback function with req and res obj

// routing via multiple get handlers
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
  // automatically sets the status code
});

// 404 page - catch all route
app.use((req, res) => {
  // must manually set the 404 status code
  res.status(404).sendFile("./views/404.html", { root: __dirname });
  // res.status returns the response object itself
});
// use method works to create middleware and fire middleware functions in Express. It is used for every incoming request, its not scoped to a particular URL.

// So the use function fires for every request coming in, but only if the request reaches this point in the code. Express therefor runs through the file top to bottom and if the URL the user has requested does not match a get handlers URL, then the use function will run and return the 404 page.
