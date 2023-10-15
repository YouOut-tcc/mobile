import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardCupom from './cardCupom';

export default function Cupons() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>
        {''}
        <Icon name={'ticket'} size={30} color="#FE0472" />
        <Text style={styles.textCup}> Cupons </Text>
      </Text>
      <View>
        <CardCupom/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '2%',
    textAlign: 'center',
    alignSelf: 'center',
    width: '90%',  
  },
  textCup: {
    fontSize: 20,
    color: '#000',
  },
});
