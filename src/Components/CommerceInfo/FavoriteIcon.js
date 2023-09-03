import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native'; // Importe useRoute

const FavoriteIcon = ({ favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const route = useRoute(); // Use useRoute para acessar route.params
  const commerceTeste = route.params.commerceId; // Use commerceTeste ou route.params.commerceId, dependendo do que deseja

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleFavorite}>
        <Icon
          name={isFavorite ? 'heart' : 'heart-o'}
          size={30}
          color={isFavorite ? '#FE0472' : '#FE0472'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteIcon;
