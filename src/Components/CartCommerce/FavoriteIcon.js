import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native'; // Importe useRoute

const FavoriteIcon = ({ favorite, toggle }) => {
  const route = useRoute(); // Use useRoute para acessar route.params
  // const commerceTeste = route.params.commerceId; // Use commerceTeste ou route.params.commerceId, dependendo do que deseja
  // setIsFavorite(favorite);
  // console.log(isFavorite);
  // const toggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggle}>
        <Icon
          name={favorite ? 'heart' : 'heart-o'}
          size={30}
          color={favorite ? '#FE0472' : '#FE0472'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteIcon;
