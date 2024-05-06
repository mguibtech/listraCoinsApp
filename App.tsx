import { SafeAreaView } from "react-native";
import { Text } from "./src/components/Text/Text";
import { Button } from "./src/components/Button/Button";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";
import { UserIcon } from "./src/assets/icons/UserIcon";
import { LockIcon } from "./src/assets/icons/LockIcon";
import { Icon } from "./src/components/Icon/Icon";


function App() {
  return (
    <ThemeProvider theme={theme}>

      <SafeAreaView>
        <Text bold> Testando primeiro componente</Text>
        <Text italic bold semiBold> Testando primeiro componente</Text>

        <Text> Testando primeiro componente</Text>
        <Icon name="lock"/>     
        <Icon name="user" color="black" size={40}/>     

      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
