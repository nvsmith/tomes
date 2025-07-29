import { Client, Account, Avatars } from "react-native-appwrite";

// Configure project ID and platform
export const client = new Client().setProject("6824cb090027a701390f").setPlatform("com.outpostwebstudio.tomes");
// .setEndpoint('https://fra.cloud.appwrite.io/v1');

// Create account and avatars services using the client
export const account = new Account(client);
export const avatars = new Avatars(client);
