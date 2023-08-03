import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Carousel = () => {
  const images = [
    require('../../assets/image1.jpg'),
    require('../../assets/image2.jpg'),
    require('../../assets/image3.jpg'),
  ];

  return (
    <View style={styles.carouselContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={false}
        buttonWrapperStyle={styles.buttonWrapper}
        prevButton={<Text style={styles.buttonText}> <Icon name={'chevron-left'} size={20} color="#FE0472" /></Text>}
        nextButton={<Text style={styles.buttonText}><Icon name={'chevron-right'} size={20} color="#FE0472" /></Text>}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 250,
    marginBottom: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    height: '100%', 
    resizeMode: 'cover',
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0, 
    right: 0,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Carousel;
