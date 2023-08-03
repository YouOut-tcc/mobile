import React from 'react';
import styles from './styles';
import LogoYouOut from '../../Components/LogoYouOut';
import ButtonAccess from '../../Components/Buttons/ButtonA';
import ButtonRegister from '../../Components/Buttons/ButtonRegister';
import ButtonForgotPass from '../../Components/Buttons/ButtonForgotPass';
import ButtonGoogle from '../../Components/Buttons/ButtonGoogle';
import LoginForm from '../../Components/Forms/LoginUser';
import {View, Text} from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>
      <View style={styles.containerForm}>
      <Text style={styles.message}>Login</Text>
      <Text style={styles.text}>Faça login para continuar</Text>
      
      <LoginForm />
      <ButtonAccess text="Entrar"/>
      <ButtonForgotPass />
      <Text style={styles.or}>━━━━━━━━━━ ou ━━━━━━━━━━</Text>
      <ButtonGoogle />

      <ButtonRegister />
      </View>
    </View>
  );
}
