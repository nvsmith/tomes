import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// Themed Components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={{ width: 165, height: 185 }} />
            <Spacer />

            <ThemedText style={styles.title} title={true}>
                The Number 1
            </ThemedText>
            <Spacer height={10} />

            <ThemedText>Reading List App</ThemedText>
            <Spacer />

            <Link href="/login" style={styles.link}>
                <ThemedText>Login</ThemedText>
            </Link>

            <Link href="/register" style={styles.link}>
                <ThemedText>Register</ThemedText>
            </Link>

            <Link href="/profile" style={styles.link}>
                <ThemedText>Profile Page</ThemedText>
            </Link>
        </ThemedView>
    );
};
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
