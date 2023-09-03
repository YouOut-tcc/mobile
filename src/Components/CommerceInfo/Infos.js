import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FavoriteIcon from './FavoriteIcon';
import consts from './consts';

export default function Infos() {
  const route = useRoute();
  const commerceTeste = route.params.commerceId; 

  const commerce = consts.commerceList.find(item => item.id === commerceTeste);
  

  if (!commerce) {
  
    return null;
  }

  return (
    <View>
      <View style={styles.infoCommerce}>
      <Text
            style={[styles.commerceName, {minWidth: '70%'}, {maxWidth: '90%'}]}
            numberOfLines={2}>
            {commerce.name}
          </Text>
        <Text style={styles.commerceAbout}>
          {commerce.tipo}, {commerce.Rua}
        </Text>
      </View>
      <View style={styles.favoriteContainer}>
        <FavoriteIcon
         favorite={commerce.favorite}
         style={styles.commerceContainer} />
      </View>
    </View>
  );
  
}



const styles = StyleSheet.create({
  infoCommerce: {
    marginTop: '1%',
    marginLeft: '4%',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  commerceName: {
    color: '#000',
    fontSize: 20.6,
    fontWeight: 'bold',
  },
  commerceAbout: {
    color: '#333',
    fontSize: 16,
  },
  favoriteContainer: {
    alignItems: 'flex-end',
    right: 5,
    top: 0,
    position: 'absolute',
    zIndex: 1,
  },
});
