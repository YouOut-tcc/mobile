import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import ButtonLogin from '../../Components/Buttons/ButtonA';
import InputA from '../Inputs/InputA';
import ButtonGoogle from '../../Components/Buttons/ButtonGoogle';
import ButtonForgotPass from '../../Components/Buttons/ButtonForgotPass';

export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const navigation = useNavigation();

  const handlePressOut = () => {
    navigation.navigate("HomePage"); 
  };

  return (
    <View style={style.containerForm}>
      <View>
      <InputA
        label="E-mail"
        value={email}
        onChange={setEmail}
        // ref={nomeRef}
        width={44}
        // next={CPFRef}
        right={<TextInput.Icon icon="account-circle" color={'#8200A8'} />}
      />

      <InputA
        label="Senha"
        value={password}
        onChange={setPassword}
        // ref={nomeRef}
        width={46}
        // next={CPFRef}
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
              color={'#8200A8'}
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
      />
      </View>
      <ButtonLogin
        text="Entrar"
        handlePressOut={handlePressOut}
      />
      <ButtonForgotPass />
      <Text style={style.or}>━━━━━━━━━━ ou ━━━━━━━━━━</Text>
      <ButtonGoogle />
    </View>
  );
}

const style = StyleSheet.create({
  containerForm:{
    flex: 1,
    backgroundColor: '#EDE0D6', 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
},

  or:{
    alignContent: 'center',
},

});
