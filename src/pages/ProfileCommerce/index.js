import React from 'react';
import styles from './style';
import { useRoute } from '@react-navigation/native';

import {View, Text, ScrollView} from 'react-native';

import CommerceInfo from '../../Components/CommerceInfo';

export default function ProfileCommerce() {
  // para facilidar a vida, pode ser que usar Context seja uma boa
  return (
    <View style={styles.container}>
      <CommerceInfo/>
    </View>
  );
 
}

