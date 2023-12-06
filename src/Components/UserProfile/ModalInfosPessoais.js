import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputA from '../Inputs/InputA';

const ModalInfosPessoais = ({ isVisible, closeModal }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const handleConfirmPassword = () => {
    if (password !== passwordConfirm) {
      setPasswordError('As senhas não coincidem!');
    } else {
      setPasswordError('');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.background}
      >
        <TouchableOpacity
          style={styles.backgroundTouchable}
          onPress={closeModal}
          activeOpacity={1}
        >
          <View style={styles.modal}>
            <View style={styles.head}>
              <Text style={styles.title}>Informações pessoais</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name={'close'} size={30} color="#8200A8" />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <InputA label="Nome Completo" width={104} />

              <InputA label="Email" width={38} />

              <InputA
                label="Celular"
                width={80}
                keyboardType="numeric"
                mask={props => (
                  <MaskedTextInput {...props} mask="(99) 99999-9999" />
                )}
              />

              <InputA
                label="Senha"
                width={40}
                secureTextEntry={showPassword}
                right={
                  showPassword ? (
                    <TextInput.Icon
                      icon="eye"
                      color={'#8200A8'}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <TextInput.Icon
                      icon="eye-off"
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  )
                }
              />

              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}

              <InputA
                label="Confirme a senha"
                width={114}
                right={
                  showPasswordConfirm ? (
                    <TextInput.Icon
                      icon="eye"
                      color={'#8200A8'}
                      onPress={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    />
                  ) : (
                    <TextInput.Icon
                      icon="eye-off"
                      onPress={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    />
                  )
                }
                onBlur={() => {
                  if (password) {
                    handleConfirmPassword();
                  }
                }}
              />
            </View>
            
            <View>
              <TouchableOpacity style={styles.buttonR}>
                <Text style={styles.buttonText}>Alterar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    borderColor: '#602E9E',
    borderWidth: 2,
    borderRadius: 10,
    maxHeight: 550,
    
  },
  head: {
    margin: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
    
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%',
    marginBottom: '5%',
    // borderColor: 'red', borderWidth: 1
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },
  input: {
    alignSelf: 'center', 
    width: '90%',
    
  },
  closeButton: {
    width: '10%',
    alignSelf: 'center',
  },
});

export default ModalInfosPessoais;
