There are two types of databases, SQL & NoSQL.

#### SQL:

- Tables
- Rows
- Columns

#### NoSQL:

- collections
- documents

MonoDB is a NoSQL database.

### How does a NoSQL database work?

- Split up into collections which are a bit like tables in SQL
- Each collection stores a particular type of data, e.g. user collection stores user documents, a blog collection would store blog documents.
- Each collection only contains ONE type of document, in our case that is a blog document.
- A document is like a record in an SQL database.
- Each document represents a single item of data, so a blog document represents a single blog.
- Stored in a format that is similar to JSON that hold key and value pairs.
- From our code we could connect to a collection (blogs) and save, read, update or delete documents inside it.

### MongoDB Setup Options

- We could install MongoDB locally, use and deploy it.
- We can also use a cloud database which is hosted for us.
- For this crash course we use the later, using MongoDB Atlas.

### Mongoose

- Mongoose is an ODM library - Object Document Mapping library
- wraps the standard MongoDB API and provides us with a much easier way to connect and use the database.
- we can create simple data models which have database query methods to create, get, delete and update data based documents.
- Mongoose does all the heavy lifting for us. It queries the correct database collection based on the name of the model and performs the action required and returns us a response.

### Schemas

- In mongoose we make a schema first.
- The schema defines the structure of a data type or document stored in a database collection. It describes what properties it should have, the type of those properties.

User Schema

- name (string), required
- age (number),
- bio (string), required

Blog Schema

- title (string), required
- snippet (string), required
- body (string), required

### Models

- Models allow us to communicate with database collections.
- We create a model based on our schema.
- Our blog model will have both static and instance methods which we can use to save, update, delete or read data from the blogs collection.
