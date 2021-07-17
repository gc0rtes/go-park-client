<img style="float: left;" height="32" width="32" src="./src/resources/images/logo.png" /><h2> &nbsp; GoPark!</h2>

<!-- <hr/>
A web app that helps you find events in the Parks of your city. <br>
This app will locate and disclose classes given by teachers that take place in open spaces like dance and martial art, crossfit or yoga sessions for example. <br>
It can also help to find some pals to play football/rugby/cricket/chess matches or to just support to make a barbecue with friends on a sunny day. <br> -->

Built on the mobile-first concept the app [GoPark!](https://gopark.netlify.app/) is a platform to publicize events that take place in the
city's parks connecting people through social, fitness, and dance classes or workshops.<br>
Making use of the map technologies power the user can post a new event with a few clicks and mark the exact meeting
location in the park making it easier for the target audience to find it.<br>

Let's go out and have some fun with the **GoPark!**

<hr>

## Techical Description

It is a responsive single page application that make use of the frameworks React.JS for the frontend and Express to the backend.

## Client ([repo](https://github.com/gc0rtes/go-park-client))

Built on top of _Redux_ data-flow architecture to manage global states the App made use of 5 stores:

- appState: manage the status of loading content;
- user: manage the login and sign up user authentication;
- Events and eventDetails: to fetch and cache the events from the API;
- eventMarkPosition: to get the coordinates from the map when the user is posting an event.

**The follow libraries were used on the project's client side:**

- **Axios**: Send asynchronous HTTP requests to REST endpoints of the API and perform CRUD operations;

- **Bootstrap**: For style and to provide a better user experience making the App responsive to small and big screens;
- **Leaflet and Leaflet-React**: All the maps shown on the App make use of this great open-source library;
- **Moment**: To format the date displayed and do the logic operations;
- **React-router-dom**: As a single-page application this is used for renders the appropriate information on the DOM using the App components structure;

## Server ([repo](https://github.com/gc0rtes/go-park-server))

This server-side application is a RESTFul API built on top of Node & Express to provide data to client and persist relevant information like the events and user information.

**The following libraries were used on the project's server-side:**

- **Bcrypt**: A password-hashing function used to secure the user's password on DB and the authentication process

- **Cors**: This package provides an Express middleware that can be used to enable CORS allowing the server to receive requests from other origins than its own;
- **Express**: Used to configure the routers, middlewares authentications and set the endpoints of the application
- **Jsonwebtoken**: The JSON web token was the method used to allow the user's authentication on the App.
- **Moment**: Used to manage the dates on the logic endpoint and prevent that a no longer valid event be sent to the client
- **Morgan**: An Express middleware to log HTTP requests and errors, used here to simplify the logging process requests.
- **Pg**: A PostgresSQL client for Node.js. Allow the interfacing between the PostgreSQL database and the node.
- **Sequelize**: An Object-Relational Mapper (ORM) that helps to manage the SQL database using javascript language.
