# Notes API

Notes API is a simple RESTful API for managing user notes. It allows users to sign up, sign in, and perform CRUD operations on their notes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/notes_api.git
    cd notes_api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    ```

4. Start the server:

    ```sh
    npm start
    ```

## Usage

The API server will be running on `http://localhost:5000`. You can use tools like Postman or cURL to interact with the API.

## API Endpoints

### User Authentication

- **Sign Up**

    ```http
    POST /users/signup
    ```

    Request Body:

    ```json
    {
        "username": "your_username",
        "email": "your_email",
        "password": "your_password"
    }
    ```

- **Sign In**

    ```http
    POST /users/signin
    ```

    Request Body:

    ```json
    {
        "email": "your_email",
        "password": "your_password"
    }
    ```

### Notes

- **Get All Notes**

    ```http
    GET /notes
    ```

    Requires authentication. Add `Authorization` header with the token.

- **Create Note**

    ```http
    POST /notes
    ```

    Requires authentication. Add `Authorization` header with the token.

    Request Body:

    ```json
    {
        "title": "note_title",
        "description": "note_description"
    }
    ```

- **Update Note**

    ```http
    PUT /notes/:id
    ```

    Requires authentication. Add `Authorization` header with the token.

    Request Body:

    ```json
    {
        "title": "updated_title",
        "description": "updated_description"
    }
    ```

- **Delete Note**

    ```http
    DELETE /notes/:id
    ```

    Requires authentication. Add `Authorization` header with the token.

## Environment Variables

- [`PORT`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fjatin%2Fprojects%2FNOTES_API%2Fsrc%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A27%2C%22character%22%3A25%7D%7D%5D%2C%22f04452c5-8236-4a02-8d13-7e76f12764d9%22%5D "Go to definition"): The port on which the server will run.
- [`MONGODB_URI`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fjatin%2Fprojects%2FNOTES_API%2Fsrc%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A29%2C%22character%22%3A29%7D%7D%5D%2C%22f04452c5-8236-4a02-8d13-7e76f12764d9%22%5D "Go to definition"): The URI for connecting to MongoDB.
- [`SECRET_KEY`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fjatin%2Fprojects%2FNOTES_API%2Fsrc%2Fcontrollers%2FuserController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fjatin%2Fprojects%2FNOTES_API%2Fsrc%2Fmiddleware%2Fauth.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A6%7D%7D%5D%2C%22f04452c5-8236-4a02-8d13-7e76f12764d9%22%5D "Go to definition"): The secret key for JWT token generation.

## License

This project is licensed under the ISC License.
