import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

import FavoriteIcon from '../CartCommerce/FavoriteIcon';
import consts from '../CartCommerce/consts';
import { deleteFav, setFav, getFav } from '../../services/commerce';

// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Infos({commerce, info, endereco}) {
  const [isFavorite, setIsFavorite] = useState(false); // Inicialize como false se não tiver certeza
  // const route = useRoute();
  // const commerce = route.params.commerce;
  const [data, setData] = useState(null);

  // Use useEffect para definir o estado isFavorite quando commerceTeste muda
  const toggleFavorite = async () => {
    console.log(dataList)
    try {
      if (isFavorite) {
        deleteFav(commerce.uuid)
        setIsFavorite(false);
      } else {
        setFav(commerce.uuid)
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    }
  };

  const fetchFavorito = async () => {
    try {
      let fav = await getFav(commerce.uuid)
      setIsFavorite(fav);
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    if (commerce) {
      // fetchData();
      fetchFavorito();
      console.log("1")
      // setIsFavorite(commerce.favorite);
    }
  }, [commerce, info]);

  if (!commerce) {
    return null;
  }

  return (
    <View>
      <View style={styles.infoCommerce}>
        <Text
          style={[styles.commerceName, {minWidth: '70%'}, {maxWidth: '90%'}]}
          numberOfLines={2}>
          {commerce.nome}
        </Text>
        {endereco && (
          <Text style={styles.commerceAbout}>
            {/* {commerce.tipo}, {commerce.Rua} */}
            {endereco.logradouro} - {info.numero}, {endereco.bairro},{' '}
            {endereco.localidade}
          </Text>
        )}
      </View>
      <View style={styles.favoriteContainer}>
        <FavoriteIcon
          toggle={toggleFavorite}
          favorite={isFavorite}
          style={styles.commerceContainer}
        />
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
