import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {MaskedTextInput} from 'react-native-mask-text';

import ButtonRegis from '../../Components/Buttons/ButtonA';

import CommercePage from '../../pages/HomePage';
import InputA from '../Inputs/InputA';

export default function InputRegister() {
  const nomeRef = useRef();
  const CPFRef = useRef();
  const dateRef = useRef();
  const emailRef = useRef();
  const celularRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const registerRef = useRef();

  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [Date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);

  const handleConfirmSubmit = () => {
    // navigation.navigate(CommercePage);
    navigation.navigate("HomePage"); 
  };

  const handleConfirmPassword = () => {
    if (password !== passwordConfirm) {
      setPasswordError('As senhas não coincidem!');
    } else {
      setPasswordError('');
    }
  };

  return (
    <View style={style.ContainerLogin}>
      <KeyboardAvoidingView style={style.ContainerLogin} behavior="padding">
        <ScrollView style={style.scrollViewContent}>
          <InputA
            label="Nome Completo"
            value={nome}
            onChange={setNome}
            ref={nomeRef}
            width={120}
            next={CPFRef}
          />

          <InputA
            label="CPF"
            value={CPF}
            onChange={setCPF}
            ref={CPFRef}
            width={120}
            next={dateRef}
            keyboardType="numeric"
            mask={props => <MaskedTextInput {...props} mask="999.999.999-99" />}
          />

          <InputA
            label="Data de nascimento"
            value={Date}
            onChange={setDate}
            ref={dateRef}
            width={120}
            next={emailRef}
            keyboardType="numeric"
            mask={props => <MaskedTextInput {...props} mask="99/99/9999" />}
          />

          <InputA
            label="Email"
            value={email}
            onChange={setEmail}
            ref={emailRef}
            width={38}
            next={celularRef}
          />

          <InputA
            label="Celular"
            value={celular}
            onChange={setCelular}
            ref={celularRef}
            width={120}
            next={passwordRef}
            keyboardType="numeric"
            mask={props => (
              <MaskedTextInput {...props} mask="(99) 99999-9999" />
            )}
          />

          <InputA
            label="Senha"
            value={password}
            onChange={setPassword}
            ref={passwordRef}
            width={40}
            next={confirmRef}
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
            <Text style={style.ErrorMessage}>{passwordError}</Text>
          ) : null}

          <InputA
            label="Confirme a senha"
            value={passwordConfirm}
            onChange={setPasswordConfirm}
            ref={confirmRef}
            width={120}
            next={celularRef}
            secureTextEntry={showPasswordConfirm}
            onSubmit={handleConfirmSubmit}
            right={
              showPasswordConfirm ? (
                <TextInput.Icon
                  icon="eye"
                  color={'#8200A8'}
                  onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
                />
              )
            }
            onBlur={() => {
              if (password) {
                handleConfirmPassword();
              }
            }}
          />

          <ButtonRegis
            ref={registerRef}
            text="Confimar"
            handlePressOut={handleConfirmSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const style = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  ErrorMessage: {
    color: 'red',
    fontSize: 12,
  },
});
