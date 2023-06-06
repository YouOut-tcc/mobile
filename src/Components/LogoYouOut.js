import React from "react";
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';



export default function LogoYouOut(){
    return(
     <>                
        <Image source={require('../assets/Logotipo.png')} style={style.image}/>
        <Text style={style.imagetitle}>YouOut</Text>
     </>

    )
}

const style = StyleSheet.create({
    
    image:{
        width: '40%',
        height: '55%',
        marginTop: '20%',  
        borderRadius: 200,
        resizeMode:'contain',
    
    },
    imagetitle:{
        fontSize: 32,
        color: '#4C2C72',
        fontWeight: 'bold',
        marginTop: '38%',
        marginRight: '10%',
    },
    })