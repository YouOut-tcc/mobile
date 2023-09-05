import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import StarRating from './CommerceInfo/StarRating';
import AvatarCommerce from './Avatar/avatarCommerce';
import Searchbar from '../Components/searchBar';

export default function FavoriteCommerce() {
  const commerceList = [
    {
      id: 1,
      name: 'Lorem Ipsum 1',
      rating: 4,
      distance: '3km de distância',
      checkins: 2,
    },
  ];

  const Favorite = ({commerceId}) => {
    const navigation = useNavigation();

    if (!commerceList.length) {
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
    } else {
      return (
        <View>
          <View style={styles.containerSearch}>
            <Searchbar />
          </View>

          <Text style={styles.heartFavorite}>
            <Icon name={'heart'} size={30} color="#FE0472" />
            {'  '}
            {commerceList.length}
          </Text>

          {commerceList.map(commerce => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileCommerce')}
              style={styles.commerce}>
              <View style={styles.viewImg}>
                <AvatarCommerce />
              </View>
              <View style={styles.infoCommerce}>
                <Text style={styles.commerceName}>{commerce.name}</Text>
                <StarRating stars={commerce.rating} />
                <Text style={styles.commerceDistance}>{commerce.distance}</Text>
                <Text style={styles.commerceCheckin}>
                  <Icon name={'users'} size={20} color="#FE0472" />
                  {'  '}
                  {commerce.checkins} check-ins
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };
  const itemHeight = 146;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
      <View style={styles.commerceContainer}>
        {/* {commerceList.map(commerce => (
            <Favorite
              key={commerce.id}
              commerceId={commerce.id}
              rating={commerce.rating}
            />
          ))} */}
        <Favorite />
      </View>
      {/* </ScrollView> */}
      <View
        style={{
          height:
            Dimensions.get('window').height - commerceList.length * itemHeight,
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  commerceContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },

  scrollViewContent: {
    flexGrow: 1,
  },
  commerce: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 140,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#8200A8',
    backgroundColor: '#EFD9D3',
  },
  commerceName: {
    color: '#000',
    fontSize: 20.6,
    fontWeight: 'bold',
  },
  infoCommerce: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: '2%',
  },
  viewImg: {
    width: '38%',
    height: '90%',
    margin: 8,
  },

  starRating: {
    flexDirection: 'row',
    marginBottom: 5,
    alignSelf: 'center',
  },
  commerceDistance: {
    color: '#333',
    fontSize: 16,
    alignItems: 'center',
    marginTop: '5%',
  },
  commerceCheckin: {
    color: '#333',
    fontSize: 15,
    marginTop: '10%',
  },
  heart: {
    alignSelf: 'center',
    marginTop: '50%',
  },
  heartFavorite: {
    alignSelf: 'center',
    marginTop: '5%',
    fontWeight: 'bold',
    fontSize: 25,
  },
  textFavorite: {
    color: '#333',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '2%',
    fontWeight: 'bold',
  },
  textFavorite2: {
    color: '#333',
    fontSize: 15,
    textAlign: 'center',
    margin: '5%',
  },
  containerSearch: {
    marginBottom: '17%',
    marginTop: '2%',
    alignContent: 'center',
    alignItems: 'center',
  },
});
