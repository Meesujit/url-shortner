# URL Shortener App
This is a URL shortener application implemented using Node.js, Express, and MongoDB. The application allows you to create shortened URLs, store them in a MongoDB database, and redirect users to the original URLs when they access the shortened links.

## Features
### Node.js and Express: 
- Backend server implementation using Node.js and the Express framework.
### MongoDB: 
- Data storage and retrieval using MongoDB.
### Routers and Controllers: 
- Structured the application with routers and controllers for REST API implementation.
### Third-Party Packages:
- nanoId: Used for generating unique short IDs. Note: Due to issues, shortId is used instead.
- shortId: Deprecated but functional; used for creating short IDs.
# Installation

   ```bash
# Clone the repository:
   git clone https://github.com/your-username/url-shortener.git

# Install dependencies:
    cd url-shortener
    npm install

# Set up the environment variables:
Create a .env file in the root directory and add the following:

# .env Enviroment file setup:
MONGODB_URI=your_mongodb_connection_string
   
   ```
# Usage
```bash
# Run application
npm start

# Use the Postman or any API testing tool to perform GET and POST operations

# Created a shortended URL:

POST http://localhost:8001/url
Content-Type: application/json

{
  "originalURL": "https://example.com"
}

# Access a shortened URL:

GET http://localhost:8001/:shortId

# If the shortId is not found or the redirectURL is not defined, a 404 error will be returned.

```
# Known Issues
- nanoId Package: There are issues with the nanoId package, leading to its non-functional state. The deprecated shortId package is used as an alternative.
Contributing
- Feel free to contribute to the project by opening issues or submitting pull requests.

# License
- This project is licensed under the MIT License.

- Feel free to customize this template further based on your project's specific details and requirements.
# TODO:
- UI/UX Implementation is Pending.
- History, Timestamp, total click on website.
# IMAGES: POST / GET POSTMAN
## GET:
- 


