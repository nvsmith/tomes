import { createContext, useState } from "react";

// Create a new context object for sharing user data and auth actions
export const UserContext = createContext();

// Define provider component
// Supply the user state + auth functions to its children.
export function UserProvider({ children }) {
    // Initialize user state
    const [user, setUser] = useState();

    async function login(email, password) {}

    async function register(email, password) {}

    async function logout() {}

    // Return the context provider
    // Make user state and auth functions available to any descendant component
    return <UserContext.Provider value={{ user, login, register, logout }}>{children}</UserContext.Provider>;
}
