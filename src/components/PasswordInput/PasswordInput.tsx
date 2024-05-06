import React, {useState} from 'react';
import { TextInput } from '../TextInput/Textnput';
import { Icon } from '../Icon/Icon';
import { TextInputProps } from 'react-native';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecurityTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...props}
      placeholder="Digite a senha"
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="grey200"
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}