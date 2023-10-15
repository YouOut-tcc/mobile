import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cupom from './CupomDesign';
import ModalCupom from './ModalCupom';

const CardCupom = () => {
  const cupons = [
    {id: 1, title: 'Cupom 1', discount: '30%', off: 'OFF'},
    {id: 2, title: 'Cupom 2', discount: '20%', off: 'OFF'},
    {id: 3, title: 'Cupom 3', discount: '10%', off: 'OFF'},
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCupomIndex, setSelectedCupomIndex] = useState(null);

  const openModal = index => {
    setSelectedCupomIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCupomIndex(null);
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
            <Icon name={'chevron-left'} size={20} color="#FE0472" />
          </Text>
        }
        nextButton={
          <Text style={styles.buttonText}>
            <Icon name={'chevron-right'} size={20} color="#FE0472" />
          </Text>
        }>
        {cupons.map((cupon, index) => (
          <View key={cupon.id} style={styles.slide}>
            <TouchableOpacity
              onPress={() => openModal(index)}
              style={styles.touch}>
              <Cupom
                title={cupon.title}
                discount={cupon.discount}
                off={cupon.off}
              />
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
      <ModalCupom
        isVisible={isModalVisible}
        cuponIndex={selectedCupomIndex}
        closeModal={closeModal}
        cupons={cupons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 250,
    marginBottom: 10,
    width: '100%',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  touch: {
    width: '100%',
  },
});

export default CardCupom;
