import React from 'react';
import styles from './styles';
import ButtonUser from '../../Components/Buttons/ButtonUser';
import ButtonPub from '../../Components/Buttons/ButtonPub';
import LogoYouOut from '../../Components/LogoYouOut';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function AccessCommerce() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>
          Acesse nossa plataforma para comerciantes
        </Text>
        <Text style={styles.text}>
          Gerencie seu estabelecimento de forma eficaz, alcance mais clientes e
          expanda seus negócios.
        </Text>
        <Text style={styles.text}>Confira! (link?)</Text>
        <Text style={styles.textend}>Equipe YouOut</Text>
      </View>
    </View>
  );
}
