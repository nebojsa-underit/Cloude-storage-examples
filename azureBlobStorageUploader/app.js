const express = require("express");
const multer = require("multer");
const MulterAzureStorage = require("multer-azure-blob-storage")
  .MulterAzureStorage;

const app = express();
const port = 3000;

const nameBlob = (req, file) => {
  return `${Date.now() + file.originalname}`;
};

const setMetaData = (req, file) => {
  return file.metadata;
};

const resolveBlobName = (req, file) => {
  return new Promise((resolve, reject) => {
    const blobName = nameBlob(req, file);
    console.log(blobName);
    resolve(blobName);
  });
};

const resolveMetadata = (req, file) => {
  return new Promise((resolve, reject) => {
    const metadata = setMetaData(req, file);
    resolve(metadata);
  });
};

const azureStorage = new MulterAzureStorage({
  connectionString:
    "DefaultEndpointsProtocol=https;AccountName=underitasset;AccountKey=CMZuh+VMIaU+4dAZhwsptJH8eqfDwLwfDSFk2uCigfp/mRX4XilDA5fIUnitMVdoHCvYZrpTpo3Qyo8tKUT1MQ==;EndpointSuffix=core.windows.net",
  accessKey:
    "CMZuh+VMIaU+4dAZhwsptJH8eqfDwLwfDSFk2uCigfp/mRX4XilDA5fIUnitMVdoHCvYZrpTpo3Qyo8tKUT1MQ==",
  accountName: "underitasset",
  containerName: "assets",
  blobName: resolveBlobName,
  metadata: resolveMetadata,
  containerAccessLevel: "blob",
  urlExpirationTime: 60
});

const upload = multer({
  storage: azureStorage
});

app.post("/documents", upload.any(), (req, res, next) => {
  console.log(req.files);
  res.status(200).json(req.files);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
