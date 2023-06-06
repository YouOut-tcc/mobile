import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-paper';


export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={style.ContainerLogin}>
      <Text style={style.InputText}>E-mail</Text>
      <TextInput
      mode="outlined"
        style={style.Input}
        value={email}
        onChangeText={text => setEmail(text)}
        right={<TextInput.Icon Icon="gmail" size={25} color={'black'} />}
      />

      <Text style={style.InputText}>Senha</Text>
      <TextInput
      mode="outlined"
        style={style.Input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={showPassword}
        right={
          showPassword ? (
            <TextInput.Icon
              Icon="eye"
              size={25}
              color={'black'}
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <TextInput.Icon
              Icon="eye-off"
              size={25}
              color={'black'}
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
      />
    </View>
  );
}

const style = StyleSheet.create({
  InputText: {
    marginLeft: 20,
    fontSize: 16,
    marginTop: '2%',
    width: 60,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
  },

  Input: {
    width: 320,
    height: 50,
    marginTop: -15,
    backgroundColor: 'white',
  },
 
});
