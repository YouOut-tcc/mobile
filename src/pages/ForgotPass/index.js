import React, { useState } from "react";
import { View, Text, Button } from 'react-native';
import LogoYO from "../../Components/LogoYouOut";
import InputReset from "../../Components/Inputs/InputReset";
import styles from "./style";
import ButtonRecPass from "../../Components/Buttons/ButtonRecPass";

export default function ForgotPass() {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    // Adicione aqui a lógica para enviar o e-mail de recuperação de senha
    // Isso pode incluir a geração de um token exclusivo e o envio do e-mail com o link de recuperação de senha
    // Após o envio bem-sucedido, você pode navegar o usuário para a próxima tela
    // Por enquanto, apenas exiba uma mensagem de confirmação
    alert(`Um link de recuperação de senha foi enviado para: ${email}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYO />
      </View>
      <View style={styles.containerForm}>
  <Text style={styles.recTextTitle}>Recuperação de senha</Text>
  <Text style={styles.recText}>
    Qual é o e-mail cadastrado no YouOut?
  </Text>
  <InputReset value={email} onChangeText={setEmail} />
  <ButtonRecPass onPress={handleSendEmail} />
</View>
      </View>
  );
}
