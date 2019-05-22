var firebaseConfig = {
    apiKey: "AIzaSyA8O003eqngIfLkQaxWoq7N0lMzlCUg8vU",
    authDomain: "my-project-fashion-app.firebaseapp.com",
    databaseURL: "https://my-project-fashion-app.firebaseio.com",
    projectId: "my-project-fashion-app",
    storageBucket: "my-project-fashion-app.appspot.com",
    messagingSenderId: "911100419064",
    appId: "1:911100419064:web:d8e040a1fdc811a3"
  };

  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database()

  export default database