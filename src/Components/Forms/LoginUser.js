import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={style.ContainerLogin}>
      <View>
        <Text style={style.InputText}>E-mail</Text>
        <TextInput
          mode="outlined"
          style={style.Input}
          value={email}
          onChangeText={text => setEmail(text)}
          right={<TextInput.Icon icon="account-circle" color={'#8200A8'} />}
        />
      </View>

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
              icon="eye" 
              color={'#8200A8'}
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <TextInput.Icon
              icon="eye-off" 
              color={'#8200A8'}
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
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
  },

  image: {
    height: 25,
    width: 25,
    marginTop: -20,
  },

  Input: {
    width: 320,
    height: 50,
    marginTop: -15,
    backgroundColor: '#EDE0D6 ',
  },
});
