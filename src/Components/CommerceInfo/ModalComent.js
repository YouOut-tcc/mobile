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
import {TextInput} from 'react-native-paper';
import StarRating from '../StarRating';

const ModalComent = ({isVisible, closeModal, selectedRating}) => {
  const [comment, setComment] = useState('');
  const maxCharacters = 300;

  const handleCommentChange = text => {
    if (text.length <= maxCharacters) {
      setComment(text);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}>
      <View style={styles.background}>
        <TouchableOpacity
          style={styles.backgroundTouchable}
          onPress={closeModal}
          activeOpacity={1}>
          <View style={styles.modal}>
            <View style={styles.head}>
              <Text style={styles.titleEvent}>Envie uma avaliação</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name={'close'} size={25} color="#8200A8" />
              </TouchableOpacity>
            </View>
            <View style={styles.rating}>
              <StarRating stars={selectedRating} starSize={25} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Digite seu comentário"
              value={comment}
              onChangeText={handleCommentChange}
              multiline={true}
              numberOfLines={5}
              maxLength={300}
            />

            <Text
              style={{
                color: comment.length > maxCharacters ? 'red' : 'black',
                textAlign: 'right',
                margin: '3%',
              }}>
              {comment.length} / {maxCharacters}
            </Text>
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.buttonR}>
                <Text style={styles.buttonText}>Enviar comentário</Text>
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
  modal: {
    backgroundColor: '#EDE0D6',
    width: '90%',
    minHeight: '40%',
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
    marginLeft: '8%',
  },
  buttonR: {
    width: '80%',
    height: '70%',
    margin: '5%',
    backgroundColor: '#602E9E',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    margin: '3%',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  rating: {
    alignItems: 'center',
    marginBottom: '3%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#602E9E',
    margin: '5%',
    padding: 10,
    backgroundColor: '#EDE0D6',
    minHeight: 100,
    maxHeight: 300,
  },
  viewButton: {
    maxHeight: '15%',
  },
});

export default ModalComent;
