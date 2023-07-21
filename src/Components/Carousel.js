import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Carousel = () => {
  const images = [
    require('../assets/image1.jpg'),
    require('../assets/image2.jpg'),
    require('../assets/image3.jpg'),
    // Adicione outras imagens aqui
  ];

  return (
    <View style={styles.carouselContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={3}
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
    height: 250, // Defina a altura desejada para o carrossel
    marginBottom: 10, // Defina a margem inferior para criar espaço entre o carrossel e o conteúdo abaixo
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
    height: '100%', // Defina a altura desejada para as imagens do carrossel
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
