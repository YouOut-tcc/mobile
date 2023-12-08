import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import noEvent from '../../assets/events.png';

const ModalEvent = ({ isVisible, closeModal, eventos, index }) => {
  const opcoesDeFormato = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const dataInicio = new Date(eventos[index].inicio);
  const dataFim = new Date(eventos[index].fim);

  const dataInicioFormatted = dataInicio.toLocaleDateString('pt-Br', opcoesDeFormato);
  const dataFimFormatted = dataFim.toLocaleDateString('pt-Br', opcoesDeFormato);

  console.log(index);
  console.log(eventos[index]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.background}>
        <TouchableOpacity style={styles.backgroundTouchable} onPress={closeModal} activeOpacity={1}>
          <View style={styles.modal}>
            <View style={styles.head}>
              <Text style={styles.titleEvent}>{eventos[index].nome}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name={'close'} size={30} color="#8200A8" />
              </TouchableOpacity>
            </View>
            <View style={styles.slide}>
            <Image
              source={eventos[index].image?{uri: eventos[index].image}:noEvent}
              style={styles.image}
              />
              </View>
            <Text style={styles.details}>Detalhes</Text>
            <View style={styles.viewInfo}>
              <Icon name={'calendar-check-o'} size={25} color="#8200A8" style={styles.iconInfo} />
              <Text style={styles.info}>{dataInicioFormatted}</Text>
            </View>
            <View style={styles.viewInfo}>
              <Icon name={'clock-o'} size={25} color="#8200A8" style={styles.iconInfo} />
              <Text style={styles.info}>{dataFimFormatted}</Text>
            </View>
            <View style={styles.viewInfo}>
              <Icon name={'money'} size={25} color="#8200A8" style={styles.iconInfo} />
              <Text style={styles.info}>{'R$ '}{eventos[index].valor}</Text>
            </View>
            <View>

            <TouchableOpacity style={styles.buttonR}>
              <Text style={styles.buttonText}>Lembre-me</Text>
            </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundTouchable: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    height: '40%'

  },
  modal: {
    backgroundColor: '#EDE0D6',
    width: '90%',
    maxHeight: '70%',
    borderColor: '#602E9E',
    borderWidth: 2,
    borderRadius: 10,
  },
  head: {
    margin: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  titleEvent: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '80%',
  },
  closeButton: {
    width: '10%',
    alignSelf: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    margin: '5%',
    alignSelf: 'center',
    borderColor: '#FAC8B9',
    borderWidth: 1,
    borderRadius: 10,
  },
  details: {
    fontSize: 20,
    marginLeft: '10%',
  },
  iconInfo: {
    width: '15%',
    textAlign: 'center',
  },
  viewInfo: {
    margin: '2%',
    marginLeft: '12%',
    flexDirection: 'row',
    width: '70%',
  },
  info: {
    alignSelf: 'center',
    color: '#000'
  },
  buttonR: {
    width: '80%',
    height: '25%',
    margin: '5%',
    marginTop: '10%',
    backgroundColor: '#602E9E',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: '#Fff',
    margin: '3%',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});

export default ModalEvent;
