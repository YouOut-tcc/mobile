import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalPreviewPDF = ({ isVisible, closeModal }) => {
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
              <Text style={styles.titleEvent}>Cardápio</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name={'close'} size={30} color="#8200A8" />
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

export default ModalPreviewPDF;
