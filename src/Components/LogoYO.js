import React from "react";
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';



export default function LogoYO(){
    return(
     <>                
        <Image source={require('../assets/Logotipo.png')} style={style.image}/>
        <Text style={style.imagetitle}>YouOut</Text>
     </>

    )
}

const style = StyleSheet.create({
    
    image:{
        width: 80,
        height: 80,
        marginTop: '5%',  
        borderRadius: 200,
        // marginLeft:'5%'   
    },
    imagetitle:{
        height: 80,
        fontSize: 32,
        color: '#4C2C72',
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: '5%',
    },
    })