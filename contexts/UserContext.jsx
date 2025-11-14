import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

// Create a new context object for sharing user data and auth actions
export const UserContext = createContext();

// Define provider component
// Supply the user state + auth functions to its children.
export function UserProvider({ children }) {
    // Initialize user state
    const [user, setUser] = useState(null);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async function logout() {}

    // Return the context provider
    // Make user state and auth functions available to any descendant component
    return <UserContext.Provider value={{ user, login, register, logout }}>{children}</UserContext.Provider>;
}
