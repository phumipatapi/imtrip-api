const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("./credential_firebase.json");

const initializeApps = () => {
  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: "gs://imtripcommu.appspot.com",
  });
};

module.exports = {
  initializeApps,
};

// 'bucket' is an object defined in the @google-cloud/storage library.
// See https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage/latest/storage/bucket
// for more details.
