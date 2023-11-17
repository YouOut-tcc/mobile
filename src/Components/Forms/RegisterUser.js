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
import { BackendAcessError, LoginError } from '../../error/user';

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
    type: 'email',
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
    type: "new-password"
  },
  {
    label: 'Confirme a senha',
    value: '',
    error: false,
    errorMessage: undefined,
    type: "new-password"
  },
];

export default function InputRegister() {
  const [input, onChange, setError, clearErrors, setAllErrors] =
    useReducerInputs(inputsInitialState);

  const navigation = useNavigation();

  const registerRef = useRef();

  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const handleConfirmPassword = () => {
    let password = input[5].value;
    let confirmPasswprd = input[6].value;
    console.log("entrou")
    clearErrors()

    if (password !== confirmPasswprd) {
    console.log("nao foi")
      setError(6, 'As senhas não coincidem!');
      return true;
    }
  };

  // ainda não é possivel cadastrar um numero
  const handleConfirmSubmit = async () => {
    let name = input[0].value;
    let email = input[3].value;
    let telefone = input[4].value;
    let password = input[5].value;

    clearErrors();

    if (!name) {
      setError(0, 'Por favor, preencha o campo de Nome.');
      return;
    }

    if (!email) {
      setError(3, 'Por favor, preencha o campo de E-mail.');
      return;
    }

    if (!telefone) {
      setError(4, 'Por favor, preencha o campo de Telefone.');
      return;
    }

    if (!password) {
      setError(5, 'Por favor, preencha o campo de Senha.');
      return;
    }

    if(handleConfirmPassword()){
      return;
    }

    try {
      const data = {
        name,
        email,
        telefone: 56455,
        password,
      };

      const response = await api.post('/usuario/cadastro', data);

      console.log(data);
      console.log(response.code);
      console.log(response.data.message);

      navigation.navigate('SignInUser');
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof BackendAcessError) {
        setAllErrors();
        setError(
          6,
          'Ocorreu um erro durante o Cadastro. Tente novamente mais tarde.',
        );
      } else if (error instanceof LoginError) {
        setAllErrors();
        setError(6, 'Falha ao cadastra o usuario.');
      } else if(error instanceof ReferenceError){
        console.log(error.message)
      }
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
          onBlur={() => {
            let confirmPassword = input[6].value;
            if (confirmPassword) {
              handleConfirmPassword();
            }
          }}
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
            let password = input[5].value;
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
