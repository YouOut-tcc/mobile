import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function InputRegister() {
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [Date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={style.ContainerLogin}>
      <Text style={style.InputTextName}>Nome Completo</Text>
      <TextInput
        mode="outlined"
        style={style.Input}
        value={nome}
        onChangeText={text => setNome(text)}
        left={<TextInput.Icon Icon="gmail" size={25} color={'black'} />}
      />
      <Text style={style.InputTextCPF}>CPF</Text>
      <TextInput
        mode="outlined"
        style={style.Input}
        value={CPF}
        onChangeText={text => setCPF(text)}
        left={<TextInput.Icon Icon="gmail" size={25} color={'black'} />}
      />

      <Text style={style.InputTextDt}>Data de nascimento</Text>
      <TextInput
        mode="outlined"
        style={style.Input}
        value={Date}
        onChangeText={text => setDate(text)}
        left={<TextInput.Icon Icon="gmail" size={25} color={'black'} />}
      />

      <Text style={style.InputTextEmail}>E-mail</Text>
      <TextInput
        mode="outlined"
        style={style.Input}
        value={email}
        onChangeText={text => setEmail(text)}
        left={
          <TextInput.Icon
            name="account"
            source={{ uri: "https://www.flaticon.com/br/icones-gratis/gmail"}}
            size={25}
            color={'black'}
          />}
      />

      <Text style={style.InputTextCel}>Celular</Text>
      <TextInput
        mode="outlined"
        style={style.Input}
        value={celular}
        onChangeText={text => setCelular(text)}
        left={<TextInput.Icon Icon="gmail" size={25} color={'black'} />}
      />

      <Text style={style.InputTextPass}>Senha</Text>
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

      <Text style={style.InputTextConfirm}>Confirme a senha</Text>
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
  Input: {
    // borderColor: '#000',
    width: 320,
    height: 50,
    borderRadius: 20,
    marginTop: -16,
    backgroundColor: 'white'
  },

  InputTextName: {
    marginLeft: 20,
    marginTop: '4%',
    width: 120,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
  },

  InputTextCPF: {
    marginLeft: 20,
    marginTop: '2%',
    width: 50,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
  },

  InputTextDt: {
    marginLeft: 20,
    marginTop: '2%',
    width: 150,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
    textAlign: 'center',
  },

  InputTextEmail: {
    marginLeft: 20,
    marginTop: '2%',
    width: 60,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
    textAlign: 'center',
  },

  InputTextCel: {
    marginLeft: 20,
    marginTop: '2%',
    width: 50,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
  },

  InputTextPass: {
    marginLeft: 20,
    marginTop: '2%',
    width: 50,
    color: '#000',
    backgroundColor: 'white',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
  },
  InputTextConfirm: {
    marginLeft: 20,
    marginTop: '2%',
    width: 120,
    color: '#000',
    backgroundColor: 'white',
    textAlign: 'center',
    zIndex: 1,
  },
});
