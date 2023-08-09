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

import AvatarCommerce from './Avatar/avatarCommerce';

export default function CommerceInfos() {
  const commerceList = [
    {
      id: 1,
      name: 'Lorem Ipsum 1',
      rating: 4,
      distance: '3km de distância',
      checkins: 2,
    },
    {
      id: 2,
      name: 'Lorem Ipsum 2',
      rating: 5,
      distance: '5km de distância',
      checkins: 5,
    },
    {
      id: 3,
      name: 'Lorem Ipsum 3',
      starRating: 5,
      distance: '5km de distância',
      checkins: 5,
    },
    {
      id: 4,
      name: 'Lorem Ipsum 4',
      rating: 5,
      distance: '5km de distância',
      checkins: 5,
    },
    {
      id: 5,
      name: 'Lorem Ipsum 5',
      rating: 5,
      distance: '5km de distância',
      checkins: 5,
    },
  ];

  const CommerceView = ({commerceId, initialRating}) => {
    const commerce = commerceList.find(item => item.id === commerceId);
    const [rating, setRating] = useState();
    const handleRating = value => {
      setRating(value);
    };

    if (!commerce) {
      <Text>Não encontrado</Text>;
      return null;
    }
    const navigation = useNavigation();

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileCommerce')}
        style={styles.commerce}>
        <View style={styles.viewImg}>
          <AvatarCommerce />
        </View>
        <View style={styles.infoCommerce}>
          <Text style={styles.commerceName}>{commerce.name}</Text>
          <StarRating initialRating={initialRating} onPress={handleRating} />
          <Text style={styles.commerceDistance}>{commerce.distance}</Text>
          <Text style={styles.commerceCheckin}>
            <Icon name={'users'} size={20} color="#FE0472" />{' '}
            {commerce.checkins} check-ins
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const itemHeight = 140;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.commerceContainer}>
          {commerceList.map(commerce => (
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
});