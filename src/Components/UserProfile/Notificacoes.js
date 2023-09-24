import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardNotificacoes from './cardNotificacao';

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>
        {''}
        <Icon name={'bell'} size={30} color="#FE0472" />
        <Text style={styles.textNoti}> Notificações</Text>
      </Text>
      <View style={styles.cardNoti}>
        <CardNotificacoes/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    textAlign: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  textNoti: {
    fontSize: 20,
    color: '#000',
  },
});
