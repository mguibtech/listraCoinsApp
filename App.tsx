import { SafeAreaView } from "react-native";
import { Text } from "./src/components/Text/Text";


function App(){
  return (
    <SafeAreaView>
      <Text bold> Testando primeiro componente</Text>
      <Text italic bold semiBold> Testando primeiro componente</Text>

      <Text> Testando primeiro componente</Text>

    </SafeAreaView>
  );
}
export default App;
