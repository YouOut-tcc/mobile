import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import { useNavigation, useContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import AuthContext from '../../context/authContext';
import ModalInfosPessoais from './ModalInfosPessoais';
import ModalSobreNós from './ModalSobreNós';

const MenuPerfil = () => {
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();
  const {signOut} = React.useContext(AuthContext);

  const openMenu = () => {
    setVisible(true);
    console.log("abriu");
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleSobre, setModalVisibleSobre] = useState(false);

  const OpenInfos = () => {
    setModalVisible(true);
  };

  const OpenSobreNós = () => {
    setModalVisibleSobre(true);
  };

  return (
    <View style={style.denuncia}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}> <Icon name={'cog'} size={20} color="#EDE0D6" /> </Button>}>
        <Menu.Item onPress={() => OpenInfos()} title="Informações pessoais" />
        <Menu.Item onPress={() => OpenSobreNós()} title="Sobre nós" />
        <Menu.Item onPress={signOut} title="Sair" />
      </Menu>

      {isModalVisible && <ModalInfosPessoais isVisible={isModalVisible} closeModal={() => setModalVisible(false)} />}
      {isModalVisibleSobre && <ModalSobreNós isVisible={isModalVisibleSobre} closeModal={() => setModalVisibleSobre(false)} />}
    </View>
  );
};
export default MenuPerfil;

const style = StyleSheet.create({
  denuncia: {
    zIndex: 1,
  },
});
