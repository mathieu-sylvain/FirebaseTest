var config = {
    apiKey: "AIzaSyBy_VXEDGtpzBMVz6MncKhwwpyfi-iE0d8",
    authDomain: "firstproject-10e82.firebaseapp.com",
    databaseURL: "https://firstproject-10e82.firebaseio.com/",
    storageBucket: "gs://firstproject-10e82.appspot.com",
};
firebase.initializeApp(config);

var fireDB = firebase.database();
var messagesRef = fireDB.ref('messages');


var btnclick =  function() {
    var txtElment = document.getElementById("newMessage");
    var txtValue = txtElment.value;

    messagesRef.push({
        text: txtValue
    }).then(function() {
        console.log("Pushed Succes");
    }.bind(this)).catch(function(error) {
        console.error("Pushed Error");
    });
};

document.getElementById("addBtn").addEventListener("click", btnclick);



// Loads the last 12 messages and listen for new ones.
var setMessage = function(data) {
    console.log("set Message");


    var val = data.val();
    //this.displayMessage(data.key, val.name, val.text, val.photoUrl, val.imageUrl);

    var divElement = document.getElementById("messages");

    divElement.innerHTML = divElement.innerHTML + val.text;




}.bind(this);
messagesRef.limitToLast(12).on('child_added', setMessage);
messagesRef.limitToLast(12).on('child_changed', setMessage);




