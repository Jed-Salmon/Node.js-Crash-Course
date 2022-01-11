const names = ["yoshi", "ryu", "chun-li", "mario"];
const ages = [20, 25, 30, 35];

console.log(names, ages);

module.exports = names; // export individually
module.exports = { names, ages }; // export multiple

// whatever we choose to export gets applied to the variable we assigned require to. Without exporting, this would be an empty object.
