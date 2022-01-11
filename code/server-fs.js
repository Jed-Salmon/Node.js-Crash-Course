// in node we can write code to create a server and listen for requests coming in from the browser.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // this callback function runs every time a request comes in to our server

  // the request object comes loaded full of information, such as the URL that is being requested.
  console.log(req.url, req.method);

  // the response object is used to send a response to the user in the browser.

  // set the header content-type
  res.setHeader("Content-Type", "text/html");
  // headers give the browsers information about the response coming back to it. For example if we're sending text, HTML, JSON etc, or even set cookies.

  // ROUTING
  // find the path the user visits
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // redirect case
    case "/about-me":
      res.statusCode = 301; // resources moved
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file back to the browser
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data); // only use once so pass to end
    }
  });
});

// invoke the listen method, to listen for requests
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
// pass in port number as the first argument
// pass in the hostname as the second argument
// second args default value is already localhost
// callback function fires when listening for requests

// --------------- END OF LESSON NOTES ---------------

// We now have seen how Node.js works as a server and how it can handle different requests to different routes for different web pages. We also understand how it can send back responses in the form of HTML pages.

// The approach we've taken with the switch statement and finding out the request URL and all that jazz is absolutely fine but as a website gets bigger and more complex, dealing with many different request URLs, different types of requests like post or delete and database logic can get a little bit messy and hard to maintain.

// Fortunately there is a third party package called Express which can help us manage all of this in a much easier and elegant way.
// Navigate to the next section 'NPM & Express' to start learning more.
