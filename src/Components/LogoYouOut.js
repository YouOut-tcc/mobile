import React from "react";
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';




export default function LogoYouOut(){
    return(
     <>                
        <Image source={require('../assets/logotipo.jpg')} style={style.image}/>
     </>

    )
}

const style = StyleSheet.create({
    
    image:{
        width: '100%',
        maxHeight: '100%', 
        borderRadius: 300,
        marginBottom: 20,
        resizeMode:'contain',
    
    },
    
   
    })