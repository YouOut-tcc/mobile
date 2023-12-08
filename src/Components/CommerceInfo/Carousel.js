import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavoriteIcon from '../CartCommerce/FavoriteIcon';
import noImage from '../../assets/image1.jpg';

const Carousel = ({images}) => {
  console.log(images);

  return (
    <View style={styles.carouselContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={false}
        buttonWrapperStyle={styles.buttonWrapper}
        prevButton={
          <Text style={styles.buttonText}>
            {' '}
            <Icon name={'chevron-left'} size={20} color="#FE0472" />
          </Text>
        }
        nextButton={
          <Text style={styles.buttonText}>
            <Icon name={'chevron-right'} size={20} color="#FE0472" />
          </Text>
        }>
        {images.map((image, index) => {
          let loadImage;
          if(typeof image == "string"){
            loadImage = {uri: image};
          }
          return (
            <View key={index} style={styles.slide}>
              <Image source={loadImage? loadImage:image} style={styles.image} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 250,
    marginBottom: 10,
    position: 'relative',
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
