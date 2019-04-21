projects =[];
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD--uEP3zE1Nha53lT-746aGeF0y79LsqQ",
    authDomain: "superman-saeed.firebaseapp.com",
    databaseURL: "https://superman-saeed.firebaseio.com",
    projectId: "superman-saeed",
    storageBucket: "superman-saeed.appspot.com",
    messagingSenderId: "105196298475"
  };
  firebase.initializeApp(config);

var database = firebase.firestore();

getData(database,"portfolio");
// getData(database,"skills");
// getData(database,"about");

function getData(db,name){
 db.collection(name).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        card(portfolio ,doc.data().name, doc.data().description, doc.data().url);
        console.log(doc.id, " => ", doc.data());


    });

});

}
