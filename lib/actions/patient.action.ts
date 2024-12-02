"use server";

import { ID, Query } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  users,
  storage,
  databases,
} from "../appwrite.config";
// import { parseStringify } from "../utils";
import { InputFile } from "node-appwrite/file";

export const createUser = async (user: any) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name,
    );
    const parseNewUser = JSON.parse(JSON.stringify(newUser));

    return parseNewUser;
  } catch (error: any) {
    console.error("Error during user creation:", error);

    if (error && error.code === 409) {
      // Handle "user already exists" error
      console.log("User already exists. Fetching existing user...");

      try {
        const existingUserList = await users.list([
          Query.equal("email", user.email),
        ]);

        if (existingUserList.total > 0) {
          const existingUser = existingUserList.users[0];
          console.log("Existing user found:", existingUser);
          return existingUser;
        }
      } catch (fetchError) {
        console.error("Error fetching existing user:", fetchError);
        throw fetchError;
      }
    }

    throw error;
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    const parseUser = JSON.parse(JSON.stringify(user));

    return parseUser;
  } catch (error) {
    console.log(error);
  }
};

    export const registerPatient = async ({
    identificationDocument,
    ...patient
    }: RegisterUserParams) => {
    try {
        let file;
        if (identificationDocument) {
        const inputFile = identificationDocument && InputFile.fromBuffer(
            identificationDocument?.get("blobFile") as Blob,
            identificationDocument?.get("fileName") as string
        );
        file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
        }
        
        const newPatient = await databases.createDocument(
        DATABASE_ID!,
        PATIENT_COLLECTION_ID!,
        ID.unique(),
        {
            identificationDocumentId: file?.$id ? file.$id : null,
           identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
            ...patient,
        }
        );
            console.log('Patient created successfully:', newPatient); return newPatient;
        } catch (error:any) {
            console.error('Error creating patient:', error);
        if (error.response)
        { console.error('Error response:', error.response); }
        }
    };
    

export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );
    if (patients.documents && patients.documents.length > 0) {
      const parsePatients = JSON.parse(JSON.stringify(patients.documents[0]));
      return parsePatients;
    } else {
      return null
    }
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
