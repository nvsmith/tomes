import { Image, useColorScheme } from "react-native";

// Images
import DarkLogo from "../assets/img/book-dark-theme.png";
import LightLogo from "../assets/img/book-light-theme.png";

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme();

    const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

    return <Image source={logo} {...props} />;
};

export default ThemedLogo;
