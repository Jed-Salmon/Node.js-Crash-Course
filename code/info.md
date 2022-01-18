### Request Types:

GET: requests to get a resource
POST: requests to create new data (e.g. a new blog)
DELETE: requests to delete data (e.g. delete a blog)
PUT: requests to update data (e.g. update a blog)

We can use the same routes for different types of requests:
GET - localhost:3000/blogs
POST - localhost:3000/blogs

GET/PUT/DELETE - localhost:3000/blogs/:id
route variable is dependant on the blog we want to get

### Urlencoded

Parses the fields included in a urlencoded payload sent with a request to your server, and adds their values into a body object on the request.

Most commonly found when posting with an HTML form to your server, since urlencoding is the default. Passing the extended: true option to urlencoded will further parse nested structures sent in the urlencoded payload.

Essentially it adds a req.body object to our req, containing a Javascript object representing the payload sent with the request

### MVC - Model, View, Controller

A method of structuring our code and our files that aims to make our code more modular reusable and easier to maintain.

- Views are where we make our HTML templates that a user will see
- Models are how we describe our data structure and we use them to interact with the database (Schema & Models).
- Controllers form the link between our model and views. It acts as middlemen that use models to get data and then pass that data into a view.

We have previously made our controllers directly in the route file. The idea of using controllers is that we extract those handler functions into a separate controller file. Then we can reference those controller files in our routes.

Our route file matches incoming requests and it passes those requests to the correct controller function. A controller communicates with the appropriate model to get data into a view, and then the view then renders that data into its template and it gets sent to the browser.

The idea behind this is just to make our code easier to manage and to understand. Essentially we're just splitting our code into different areas and then each area or file has its own job to do.
