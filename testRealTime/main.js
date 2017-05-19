var express = require('express');
var firebase = require("firebase");
//const Storage = require('@google-cloud/storage');


var app = express();
app.use(express.static('static'));


app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});






/*
messagesRef.push({
    name: "testUser",
    text: "testMsg"
}).then(function() {
    console.log("Pushed Succes");
}.bind(this)).catch(function(error) {
    console.error("Pushed Error");
});
*/

/*
// Your Google Cloud Platform project ID
const projectId = '995957940171';

// Instantiates a client
const storage = Storage({
    projectId: projectId
});

// The name for the new bucket
const bucketName = 'firstproject-10e82.appspot.com';


// Creates the new bucket
storage.createBucket(bucketName)
    .then(() => {
    console.log("Bucket ${bucketName} created.")
})
.catch((err) => {
    console.error('ERROR:', err);
});
*/