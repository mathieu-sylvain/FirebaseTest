const Storage = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = '10e82';

// Instantiates a client
const storage = Storage({
    projectId: projectId
});

// The name for the new bucket
const bucketName = 'default';

// Creates the new bucket
storage.createBucket(bucketName)
    .then(() => {
    console.log(`Bucket ${bucketName} created.`);
})
.catch((err) => {
    console.error('ERROR:', err);
});