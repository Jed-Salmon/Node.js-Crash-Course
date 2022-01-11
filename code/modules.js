// when we require another file, automatically node looks for, finds and runs said file.
const people = require("./people");
// By just importing the people file, we receive its logs when running in the terminal - node modules

// whatever we choose to export gets applied to the variable we assign require to. Without exporting anything, the variable (people) would be an empty object. We can also destructure our values as well:
const { names, ages } = require("./people");

// nodejs core modules
const os = require("os");
console.log(os.platform(), os.homedir());
