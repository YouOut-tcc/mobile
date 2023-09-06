import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FavoriteIcon from '../CartCommerce/FavoriteIcon';
import consts from '../CartCommerce/consts';

export default function Infos() {
  const [isFavorite, setIsFavorite] = useState(false); // Inicialize como false se não tiver certeza
  const route = useRoute();
  const commerceTeste = route.params.commerce;
  const commerce = commerceTeste;

  // Use useEffect para definir o estado isFavorite quando commerceTeste muda
  useEffect(() => {
    if (commerce) {
      setIsFavorite(commerce.favorite);
    }
  }, [commerce]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!commerce) {
    return null;
  }

  return (
    <View>
      <View style={styles.infoCommerce}>
        <Text
          style={[styles.commerceName, { minWidth: '70%' }, { maxWidth: '90%' }]}
          numberOfLines={2}>
          {commerce.name}
        </Text>
        <Text style={styles.commerceAbout}>
          {commerce.tipo}, {commerce.Rua}
        </Text>
      </View>
      <View style={styles.favoriteContainer}>
        <FavoriteIcon toggle={toggleFavorite} favorite={isFavorite} style={styles.commerceContainer} />
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
