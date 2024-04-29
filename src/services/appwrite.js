import { Client, Account, Databases,AuthenticationFactor,Query,Storage, Functions } from "appwrite";

const client = new Client();


client.setEndpoint(process.env.REACT_APP_ENDPOINT).setProject(process.env.REACT_APP_PROJECT_ID);
// Your API Endpoint
// Your project ID
const functions = new Functions(client)
export const  createPaymentIntent= async(amount)=>
 {
  const data = JSON.stringify({ 'amount': Math.round(amount)*100 });
  try {
      const execution = await functions.createExecution( "6602d73958d06fd18e79", data, false, '/', 'POST');
      console.log(execution);
      console.log(execution.responseBody)
      return execution.responseBody;
  } catch (error) {
      console.log("FunctionService::createPaymentIntent()::error", error.type);
      console.log(error);
     
  }}
export const account = new Account(client);
export const query=new Query();
export const database = new Databases(client);
export const storage =new Storage(client); 
