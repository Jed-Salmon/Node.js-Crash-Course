// A schema defies the structure of the documents that we will later store inside a collection and the model wraps the schema.

const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor function
// Used to create a new schema which we store an instance of:
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
  // automatically generate timestamp properties on our blog documents - e.g. createdAt, updatedAt, etc.
);
// creates a new instance of the Schema object.
// pass in an object as a argument to describe the structure of the documents. Second argument is an options object.

// Next step is to create a model which will be based on this blogSchema.
const Blog = mongoose.model("Blog", blogSchema);
// first argument is the name of the model.
// the name we use is important, as whenever we use this model it's going to pluralize the name and then look for that collection inside the database. We called our model 'blog' so it will therefor connect and look for the blogs collection.
// By using the instance 'Blog' we get access to the blog collection and different methods provided by the model.
// second argument is the schema we want to base this model on.

// Lastly export the model so we can use it elsewhere:
module.exports = Blog;

// TO SUMMARIZE:

// The schema is the thing that defines the structure of our documents. The model surrounds that and provides an interface to communicate with a database collection for that document type.

// The first step is to define our schema which defines the structure. Second step is to create and export a model based on that schema and define the name of the model which should be the singular of the collection name.
