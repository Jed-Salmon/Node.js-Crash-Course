// import file system
const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  // asynchronous (takes time to perform)
  // fires the call back function once complete
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});
console.log("last line");

// writing files
fs.writeFile("./docs/written.txt", "Hello World", () => {
  console.log("file was written");
});
// by default writeFile overwrites if the file exists, otherwise it creates a new file.
// As arguments, it takes the relative path we want to write to, the text we want to write and a callback function, as this is an asynchronous action we must fire a callback function for when it finishes.

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
// When running the make directory code twice we received an error as the directory already existed. We therefor must check if it exists already and only run the code if not. To do this we use existsSync - a synchronous method that blocks the code for a short period of time and checks if a folder exists.

// deleting files
// check to make sure the file exists before deleting
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
  // we use the unlink method to delete a file in node
}

// file system works well for small files like we have. However if we're reading and writing from extremely large files, then it is more efficient to use streams (see more by visiting streams.js)
