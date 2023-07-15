import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const handlePress = () => {};

export default function CommerceInfos() {
  const [rating, setRating] = useState(0);

  const handleRating = value => {
    setRating(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Icon
            name={i <= rating ? 'star' : 'star-o'}
            size={16}
            color="#FE0472"
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <>
      <View onPress={handlePress} style={styles.commerce}>
        <View style={styles.viewImg}>
          <Image
            source={require('../assets/commerceLogo.png')}
            style={styles.image}
          />
          <View style={styles.infoCommerce}>
            <Text style={styles.commerceName}>Lorem Ipsum</Text>
            <View style={styles.starRating}>{renderStars()}</View>
            <Text style={styles.commerceDistance}>3km de distância</Text>
            <Text style={styles.commerceCheckin}>
              <Icon name={'users'} size={18} color="#FE0472" /> 2 check-ins?
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 40,
  },
  commerce: {
    width: '85%',
    height: '20%',
    marginTop: '5%',

    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#8200A8',
    backgroundColor: '#EFD9D3',
    position: 'absolute',
  },
  commerceName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    padding: '5%',
  },
  infoCommerce: {
    alignItems: 'center',
    marginLeft: '38%',
    position: 'absolute',
  },
  viewImg: {
    width: '100%',
    height: '100%',
    margin: '1%',
  },
  image: {
    width: '35%',
    height: '85%',
    borderRadius: 300,
    resizeMode: 'contain',
    position: 'absolute',
    margin: '1%',
  },
  commerceCheckin: {
    margin: '3%',
  },
});
