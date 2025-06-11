import { StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";

// Themed Components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Login = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer />

            <ThemedText title={true} style={styles.title}>
                Login to Your Account
            </ThemedText>

            <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
                <Text style={{ color: "#f2f2f2" }}>Login</Text>
            </Pressable>

            <Spacer height={100} />

            <Link href="/register" style={{ textAlign: "center" }}>
                <ThemedText>Register instead</ThemedText>
            </Link>
        </ThemedView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },
});
