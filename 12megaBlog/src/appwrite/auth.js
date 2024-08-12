import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); //YOur project id
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //calling another new fucntion
        return this.login({email,password})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }


  async login({email,password}){
    try {
        return await account.createEmailPasswordSession(
            email, 
            password
        );
    } catch (error) {
        throw error;
    }
  }

  async getCurrentUser(){
    try {
        const user = await account.get();
        return user;
        // Logged in
    } catch (err) {
        console.log("Appwrite :: getCurrentUser :: error",err)
        // Not logged in
    }
  }

  async logout(){
    try {
       return await account.deleteSessions()
    } catch (error) {
        console.log("Appwrite :: logout :: error",error)
    }
  }

  




}
const authservice = new AuthService();
export default authservice;
