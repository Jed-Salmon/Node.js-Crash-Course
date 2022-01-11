// STREAMS
// start using data, before it has finished loading

// pass data a bit at a time through a stream and this way small chunks of data are packed up into a buffer and sent every time the buffer fills.

// Similar to how streaming Netflix or YouTube works, where little bits of data are sent to the browser a bit a time, so you can start watching straight away without having to wait for the whole video to load.

// import file system
const fs = require("fs");

// read stream
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
// first arg - where we want to read data from
// second arg - an options obj to specify the encoding type to automatically apply a readable format

// write stream
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  console.log(chunk);
  // pass data down a write stream
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
// .on is an event listener
// it listens to a data event on this readStream, which is every time we receive a buffer of data.
// every time we get a new chunk of data, we fire the callback function and get access to said data chunk.

// PIPING
// we can use a 'pipe' to pass data directly from a readable stream to a writeable stream.
// It shortens our code above but must only be used from readable to writeable streams.
readStream.pipe(writeStream);
// pipes what is read from readStream to writeStream

// there is another stream called a duplex stream.
// beyond this crash course lessons scope, but we can essentially use it to read and write streams.
