import {useState, useEffect} from 'react';
import styles from './style';
import {View, Text, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoYO from '../../Components/LogoYouOut';
import Commerce from '../../Components/CartCommerce';
import SearchbarComponent from '../../Components/searchBar';
import FavoriteHeader from '../../Components/CartCommerce/FavotieHeader';
// import consts from "../../Components/CartCommerce/consts";

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

export default function Favorites() {
  const [commerceLength, setcommerceLength] = useState(1);
  const [data, setData] = useState();
  const consts = [
    {
      id: 1,
      name: 'Lorem Ipsum 1',
      rating: 4,
      distance: '3km de distância',
      checkins: 2,
    },
  ];
  
  useEffect(()=>{
    setData(consts);
    setcommerceLength(consts.length);
  },[commerceLength])

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
            Empty={<Vazio />}
            Header={<FavoriteHeader Length={commerceLength} />}
            Data={data}
          />
        </View>
      </View>
    </View>
  );
}
