import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../../../components/Text/Text";
import { Icon } from "../../../components/Icon/Icon";
import { TextInput } from "../../../components/TextInput/Textnput";
import { Screen } from "../../../components/Screen/Screen";

export function LoginScreen(){
    return(
        <Screen>
          <Text bold> Testando primeiro componente</Text>
          <Text italic bold semiBold> Testando primeiro componente</Text>
  
          <Text> Testando primeiro componente</Text>
          <Icon name="lock"/>     
          <Icon name="user" color="black" size={40}/>     
          <TextInput errorMessage="Teste"/>
  
        </Screen>
    )
}