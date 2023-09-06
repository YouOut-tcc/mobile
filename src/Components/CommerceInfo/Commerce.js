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
import StarRating from './StarRating';

import {useNavigation} from '@react-navigation/native';

import AvatarCommerce from '../Avatar/avatarCommerce';
import consts from './consts';

export default function CommerceInfos() {
 

  const CommerceView = ({commerceId}) => {
    const commerce = consts.commerceList.find(item => item.id === commerceId);

    if (!commerce) {
      return (
        <Text>Não encontrado</Text>
      );
    }
    
    const navigation = useNavigation();

    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('ProfileCommerce', { commerce: commerce })}
      style={styles.commerce}
    >
        <View style={styles.viewImg}>
          <AvatarCommerce />
        </View>
        <View style={styles.infoCommerce}>
          <Text
            style={[styles.commerceName, {minWidth: '70%'}, {maxWidth: '75%'}]}
            numberOfLines={1}>
            {commerce.name}
          </Text>
          <View style={styles.starRating}>
            <StarRating
              stars={commerce.rating}
              style={styles.commerceContainer}
            />
          </View>
          <Text style={styles.commerceDistance}>{commerce.distance}</Text>
          <Text style={styles.commerceCheckin}>
            <Icon name={'users'} size={20} color="#FE0472" />{' '}
            {commerce.checkins} check-ins
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const itemHeight = 146;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.commerceContainer}>
          {consts.commerceList.map(commerce => (
            <CommerceView
              key={commerce.id}
              commerceId={commerce.id}
              rating={commerce.rating}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          height:
            Dimensions.get('window').height - consts.commerceList.length * itemHeight,
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
  starRating: {
    marginLeft: '10%',
  },

  scrollViewContent: {
    flexGrow: 1,
  },
  commerce: {
    flexDirection: 'row',
    textAlign: 'center',
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
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: '2%',
  },
  viewImg: {
    width: '38%',
    height: '90%',
    margin: 8,
  },
  commerceDistance: {
    color: '#333',
    fontSize: 16,
    alignItems: 'center',
    marginLeft: '5%',
  },
  commerceCheckin: {
    color: '#333',
    fontSize: 15,
    marginTop: '5%',
    marginLeft: '10%',
  },
});
