import React from 'react';
import styles from './style';
import { useRoute } from '@react-navigation/native';
// import LogoYO from '../../Components/Avatar/LogoYouOut';
import {View, Text, ScrollView} from 'react-native';
import Carousel from '../../Components/CommerceInfo/Carousel';
import Infos from '../../Components/CommerceInfo/Infos';
import Menu from '../../Components/CommerceInfo/Menu';
import Events from '../../Components/CommerceInfo/Events';
import Coments from '../../Components/CommerceInfo/Coments';

import consts from '../../Components/CartCommerce/consts';

import CommerceInfo from '../../Components/CommerceInfo';

export default function ProfileCommerce() {
  // para facilidar a vida, pode ser que usar Context seja uma boa
  return (
    <View style={styles.container}>
      <CommerceInfo/>
    </View>
  );
 
}

