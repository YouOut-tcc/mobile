import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardNotificacoes from './cardNotificacao';

export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bell" size={30} color="#FE0472" />
        <Text style={styles.textNoti}>Notificações</Text>
      </View>
      <View style={styles.cardNoti}>
        <CardNotificacoes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10, 
    width: '90%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textNoti: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },
 
});
