import conf from "../conf/conf.js";

import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket; //or storage

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId, // databaseId
        conf.appwriteCollectionId, // collectionId
        slug, // documentId
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service:: createpost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await databases.updateDocument(
        conf.appwriteDatabaseId, // databaseId
        conf.appwriteCollectionId, // collectionId
        slug, // documentId
        {
          title,
          content,
          featuredImage,
          status,
        } // data (optional)
      );
    } catch (error) {
      console.log("appwrite service:: upadatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await databases.deleteDocument(
        conf.appwriteDatabaseId, // databaseId
        conf.appwriteCollectionId, // collectionId
        slug // documentId
      );

      return true;
    } catch (error) {
      console.log("appwrite service:: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId, // databaseId
        conf.appwriteCollectionId, // collectionId
        slug // documentId
      );
    } catch (error) {
      console.log("appwrite service:: getPost :: error", error);
      return false;
    }
  }

  async getPosts(query = Query.equal("status", "active")) {
    // we can defien the above query after collection id also
    try {
      return this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        query
      );
    } catch (error) {
      console.log("appwrite service:: getPosts :: error", error);
      return false;
    }
  }

  //file uplaoding services

  async uploadFile(file) {
    try {
      return this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("appwrite service:: uploadingFile :: error", error);
      return false;
    }
  }

  async delteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId, // bucketId
            fileId // fileId
        );
        return true
    } catch (error) {
        console.log("appwrite service:: fileId :: error", error);
      return false;
    }
  }

  getFilePreview(fileId){
    
        return this.bucket.getFilePreview(
            conf.appwriteBucketId, // bucketId
            fileId, // fileId
           
        );

        
    }
  }


const service = new Service();
export default service;
