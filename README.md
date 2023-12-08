# MoviesAPI

## Description

This is a simple API that allows you to store movies (names, publisher, year, genre and poster) in a database. It also allows you to retrieve the movies from the database.

## Installation

To install the API, you need to have [Node.js](https://nodejs.org/en/) installed on your computer. Then, you need to clone the repository and install the dependencies.

After cloning the repository, you need to create a file called ".env" in the root directory of the project and add the following line:

```bash
CONNURL=mongodb://localhost:27017
```
```bash
PORT=3000
```


```bash
git clone
cd MoviesAPI
npm install
```

## Usage

To use the API, you need to have [MongoDB](https://www.mongodb.com/) installed on your computer. Finally, you need to create a file called ".env" in the root directory of the project and add the following line:

```bash
MONGODB_URI=mongodb://localhost:27017
```

To start the API, you need to run the following command:

```bash
npx nodemon index.js
```

## API Documentation

### Get all movies

#### Request

`GET /movies`


#### Response

```json
[
    {
        "_id": "5f9b7b7b7b7b7b7b7b7b7b7b",
        "name": "The Shawshank Redemption",
        "publisher": "Frank Darabont",
        "year": 1994,
        "genre": "Drama",
        "poster": ""
    },
    {
        "_id": "5f9b7b7b7b7b7b7b7b7b7b7c",
        "name": "The Godfather",
        "publisher": "Francis Ford Coppola",
        "year": 1972,
        "genre": "Crime",
        "poster": ""
    }
]
```

### Get a movie

Poster attribute is image and stored in base64 format. So you need to decode it to get the image.
And also before sending the request you need to encode the image to base64 format.

#### Request

`GET /movies/:id`

#### Response

```json
{
    "_id": "5f9b7b7b7b7b7b7b7b7b7b7b",
    "name": "The Shawshank Redemption",
    "publisher": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "poster": ""
}
```

### Add a movie

#### Request

`POST /movies`

```json
{
    "name": "The Shawshank Redemption",
    "publisher": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "poster": ""
}
```

#### Response

```json
{
    "_id": "5f9b7b7b7b7b7b7b7b7b7b7b",
    "name": "The Shawshank Redemption",
    "publisher": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "poster": ""
}
```

### Update a movie

#### Request

`PUT /movies/:id`

```json
{
    "name": "The Shawshank Redemption",
    "publisher": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "poster": ""
}
```

#### Response

```json
{
    "_id": "5f9b7b7b7b7b7b7b7b7b7b7b",
    "name": "The Shawshank Redemption",
    "publisher": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "poster": ""
}
```

### Delete a movie

#### Request

`DELETE /movies/:id`

#### Response

```json
{
    "_id": "5f9b7b7b7b7b7b7b7b7b7b7b",
    "name": "The Shawshank Redemption",
    "publisher": "Frank Darabont",
    "year": 1994,
    "genre": "Drama",
    "poster": ""
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)




## Tests

To test the API, you need to run the following command:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

- [**Muhammad Talha**](https://github.com/MalikTalha03)


## Acknowledgements

- [**Node.js**](https://nodejs.org/en/)
- [**MongoDB**](https://www.mongodb.com/)
- [**Express**](https://expressjs.com/)
- [**Mongoose**](https://mongoosejs.com/)
- [**Dotenv**](https://www.npmjs.com/package/dotenv)
- [**Nodemon**](https://www.npmjs.com/package/nodemon)

## Support

For support, email
[**Malik Talha**](mailto:mtnaqshbandi2003@gmail.com)

## Project Status

The project is currently in development. You can contribute to the project by
forking it from [here](https://github.com/MalikTalha03/MoviesAPI)

## Feedback

If you have any feedback, please reach out to us at
[**Malik Talha**](mailto:mtnaqshbandi2003@gmail.com?subject=[GitHub]%20MoviesAPI%20Feedback)
