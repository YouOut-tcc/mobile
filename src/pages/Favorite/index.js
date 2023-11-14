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
import {useIsFocused} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

import {getAllFav} from '../../services/commerce';

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

export default function Favorites({navigation}) {
  const [commerceLength, setcommerceLength] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [focusbool, setFocusBool] = useState(true);

  const isFocused = useIsFocused();

  const fetchData = async () => {
    setIsLoading(true);
    console.log('teste');
    try {
      let favs = await getAllFav();
      console.log(favs);
      // setData(data.concat(favs));
      setData(favs);
      setcommerceLength(favs.length);
    } catch (error) {
      console.log(error.constructor.name);
      if (error instanceof AxiosError) {
        console.log(error.response.status);
        console.log(error.response.data.message);
      } else if (error instanceof ReferenceError) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
      console.log(isLoading);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (focusbool) {
        console.log('fucus');
        fetchData();
        console.log(data);
        setFocusBool(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYO />
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerPlace}>
          <Commerce
            fetchData={fetchData}
            Empty={<Vazio />}
            isLoading={isLoading}
            Header={<FavoriteHeader Length={commerceLength} />}
            Data={data}
          />
        </View>
      </View>
    </View>
  );
}
