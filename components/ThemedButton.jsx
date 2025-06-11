import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedButton({ style, ...props }) {
    return <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]} {...props} />;
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.5,
    },
});

export default ThemedButton;
