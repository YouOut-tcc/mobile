import React from 'react';
import styles from './style';
import LogoYouOut from '../../Components/LogoYouOut';
import {View, Text, ScrollView} from 'react-native';
import InputRegister from '../../Components/Inputs/InputRegister';


export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.message}>Cadastre-se</Text>

        <InputRegister />
      </View>
    </View>
  );
}
