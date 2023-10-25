import React from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalSobreNós = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.background}>
        <TouchableOpacity
          style={styles.backgroundTouchable}
          onPress={closeModal}
          activeOpacity={1}
        >
          <View style={styles.modal}>
            <View style={styles.head}>
              <Text style={styles.titleEvent}>Sobre nós</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name={'close'} size={30} color="#8200A8" />
              </TouchableOpacity>
            </View>

<Text></Text>
              <Text style={styles.details}>
                Bem-vindo ao YouOut! Nossa jornada começou com um TCC no curso
                técnico de desenvolvimento de sistemas - Etec Embu,
                desenvolvemos um aplicativo dedicado a simplificar e aprimorar
                sua experiência turística. 
              </Text>
              <Text style={styles.boldText}>Nossa Missão</Text>
              <Text style={styles.details}>
                Nosso objetivo é proporcionar a você uma maneira prática, rápida e confiável de encontrar o lugar perfeito para seus momentos de descontração.
              </Text>
              <Text style={styles.boldText}>O Que Oferecemos</Text>
              <Text style={styles.details}>
                YouOut oferece vários recursos para atender às suas necessidades. Desde a localização de estabelecimentos próximos a você, te mostramos Informações como cardápios, avaliações de outros usuários e descontos exclusivos.
              </Text>
              <Text style={styles.boldText}>Conveniência e Confiança</Text>
              <Text style={styles.details}>
                Sabemos que a vida moderna é agitada, e a comodidade é essencial. 
                </Text>
                <Text style={styles.details}>
                Navegar pelo YouOut é simples e intuitivo, garantindo que você possa encontrar o que precisa de forma eficiente.
              </Text>
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
  modal: {
    backgroundColor: '#EDE0D6',
    width: '90%',
    height: '70%',
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
  boldText: {
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: '5%',
    color: '#000'

  },
  closeButton: {
    width: '10%',
    alignSelf: 'center',
  },
  details: {
    fontSize: 15,
    marginLeft: '5%',
    marginBottom: '2%',
    color: '#000'
  },
});

export default ModalSobreNós;


