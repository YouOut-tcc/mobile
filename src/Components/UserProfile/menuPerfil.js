import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import ModalInfosPessoais from './ModalInfosPessoais';



const MenuPerfil = () => {
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();

  const openMenu = () => {setVisible(true) 
    console.log("abriu")};

  const closeMenu = () => {setVisible(false)};

  const [isModalVisible, setModalVisible] = useState(false);
  const OpenInfos = () => {
    setModalVisible(true);
  };
  

  return (
      <View style={style.denuncia}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}> <Icon name={'cog'} size={20} color="#EDE0D6" /> </Button>}>
          <Menu.Item onPress={() => OpenInfos()} title="Informações pessoais"/>
          <Menu.Item onPress={() => {}} title="Sobre nós"/>
          <Menu.Item onPress={() => {}} title="Sair"/>
        </Menu>
      </View>
  );
};
export default MenuPerfil;

const style = StyleSheet.create({
  denuncia: {
    zIndex: 1, 

  },
})
