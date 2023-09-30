import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, PaperProvider ,Provider } from 'react-native-paper';
import styles from '../pages/Favorite/style';

const MenuDenuncia = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => {setVisible(true) 
    console.log("abriu")};

  const closeMenu = () => {setVisible(false)};

  return (
    <Provider>
      <View style={style.denuncia}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>:</Button>}>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};
export default MenuDenuncia;

const style = StyleSheet.create({
  denuncia: {
    width: 60,
    height: 100,
    // zIndex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
})
