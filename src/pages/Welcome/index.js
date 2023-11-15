import React from 'react';
import {View, Text} from 'react-native';
import LogoYouOut from '../../Components/LogoYouOut';
import ButtonB from '../../Components/Buttons/ButtonB';

import styles from './styles';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.text}>Escolha qual é o seu tipo de usuário:</Text>
        
        <ButtonB label={'Usuário'} location={'SignInUser'} />
        <ButtonB label={'Estabelecimento'} location={'AccessCommerce'} />

        <Text style={styles.textend}>Equipe YouOut</Text>
      </View>
    </View>
  );
}
