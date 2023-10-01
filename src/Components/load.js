import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoYouOut from './LogoYouOut';

export default function Load({}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoYouOut />
      </View>
      <Text style={styles.text}>Equipe YouOut</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8200A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '70%',
    height: '35%',
    alignSelf: 'center',
  },
  text: {
    color: '#EDE0D6',
    fontSize: 20,
    marginTop: 20,
  },
});
