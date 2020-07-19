import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAkNaKKb4D7T_KVJucw96BalXPzCiFCLLU",
    authDomain: "photowall-c115a.firebaseapp.com",
    databaseURL: "https://photowall-c115a.firebaseio.com",
    projectId: "photowall-c115a",
    storageBucket: "photowall-c115a.appspot.com",
    messagingSenderId: "597580077840",
    appId: "1:597580077840:web:cf39888415eb5049186395",
    measurementId: "G-06RK25YPHZ"
  };
  firebase.initializeApp(config)
  const database =firebase.database()
  export {database}
  