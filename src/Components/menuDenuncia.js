import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const MenuDenuncia = ({ onDenunciar }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => {setVisible(true) 
    console.log("abriu")};

  const closeMenu = () => {setVisible(false)};

  const handleDenunciar = () => {
    closeMenu(); 
    onDenunciar(); 
  };
  return (
      <View style={style.denuncia}>
        <Menu
        visible={visible}
        
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu}>
            <Icon name="ellipsis-v" size={16} color="#FE0472" />
          </Button>
        }>
        <Menu.Item onPress={handleDenunciar} title="Denunciar" />
      </Menu>
      </View>
  );
};
export default MenuDenuncia;

const style = StyleSheet.create({
  denuncia: {
    position: 'absolute',
    bottom: 0,
    right: 0, 
    marginTop: 90,
    alignItems: 'flex-end',
    zIndex: 1,
    // marginTop: '10%'
  },
 
})
