import * as sdk from 'node-appwrite';

console.log('Environment Variables:', process.env.PROJECT_ID, process.env.API_KEY);
const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKER_ID,
    NEXT_PUBLIC_ENDPOINT,
} = process.env

    
const client = new sdk.Client();
    client
    .setEndpoint(NEXT_PUBLIC_ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

   
export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

