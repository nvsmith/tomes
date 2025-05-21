import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <View
            style={[
                {
                    backgroundColor: theme.background,
                },
                style,
            ]}
        ></View>
    );
};
export default ThemedView;
