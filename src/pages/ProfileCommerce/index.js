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

import consts from '../../Components/CommerceInfo/consts';

export default function ProfileCommerce() {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Carousel />
        <View style={styles.Infos}>
          <Infos  />
        </View>
        
        <ScrollView>
         
            <Menu />
            <Events/>
            <Coments/>
          
        </ScrollView>
      </View>
    </View>
  );
 
}
console.log(consts.commerceList)
