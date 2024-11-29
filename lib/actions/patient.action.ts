'use server'

import { ID, Query } from "node-appwrite"
import { users } from '../appwrite.config';
import { parseStringify } from "../utils";


export const createUser = async (user:any) => {
    try {
        const newUser = await users.create(
            ID.unique(),      // Unique user ID
            user.email,       // User's email address
            user.phone,
            undefined,   // User's password (required)
            user.name,// User's phone number (optional)
                    // User's name (optional)
        );
        console.log('User created successfully:', newUser);
        return newUser;
    } catch (error:any) {
        console.error('Error during user creation:', error);

        if (error && error.code === 409) {
            // Handle "user already exists" error
            console.log('User already exists. Fetching existing user...');

            try {
                const existingUserList = await users.list([
                    Query.equal('email', user.email)
                ]);

                if (existingUserList.total > 0) {
                    const existingUser = existingUserList.users[0];
                    console.log('Existing user found:', existingUser);
                    return existingUser;
                }
            } catch (fetchError) {
                console.error('Error fetching existing user:', fetchError);
                throw fetchError;
            }
        }

        throw error;
    }
};


export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);
        return parseStringify(user)
    } catch (error) {
        console.log(error)
    }
}