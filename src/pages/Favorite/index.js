
import React from 'react';
import styles from './style';
import LogoYouOut from '../../Components/LogoYouOut';
import {View, Text, ScrollView} from 'react-native';



export default function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYouOut />
      </View>
      <View style={styles.containerForm}>
       Tela favoritos

       
      </View>
      <BottomNavigation/>
    </View>
  );
}
