module.exports = async function listFiles(bucketName) {
    // Imports the Google Cloud client library
    const { Storage } = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();
    const [files] = await storage.bucket(bucketName).getFiles();

    // console.log('Files:');
    // files.forEach(file => {
    //     console.log(file.name);
    // });

    return files;
};