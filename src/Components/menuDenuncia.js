import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const MenuDenuncia = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => {setVisible(true) 
    console.log("abriu")};

  const closeMenu = () => {setVisible(false)};

  return (
      <View style={style.denuncia}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}> <Icon name="ellipsis-v" size={16} color="#FE0472" /> </Button>}>
          <Menu.Item onPress={() => {}} title="Denunciar" />
        </Menu>
      </View>
  );
};
export default MenuDenuncia;

const style = StyleSheet.create({
  denuncia: {
    zIndex: 1, 

  },
})
