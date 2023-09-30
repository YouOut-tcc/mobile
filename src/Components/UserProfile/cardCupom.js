import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';


const cupom = () => {
  const images = [
    require('../../assets/cupom.png'),
    require('../../assets/cupom.png'),
    require('../../assets/cupom.png'),
  ];
  const [isModalVisible, setModalVisible] = useState(images.map(() => false));

  const openModal = (index) => {
    const newModalVisible = [...isModalVisible];
    newModalVisible[index] = true;
    setModalVisible(newModalVisible);
  };

  const closeModal = (index) => {
    const newModalVisible = [...isModalVisible];
    newModalVisible[index] = false;
    setModalVisible(newModalVisible);
  };

  return (
    <View style={styles.carouselContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={7}
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
        }
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
             <TouchableOpacity onPress={() => openModal(index)} style={styles.touch}>
            <Image source={image} style={styles.image} />
        
            </TouchableOpacity>
          </View>
          
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 250,
    marginBottom: 10,
    width: '100%'
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: 150,
    alignSelf: 'center',
    borderColor: '#FAC8B9',
    borderWidth: 1,
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  touch:{
    width: '100%'
  }
});

export default cupom;
