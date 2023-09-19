import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

import FavoriteIcon from '../CartCommerce/FavoriteIcon';
import consts from '../CartCommerce/consts';
import {AxiosError} from 'axios';
import * as SecureStore from 'expo-secure-store';
import api from '../../apis/backend';

import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Infos({commerce, info, endereco}) {
  const [isFavorite, setIsFavorite] = useState(false); // Inicialize como false se não tiver certeza
  // const route = useRoute();
  // const commerce = route.params.commerce;
  const [data, setData] = useState(null);

  // Use useEffect para definir o estado isFavorite quando commerceTeste muda
  const toggleFavorite = async () => {
    let userToken;
    
    try {
      userToken = await SecureStore.getItemAsync('userToken');

      if (isFavorite) {
        let res = await api.delete(
          `/estabelecimento/places/${commerce.uuid}/favorito`,
          {
            headers: {
              'Authorization': `Bearer ${userToken}` 
            }
          });
        setIsFavorite(false);
      } else {
        let res = await api.post(
          `/estabelecimento/places/${commerce.uuid}/favoritar`, null,
          {
            headers: {
              'Authorization': `Bearer ${userToken}` 
            }
          });
        setIsFavorite(true);
      }
    } catch (err) {
      console.log(err.constructor.name);
      if (err instanceof AxiosError) {
        console.log(err.response.status);
        console.log(err.response.data);
      } else if (err instanceof ReferenceError) {
        console.log(err.message);
      }
    }
  };

  const fetchFavorito = async () => {
    let userToken;
    try {
      userToken = await SecureStore.getItemAsync('userToken');
      let res = await api.get(
        `/estabelecimento/places/${commerce.uuid}/favorito`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      setIsFavorite(res.data.message);
    } catch (err) {
      console.log(err.constructor.name);
      if (err instanceof AxiosError) {
        console.log(err.response.status);
        console.log(err.response.data.message);
      } else if (err instanceof ReferenceError) {
        console.log(err.message);
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
