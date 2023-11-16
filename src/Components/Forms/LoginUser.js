import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonLogin from '../../Components/Buttons/ButtonA';
import InputA from '../Inputs/InputA';
import InputB from '../Inputs/InputB';
import ButtonGoogle from '../../Components/Buttons/ButtonGoogle';
import ButtonForgotPass from '../../Components/Buttons/ButtonForgotPass';
import ButtonRegister from '../../Components/Buttons/ButtonRegister';
import {useReducerInputs} from '../../hooks/Inputs';
import AuthContext from '../../context/authContext';
import {BackendAcessError, LoginError} from '../../error/user';

const loginInitialState = [
  {
    label: 'E-mail',
    value: '',
    error: false,
    errorMessage: undefined,
    type: 'email',
  },
  {
    label: 'Senha',
    value: '',
    error: false,
    errorMessage: undefined,
    type: 'current-password',
  },
];

export default function InputLogin() {
  const [login, onChange, setError, clearErrors] =
    useReducerInputs(loginInitialState);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const {signIn} = React.useContext(AuthContext);

  const handleSignIn = async () => {
    let email = login[0].value;
    let password = login[1].value;

    console.log(login[0].value)

    clearErrors();

    if (!email) {
      setError(0);
      setError(1, 'Por favor, preencha o campo de e-mail.');
      return;
    }

    if (!password) {
      setError(1, 'Por favor, preencha o campo de senha.');
      return;
    }

    try {
      await signIn({email, password});
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof BackendAcessError) {
        setError(0);
        setError(
          1,
          'Ocorreu um erro durante o login. Tente novamente mais tarde.',
        );
      } else if (error instanceof LoginError) {
        setError(0);
        setError(1, 'Credenciais incorretas. Verifique seu e-mail e senha.');
      }
    }
  };

  return (
    <View style={style.containerForm}>
      <View style={style.containerInputs}>
        <InputB
          index={0}
          state={login}
          onChange={onChange}
          right={<TextInput.Icon icon="account-circle" color={'#8200A8'} />}
        />

        <InputB
          index={1}
          state={login}
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
      </View>
      <ButtonLogin text="Entrar" handlePressOut={handleSignIn} />
      <ButtonForgotPass />
      <Text style={style.or}>━━━━━━━━━━ ou ━━━━━━━━━━</Text>
      <ButtonGoogle />
      <ButtonRegister />
    </View>
  );
}

const style = StyleSheet.create({
  containerForm: {
    flex: 1,
    backgroundColor: '#EDE0D6',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
  },
  containerInputs: {
    width: '80%',
    // borderColor: "red",
    // borderWidth: 1,
  },
  or: {
    alignContent: 'center',
  },
});
