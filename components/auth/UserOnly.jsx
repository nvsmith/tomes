import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const UserOnly = ({ children }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    // Initialize and check anytime user or authChecked changes
    useEffect(() => {
        if (authChecked && user === null) {
            // Replace current page with login page
            router.replace("/login");
        }
    }, [user, authChecked]);

    if (!authChecked || !user) {
        return <Text>Loading</Text>;
    }

    // Render everything wrapped by this component (in the (dashboard) group)
    return children;
};

export default UserOnly;
