import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonLogin from '../../Components/Buttons/ButtonA';
import InputA from '../Inputs/InputA';
import ButtonGoogle from '../../Components/Buttons/ButtonGoogle';
import ButtonForgotPass from '../../Components/Buttons/ButtonForgotPass';
import ButtonRegister from '../../Components/Buttons/ButtonRegister';

import AuthContext from '../../context/authContext';
import {BackendAcessError, LoginError} from '../../error/user';

export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {signIn} = React.useContext(AuthContext);

  const handleSignIn = async () => {
    if (!email) {
      setEmailError('Por favor, preencha o campo de e-mail.');
      return;
    }

    if (!password) {
      setPasswordError('Por favor, preencha o campo de senha.');
      return;
    }

    try {
      await signIn({email, password});
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof BackendAcessError) {
        setPasswordError(
          'Ocorreu um erro durante o login. Tente novamente mais tarde.',
        );
      } else if (error instanceof LoginError) {
        setPasswordError(
          <Text style={style.errorMessage}>
            Credenciais incorretas. Verifique seu e-mail e senha.
          </Text>,
        );
      }
    }
  };

  return (
    <View style={style.containerForm}>
      <View>
        <InputA
          label="E-mail"
          value={email}
          onChange={setEmail}
          error={emailError}
          width={44}
          right={<TextInput.Icon icon="account-circle" color={'#8200A8'} />}
        />

        <InputA
          label="Senha"
          value={password}
          onChange={setPassword}
          error={passwordError}
          width={46}
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
  },
  or: {
    alignContent: 'center',
  },
});
