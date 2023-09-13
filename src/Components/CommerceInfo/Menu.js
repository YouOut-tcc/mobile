import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalPreviewPDF from './ModalPreviewPDF';

const Menu = () => {
    const images = [
        require('../../assets/menu.png'),
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
      <Text style={styles.title}>Cardápio</Text>
      
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
             <TouchableOpacity onPress={() => openModal(index)} style={styles.touch}>
            <Image source={image} style={styles.image} />
            <ModalPreviewPDF
              isVisible={isModalVisible[index]}
              closeModal={() => closeModal(index)}
            />
            </TouchableOpacity>
          </View>
          
        ))}
    </View>
  );
}

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

  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: '10%',
    color: '#000',
  },
  touch:{
    width: '100%'
  }
});

export default Menu;
