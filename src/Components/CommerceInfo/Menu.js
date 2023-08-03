import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';



const Menu = () => (
    <>
    <Text style={styles.title}> Cardápio </Text>
    <TouchableOpacity>
    <Image source={require('../../assets/menu.png')} style={styles.image}/>
    </TouchableOpacity>
    </>
);
const styles = StyleSheet.create({
    title:{
        alignSelf: 'center',
        fontSize: 20,
        marginTop: '10%',
        color: '#000',
    },
   image:{
        width: '60%',
        height: 150,
        alignSelf: 'center',
        marginTop: '2%',
        borderColor: '#FAC8B9',
        borderWidth: 1,
   }
  });
  
export default Menu;