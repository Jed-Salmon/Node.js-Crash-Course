// in node we can write code to create a server and listen for requests coming in from the browser.

const http = require("http");

const server = http.createServer((req, res) => {
  // this callback function runs every time a request comes in to our server

  // the request object comes loaded full of information, such as the URL that is being requested.
  console.log(req.url, req.method);

  // the response object is used to send a response to the user in the browser.

  // set the header content-type
  res.setHeader("Content-Type", "text/html");
  // headers give the browsers information about the response coming back to it. For example if we're sending text, HTML, JSON etc, or even set cookies.

  // send the data/content back to the browser
  res.write('<head><link rel="stylesheet"></head>');
  res.write("<p>hello, ninjas!</p>");
  res.write("<p>hello, again ninjas</p>");
  // end the response to then send it to the browser
  res.end();
});
// you can store an instance of the sever but is not required (useful for future implementations like WebSockets).

// invoke the listen method, to listen for requests
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
// pass in port number as the first argument
// pass in the hostname as the second argument
// second args default value is already localhost
// callback function fires when listening for requests
