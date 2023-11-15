import React from 'react';
import styles from './styles';
import ButtonUser from '../../Components/Buttons/ButtonUser';
import ButtonPub from '../../Components/Buttons/ButtonPub';
import LogoYouOut from '../../Components/LogoYouOut';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.text}>Escolha qual é o seu tipo de usuário:</Text>
        <ButtonUser />
        <ButtonPub />
        <Text style={styles.textend}>Equipe YouOut</Text>
      </View>
    </View>
  );
}
