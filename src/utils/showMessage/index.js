import { showMessage } from "react-native-flash-message";
import { colors } from "../colors";

export const showError = message => {
    showMessage({
        message: message,
        type: "default",
        backgroundColor: colors.error, // background color
        color: colors.white, // text color
      });
}

export const showSuccess = message => {
    showMessage({
        message: message,
        type: "default",
        backgroundColor: colors.primary, // background color
        color: colors.white, // text color
      });
}