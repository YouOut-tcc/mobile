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

import ButtonRegis from '../../Components/Buttons/ButtonRegis';

import CommercePage from '../../pages/HomePage';
import InputA from './InputA';

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

  const handleNomeSubmit = () => {
    CPFRef.current.focus();
  };

  const handleCPFSubmit = () => {
    dateRef.current.focus();
  };

  const handleDateSubmit = () => {
    emailRef.current.focus();
  };

  const handleCelularSubmit = () => {
    passwordRef.current.focus();
  };

  const handlePasswordSubmit = () => {
    confirmRef.current.focus();
  };

  const handleConfirmSubmit = () => {
    navigation.navigate(CommercePage);
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={style.InputTextName}>Nome Completo</Text>
          <TextInput
            mode="outlined"
            ref={nomeRef}
            onSubmitEditing={handleNomeSubmit}
            style={style.Input}
            value={nome}
            onChangeText={text => setNome(text)}
          />
          <Text style={style.InputTextCPF}>CPF</Text>
          <TextInput
            render={props => (
              <MaskedTextInput {...props} mask="999.999.999-99" />
            )}
            mode="outlined"
            ref={CPFRef}
            onSubmitEditing={handleCPFSubmit}
            style={style.Input}
            keyboardType="numeric"
            value={CPF}
            onChangeText={text => setCPF(text)}
          />

          <Text style={style.InputTextDt}>Data de nascimento</Text>
          <TextInput
            render={props => <MaskedTextInput {...props} mask="99/99/9999" />}
            mode="outlined"
            ref={dateRef}
            onSubmitEditing={handleDateSubmit}
            style={style.Input}
            keyboardType="numeric"
            value={Date}
            onChangeText={text => setDate(text)}
          />

          <InputA
            label="Email"
            value={email}
            onChange={setEmail}
            ref={emailRef}
            width={38}
            // posso passar uma ref no next, mas não de forma normal para o ref
            next={celularRef}
          />

          <Text style={style.InputTextCel}>Celular</Text>
          <TextInput
            render={props => (
              <MaskedTextInput {...props} mask="(99) 99999-9999" />
            )}
            mode="outlined"
            ref={celularRef}
            onSubmitEditing={handleCelularSubmit}
            style={style.Input}
            keyboardType="numeric"
            value={celular}
            onChangeText={text => setCelular(text)}
          />

          <Text style={style.InputTextPass}>Senha</Text>
          <TextInput
            mode="outlined"
            ref={passwordRef}
            onSubmitEditing={handlePasswordSubmit}
            style={style.Input}
            value={password}
            onChangeText={text => setPassword(text)}
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

          <Text style={style.InputTextConfirm}>Confirme a senha</Text>
          <TextInput
            mode="outlined"
            ref={confirmRef}
            onSubmitEditing={handleConfirmSubmit}
            style={style.Input}
            value={passwordConfirm}
            onChangeText={text => setPasswordConfirm(text)}
            onBlur={() => {
              if (password) {
                handleConfirmPassword();
              }
            }}
            secureTextEntry={showPasswordConfirm}
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
          />

          {/* <ButtonRegis ref={registerRef} /> */}
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
  Input: {
    width: 320,
    height: 50,
    borderRadius: 20,
    marginTop: -16,
    backgroundColor: '#EDE0D6',
  },

  InputTextName: {
    marginLeft: 20,
    marginTop: '2%',
    width: 120,
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
  },

  InputTextCPF: {
    marginLeft: 20,
    marginTop: '2%',
    width: 50,
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
  },

  InputTextDt: {
    marginLeft: 20,
    marginTop: '2%',
    width: 150,
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
    textAlign: 'center',
  },

  InputTextEmail: {
    marginLeft: 20,
    marginTop: '2%',
    width: 60,
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
    textAlign: 'center',
  },

  InputTextCel: {
    marginLeft: 20,
    marginTop: '2%',
    width: 50,
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
  },

  InputTextPass: {
    marginLeft: 20,
    marginTop: '2%',
    width: 50,
    color: '#000',
    backgroundColor: '#EDE0D6',
    zIndex: 1,
    textAlign: 'center',
    top: -2,
  },
  InputTextConfirm: {
    marginLeft: 20,
    marginTop: '2%',
    width: 120,
    color: '#000',
    backgroundColor: '#EDE0D6',
    textAlign: 'center',
    zIndex: 1,
  },
  ErrorMessage: {
    color: 'red',
    fontSize: 12,
  },
});
