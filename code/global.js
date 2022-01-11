// Global object

console.log(global);
// In Node.js our global object is 'global'. This is similar to the window object, the browsers global object that too has methods and properties available to us, like setTimeout.

global.setTimeout(() => {
  console.log("In the timeout");

  // absolute path we are in
  console.log(__dirname);
  // absolute path with filename
  console.log(__filename);
  // Useful when working with node to interact with different files and formulate paths between them.
  clearInterval(int);
}, 3000);

// we don't need to specify global.method, its presence is already implied.
const int = setInterval(() => {
  console.log("In the interval");
}, 1000);
