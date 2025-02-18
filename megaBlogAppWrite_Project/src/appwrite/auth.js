import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite"

 export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
       try {
         const userAccount = await this.account.create(ID.unique(), email, password, name);
         if (userAccount) {
             return this.login({ email, password });
         } else {
             return userAccount;
         }
       } catch (error) {
        console.log(error);
        
       }
    }

    async login({ email, password }) {
        return await this.account.createEmailSession(email, password);
     }
     
     async getCurrentUser() {
          try {
            return await this.account.get();
          } catch (error) {
            console.error("User not logged in:", error.message);
            return null; // Return null if no user session exists
          }
     }

     async logout() {
         await this.account.deleteSessions();
     }
}

const authService = new AuthService();

export default authService