# NASA Mars Rover Image App!

The purpose of this application is to complete the Shopify front-end developer 2022 challenge.
The application is built with ReactJS and MaterialUI and is hosted using nodejs and heroku.
The application can be viewed right [here](https://nasa-rover-image-feed.herokuapp.com/)

The application uses [NASA's Mars Rover API](https://api.nasa.gov/) to fetch the first 25 images and displays
them using React components. Each component is styled using MaterialUI. The application allows the user to like and unlike
images while displayed the total number of liked images on a counter. This counter's position is fixed on the left side of 
the application so it can be viewed as the user decides what images they want to like/dislike. 

When a user likes an image, a key/value pair of image id and the state of the component (liked/disliked) is stored in localStorage.
This allows the user to still view their liked/unliked images even if the browser is closed or refreshed.

## How to Install and run locally.

1. Clone the repo
2. Run 'npm install' to install the node_module dependencies 
3. Run 'npm start' to start the app
4. Go to [localhost:8080](http://localhost:8080/) 

## Challenge Features Implemented
- Animated like button
- Ability to remember the state of image components


