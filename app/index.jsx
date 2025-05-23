import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

// Themed Components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />

            <Text style={styles.title}>The Number 1</Text>

            <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

            <Link href="/about" style={styles.link}>
                About Page
            </Link>

            <Link href="/contact" style={styles.link}>
                Contact Page
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

    img: {
        marginVertical: 20,
        width: 165,
        height: 185,
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    },
});
