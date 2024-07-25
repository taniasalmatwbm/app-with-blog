import conf from '../conf/conf'
import {Account, Client, ID} from 'appwrite'


export class AuthService{
     client = new Client()
     account;

  constructor(){
         this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId)
          this.account= new Account(this.client)
  }

  
  async createAccount ({email, password,name}){
      try{
              const userData= await this.account.create(ID.unique(), email, password, name);
              if (userData){
    //           console.log(userData)
                return this.login({email,password});
              }else{
                 return userData;
              }
        }catch(error){
         throw error;
      }
  }
  

  async login({email, password}){
      try{
            await this.account.createEmailPasswordSession(email, password);
      }catch(error){
         throw error;
      }
  }


  async getCurrentUser (){
       
     try{
           return await this.account.get();
           
     }catch(error){
          console.log("Appwrite serive :: getCurrentUser :: error", error);
          //console.log(this.account)
     }
     return null;
  }
 

  async logout(){
     try{
         await this.account.deleteSessions();
     }catch(error){
        console.log("Appwrite service::  logout" , error)
     }
  }


}

const authService = new AuthService();
 export default authService;
