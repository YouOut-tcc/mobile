import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cupom = ({ title, discount, off }) => {
  return (
    <View style={styles.container}>
      <View style={styles.couponContainer}>
        <View style={styles.couponContent}>
          <Text style={styles.couponTitle}>{title}</Text>
          <Text style={styles.couponDiscount}>{discount}</Text>
          <Text style={styles.couponOff}>{off}</Text>
        </View>
        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>
        <Text style={styles.YT}>YouOut</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponContainer: {
    width: 300,
    height: 150,
    backgroundColor: '#8200A8',
    borderRadius: 8,
    flexDirection: 'row',
    position: 'relative',
  },
  couponContent: {
    borderColor: '#000',
    borderWidth: 1,
    width: '50%',
    height: '80%',
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponTitle: {
    fontSize: 15,
    color: '#FFF',
  },
  couponDiscount: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'cursive'
  },
  couponOff: {
    fontSize: 15,
    color: '#FFF',
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EDE0D6',
    left: 180,
    bottom: 125
  },
  circle2: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EDE0D6',
    left: 180,
    top: 125
  },
  YT:{
    fontSize: 30,
    color: '#FFF',  
    transform: [{ rotate: '270deg' }],
    left: 20,
    top: 50,
    borderColor: '#000',
    borderWidth: 1,
    width: '45%',
    height: '30%',
    textAlign: 'center',
    fontFamily: 'cursive'
  }
});

export default Cupom;
