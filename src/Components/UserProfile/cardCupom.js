import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function cardCupom() {
  const images = [
    require('../../assets/cupom.png'),
    require('../../assets/cupom.png'),
    require('../../assets/cupom.png'),
  ];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={false}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    height: '25%',
  },
  image: {
    borderRadius: 25,
    width: '95%',
    height: '90%',
    resizeMode: 'cover',
  },
});
