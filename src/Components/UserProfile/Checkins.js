import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardCheck from './CardCheck';


export default function Checkins() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>
        {''}
        <Icon name={'check-square-o'} size={30} color="#FE0472" />
        <Text style={styles.textCup}> Checkins </Text>
      </Text>
      <View style={styles.enfim}>
        <CardCheck/>
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
    height: 300,    
  },
  textCup: {
    fontSize: 20,
    color: '#000',
  },
  enfim:{
    height: 200,
  }
});
