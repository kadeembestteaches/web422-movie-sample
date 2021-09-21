# Movies REST API

A simple Movies RESTful API that allows client applications to create, read, edit and delete movies

## End Points

### GET /movies

The above end point returns all movies

### GET /movies?featured=yes
The above end point returns all featured movies

### GET /movies?featured=no

The above end point returns all movies that are not featured

### GET /movies/id

The above end point returns a movie based on the id provided

### POST /movies

The above end point creates a movie. You are required to submit the movie data in the body of the request (as JSON) : The data includes :

- title (required)
- description (required)
- genre (required)
- featured (required),
- rating (optional)

### PUT /movies/id

The above end point updates a movies based on the id provided. You are required to submit the new movie data in the body of the request (as JSON) : The data could include any of the following :

- title
- description
- genre
- featured
- rating

### DELETE /movies/id

The above end point deletes a movie based on the id provided

## Rules to Set up application

1. Clone source code by running: **npm install**
1. Ensure that you create a folder called **config**
1. Within the **config** folder, create a file called **keys.env**
1. Within the **keys.env** file, create two environment variables
   - **MONGO_DB_CONNECTION_STRING** - Assign your Database Connection String to the variable
   - **PORT** - Assign 3000
1. Run application by running : **npm run dev**
