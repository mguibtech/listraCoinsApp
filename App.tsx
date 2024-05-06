import { SafeAreaView } from "react-native";
import { Text } from "./src/components/Text/Text";
import { Button } from "./src/components/Button/Button";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";
import { UserIcon } from "./src/assets/icons/UserIcon";
import { LockIcon } from "./src/assets/icons/LockIcon";
import { Icon } from "./src/components/Icon/Icon";
import { TextInput } from "./src/components/TextInput/Textnput";
import { LoginScreen } from "./src/screens/auth/LoginScreen/LoginScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";


function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default App;
