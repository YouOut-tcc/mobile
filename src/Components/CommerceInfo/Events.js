import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalEvent from './ModalEvent';
import noEvent from '../../assets/events.png';

const Events = ({eventos}) => {
  // const noEvent = require('../../assets/events.png');
  // const images = [
  //   require('../../assets/events.png'),
  //   require('../../assets/events.png'),
  //   require('../../assets/events.png'),
  // ];

  const [modalIndex, setModalIndex] = useState(null);
  const [indexEvent, setIndexEvent] = useState();
  const [autoPlay, setAutoPlay] = useState(true);

  const openModal = index => {
    setAutoPlay(false);
    setModalIndex(index);
  };

  const closeModal = () => {
    setAutoPlay(true);
    setModalIndex(null);
  };

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.title}>Eventos</Text>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={autoPlay}
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
        }
        onIndexChanged={index => {
          closeModal();
        }}>
        {eventos.length > 0 ? (
          eventos.map((elemet, index) => (
            <View key={index} style={styles.slide}>
              <TouchableOpacity
                onPress={() => {
                  setIndexEvent(index);
                  openModal(index)
                }}
                style={styles.touch}>
                <Image source={elemet.image?{uri: elemet.image}:noEvent} style={styles.image} />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.slide}>
            <TouchableOpacity style={styles.touch}>
              <Image source={noEvent} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      </Swiper>
      {modalIndex !== null && (
        <ModalEvent
          index={indexEvent}
          isVisible={true}
          closeModal={closeModal}
          eventos={eventos}
        />
      )}
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
  touch: {
    width: '100%',
  },
});

export default Events;
