import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalInfosPessoais = ({isVisible, closeModal}) => {
 
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={closeModal}>
    <View style={styles.background}>
    <Text>a</Text>
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
    height: '30%',
    alignItems: 'center',
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
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    color: '#FE0472',
    textAlign: 'center',
  },
  closeButton: {
    width: '10%',
    alignSelf: 'center',
  },
  details: {
    fontSize: 15,
    marginLeft: '5%',
    marginBottom: '2%',
    fontWeight: 'bold',
  },
  detailsValid: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:'2%', 
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
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default ModalInfosPessoais;
