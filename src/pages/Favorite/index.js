import {useState, useEffect} from 'react';
import styles from './style';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoYO from '../../Components/LogoYouOut';
import Commerce from '../../Components/CartCommerce';
import SearchbarComponent from '../../Components/searchBar';
import FavoriteHeader from '../../Components/CartCommerce/FavotieHeader';
// import consts from "../../Components/CartCommerce/consts";
import * as SecureStore from 'expo-secure-store';
import { AxiosError } from 'axios';

import api from '../../apis/backend';
import { useIsFocused } from "@react-navigation/native";

import { useFocusEffect } from '@react-navigation/native';


function Vazio() {
  return (
    <View>
      <Icon name={'heart'} size={30} color="#FE0472" style={styles.heart} />
      <Text style={styles.textFavorite}>{'Não há favoritos'}</Text>
      <Text
        style={
          styles.textFavorite2
        }>{`toque em ❤️ para salvar aqui seus estabelecimentos favoritos.`}</Text>
    </View>
  );
}

export default function Favorites({ navigation }) {
  const [commerceLength, setcommerceLength] = useState(1);
  const [data, setData] = useState([]);
  const [focusbool, setFocusBool] = useState(true);

  const isFocused = useIsFocused();


  const consts = [
    {
      id: 1,
      name: 'Lorem Ipsum 1',
      rating: 4,
      distance: '3km de distância',
      checkins: 2,
    },
  ];
  
  const fetchData = async () => {
    let userToken;
    try {
      userToken = await SecureStore.getItemAsync('userToken');
      let res = await api.get(`/usuario/favoritos`, {
        headers: {
          'Authorization': `Bearer ${userToken}` 
        }
      });

      const newData = res.data;
      console.log(newData);
      setData(data.concat(newData));

      setcommerceLength(newData.length);


    } catch (err) {
      console.log(err.constructor.name)
      if (err instanceof AxiosError){
          
        console.log(err.response.status)
        console.log(err.response.data.message)
      } else if (err instanceof ReferenceError){
        console.log(err.message)
      }
    }
  }

  

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      if(focusbool){
        console.log("fucus")
        fetchData();
        console.log(data)
        setFocusBool(false)
      }
    });

  },[])

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYO />
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerSearch}>
          <SearchbarComponent />
        </View>
        <View style={styles.containerPlace}>
          <Commerce
            // fetchData={fetchData}
            Empty={<Vazio />}
            Header={<FavoriteHeader Length={commerceLength} />}
            Data={data}
          />
        </View>
      </View>
    </View>
  );
}
