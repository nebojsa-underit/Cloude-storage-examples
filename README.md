# Cloude-storage-examples
Here we have examples of using cloud storage programmatically on Azure and AWS using Javascript.

To copy project to your local machine, go to wanted location, open cmd and paste: 

```git clone https://github.com/nebojsa-underit/Cloude-storage-examples.git```

## Uploading file to Azure blob storage

### Creating Azure and storage account

Firstly, you need to create Micrsoft Azure account [here](https://azure.microsoft.com/en-us/).

After that we can begin setting up our bucket, where we will be uploading files.


![alt text](https://i.postimg.cc/pL5YRDL2/Go-To-Portal.png "Go to Micrsoft Auzre portal")

On console search for "Storage accounts". Here we can see the look of Storage accounts console UI:

![alt text](https://i.postimg.cc/q70tSntD/Storage-Account-Console.png "Go to Micrsoft Auzre portal")

How to fill basic fields on sotrage account creating form ?

1. Subscription: Azure Sub1 or Free tier

2. Resource groupe: Here we can provide information about current stage of project. In this field put for example : Development or Production.

3. Storage account name: Name of storage account must be unique. Combination of company name as a prefix and name of project is appropriate solutin for naming.

4. Location: Depending on your location, select the server closest to your physical address.

5. Performance: Select standard tier performance, it is for storing files. A premium performance tier for storing unmanaged virtual machine disks. Microsoft recommends using managed disks with Azure virtual machines instead of unmanaged disks.

6. Account kind: General-purpose v2 accounts: Basic storage account type for blobs, files, queues, and tables. Recommended for most scenarios using Azure Storage.
General-purpose v1 accounts: Legacy account type for blobs, files, queues, and tables. Use general-purpose v2 accounts instead when possible.
BlockBlobStorage accounts: Storage accounts with premium performance characteristics for block blobs and append blobs. Recommended for scenarios with high transactions rates, or scenarios that use smaller objects or require consistently low storage latency.
FileStorage accounts: Files-only storage accounts with premium performance characteristics. Recommended for enterprise or high performance scale applications.
BlobStorage accounts: Legacy Blob-only storage accounts. Use general-purpose v2 accounts instead when possible.

We will select BlobStorage, becaouse we only use it for uploding images in this tutorial.

7. Replication: 
Locally redundant storage (LRS): A simple, low-cost redundancy strategy. Data is copied synchronously three times within the primary region.
Zone-redundant storage (ZRS): Redundancy for scenarios requiring high availability. Data is copied synchronously across three Azure availability zones in the primary region.
Geo-redundant storage (GRS): Cross-regional redundancy to protect against regional outages. Data is copied synchronously three times in the primary region, then copied asynchronously to the secondary region. For read access to data in the secondary region, enable read-access geo-redundant storage (RA-GRS).
Geo-zone-redundant storage (GZRS) (preview): Redundancy for scenarios requiring both high availability and maximum durability. Data is copied synchronously across three Azure availability zones in the primary region, then copied asynchronously to the secondary region. For read access to data in the secondary region, enable read-access geo-zone-redundant storage (RA-GZRS).

We will select locally redundant storage.

8. Access tier: 
The Hot access tier. This tier is optimized for frequent access of objects in the storage account. Accessing data in the hot tier is most cost-effective, while storage costs are higher. New storage accounts are created in the hot tier by default.
The Cool access tier. This tier is optimized for storing large amounts of data that is infrequently accessed and stored for at least 30 days. Storing data in the cool tier is more cost-effective, but accessing that data may be more expensive than accessing data in the hot tier.


We will select hot, becaouse we will probably use this images we uplod very frequently.



![alt text](https://i.postimg.cc/gkD6XhdP/Creating-New-Storage-Account.png "Go to Micrsoft Auzre portal")


If we have passed validation successfully, we can than create our first storage account.


![alt text](https://i.postimg.cc/X7Qp70cj/Passed-Validation.png "Go to Micrsoft Auzre portal")


### Downloading and setting up storage explorer


Next we need to download storage explorer [here](https://azure.microsoft.com/en-ca/features/storage-explorer/).

After download is finished, start setup and install storage explorer.

To create connection with storage account, we need to do next few steps: 


1. Open Storage explorer and click on connection button. 
![alt text](https://i.postimg.cc/vHg2zGqT/Click-On-Connection-Button.png "Go to Micrsoft Auzre portal")

2. Select connection string as a connection method.
![alt text](https://i.postimg.cc/qRFXh3dL/Select-Connection-String.png "Go to Micrsoft Auzre portal")

3. Head for storage account dashbord and go to access keys.
![alt text](https://i.postimg.cc/52pP9jjP/Copy-Connection-String.png "Go to Micrsoft Auzre portal")

4. Fill the required feilds in, display name and connection string.
![alt text](https://i.postimg.cc/Sj0yskNs/Attach-With-Connection-String.png "Go to Micrsoft Auzre portal")

5. After creating connection, we need to create new container (name it 'assets').
![alt text](https://i.postimg.cc/76GhYBMK/Create-New-Blob-Container.png "Go to Micrsoft Auzre portal")


### Setting up nodejs server for image upload using postman

1. Open in code editor repository we cloned at beggining, using command propmt in azureBlobStorageUploader directory run command ```npm install ``` to install all project dependecies. 
In it's base it is just simple NodeJS server with one route implemented  ```app.post("/documents", ... ```

2. This route will be used to upload files to our storage account via Postman, but first we need to setup multer-azure-blob-storage-uploader.
![alt text](https://i.postimg.cc/mg9GD00z/Filling-Access-Infomration.png "Go to Micrsoft Auzre portal")

3. Next step is setting up postman:
![alt text](https://i.postimg.cc/qBCfjfvm/Postman.png "Go to Micrsoft Auzre portal")

4. Finally, we can see uploaded file in our storage explorer.
![alt text](https://i.postimg.cc/7hXSSsdS/Container-With-Picture.png "Go to Micrsoft Auzre portal")



