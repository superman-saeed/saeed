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

var database = firebase.firestore(),
dataTable = [];
// var collection = database.collection("portfolio");
// data =[
//   {
//   name:"Tax Calculator",
//   url:"https://superman-saeed.github.io/tax-calculator",
//   description:"A Pay-As-You-Earn Tax calculator for people in Ghana. It calculates SSNIT and tax contribution. Tax Calcator is built with ReactJs",
//   status:"completed"
//
//
//   },
//   {
//   name:"Instagram Demo",
//   url:"https://instagram-demo-1.firebaseapp.com",
//   description:"A ReactJs demo of Instagram app without using any css frameworks. App is still  is in progress",
//   status:"not completed"
//
//
//   },
//   {
//   name:"Stop Clock",
//   url:"https://instagram-demo-1.firebaseapp.com",
//   description:"A ReactJs demo of stop clock app. ",
//   status:"not completed"
//
//
//   }
//
// ];
//
//
// post(database, collection ,data);
// function post(db, collection, dataArray){
//    dataArray.forEach(function(item,index){
//         collection.doc(item.name).set(item);
//         console.log(index);
//    });
//
//  }
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
