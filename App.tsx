import { SafeAreaView } from "react-native";
import { Text } from "./src/components/Text/Text";
import { Button } from "./src/components/Button/Button";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>

      <SafeAreaView>
        <Text bold> Testando primeiro componente</Text>
        <Text italic bold semiBold> Testando primeiro componente</Text>

        <Text> Testando primeiro componente</Text>
        <Button title="Teste" marginHorizontal="s10"/>

      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
