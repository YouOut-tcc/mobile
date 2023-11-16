import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import ButtonRegis from '../../Components/Buttons/ButtonA';
import InputB from '../Inputs/InputB';
import {useReducerInputs} from '../../hooks/Inputs';

import api from '../../apis/backend';
import {AxiosError} from 'axios';

const inputsInitialState = [
  {
    label: 'Nome Completo',
    value: '',
    error: false,
    errorMessage: undefined,
  },
  {
    label: 'CPF',
    value: '',
    error: false,
    errorMessage: undefined,
    mask: '999.999.999-99',
    keyboardType: 'numeric',
  },
  {
    label: 'Data de Nascimento',
    value: '',
    error: false,
    errorMessage: undefined,
    mask: '99/99/9999',
    keyboardType: 'numeric',
  },
  {
    label: 'E-mail',
    value: '',
    error: false,
    errorMessage: undefined,
  },
  {
    label: 'Celular',
    value: '',
    error: false,
    errorMessage: undefined,
    mask: '(99) 99999-9999',
    keyboardType: 'numeric',
  },
  {
    label: 'Senha',
    value: '',
    error: false,
    errorMessage: undefined,
  },
  {
    label: 'Confirme a senha',
    value: '',
    error: false,
    errorMessage: undefined,
  },
];

export default function InputRegister() {
  const [input, onChange, setError, clearErrors] =
    useReducerInputs(inputsInitialState);

  const navigation = useNavigation();

  const nomeRef = useRef();
  const CPFRef = useRef();
  const dateRef = useRef();
  const emailRef = useRef();
  const celularRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const registerRef = useRef();

  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const handleConfirmSubmit = async () => {
    // console.log(JSON.parse(JSON.stringify(ScrollView)))
    try {
      console.log(celular);
      const data = {
        name: nome,
        email,
        telefone: 56455,
        password,
        telefone,
      };
      const response = await api.post('/usuario/cadastro', data);

      console.log(data);
      console.log(response.code);
      console.log(response.data.message);

      navigation.navigate('SignInUser');
    } catch (err) {
      console.log(err.constructor.name);
      if (err instanceof AxiosError) {
        console.log(err.response.status);
        console.log(err.response.data.message);
      }
    }
  };

  const handleConfirmPassword = () => {
    if (password !== passwordConfirm) {
      // setPasswordError('As senhas não coincidem!');
    } else {
      // setPasswordError('');
    }
  };

  return (
    <View style={style.containerForm}>
      {/* <KeyboardAvoidingView style={style.containerInputs} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
      {/* <ScrollView style={style.scrollViewContent}> */}
      <View style={style.containerInputs}>
        <InputB index={0} state={input} onChange={onChange} />

        <InputB index={1} state={input} onChange={onChange} />

        <InputB index={2} state={input} onChange={onChange} />

        <InputB index={3} state={input} onChange={onChange} />

        <InputB index={4} state={input} onChange={onChange} />

        <InputB
          index={5}
          state={input}
          onChange={onChange}
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

        <InputB
          index={6}
          state={input}
          onChange={onChange}
          secureTextEntry={showPasswordConfirm}
          onSubmit={handleConfirmSubmit}
          right={
            showPasswordConfirm ? (
              <TextInput.Icon
                icon="eye"
                color={'#8200A8'}
                onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
              />
            ) : (
              <TextInput.Icon
                icon="eye-off"
                onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
              />
            )
          }
          onBlur={() => {
            if (password) {
              handleConfirmPassword();
            }
          }}
        />
      </View>
      <ButtonRegis
        ref={registerRef}
        text="Confimar"
        handlePressOut={handleConfirmSubmit}
      />

      {/* </ScrollView> */}
      <View style={style.gap} />
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}

const style = StyleSheet.create({
  // scrollContainer: {
  //   // flexGrow: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderColor: 'red',
  //   borderWidth: 1,
  //   backgroundColor: "red"
  // },
  // scrollViewContent: {
  //   // flexGrow: 1,
  //   // flex: 1,
  //   width: "100%",
  //   // borderColor: 'red',
  //   // borderWidth: 1,
  // },
  containerForm: {
    flex: 1,
    backgroundColor: '#EDE0D6',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  gap: {
    width: '100%',
    height: 80,
  },
  containerInputs: {
    width: '80%',
    // borderColor: "red",
    // borderWidth: 1,
  },
  ErrorMessage: {
    color: 'red',
    fontSize: 12,
  },
});
