
import React from 'react';
import styles from './style';
import LogoYouOut from '../../Components/LogoYouOut';
import {View, Text, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FavoriteCommerce from '../../Components/FavoriteCommerce';


export default function Favorites() {
  return (
    <KeyboardAwareScrollView // Substitua o ScrollView pelo KeyboardAwareScrollView
    contentContainerStyle={styles.container}
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={true}
  >
    <View style={styles.containerLogo}>
      <LogoYouOut />
    </View>
    <View style={styles.containerForm}>
      <View style={styles.containerPlace}>
        <FavoriteCommerce />
      </View>
    </View>
  </KeyboardAwareScrollView>
    // <View style={styles.container}>
    //   <View style={styles.containerLogo}>
    //     <LogoYouOut />
    //   </View>
    //   <View style={styles.containerForm}>
    //     <FavoriteCommerce/>
      
    //   </View>

    // </View>
  );
}
