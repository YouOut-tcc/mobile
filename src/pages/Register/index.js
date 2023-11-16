import React from 'react';
import styles from './style';
import LogoYouOut from '../../Components/LogoYouOut';
import {View, Text, ScrollView} from 'react-native';
import RegisterUser from '../../Components/Forms/RegisterUser';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.message}>Cadastre-se</Text>
        <ScrollView style={styles.scrollViewContent}>
          <RegisterUser />
        </ScrollView>
      </View>
    </View>
  );
}
