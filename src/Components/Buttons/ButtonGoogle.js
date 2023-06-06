import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image, 
    StyleSheet,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


export default function ButtonGoogle(){
    const navigation = useNavigation();
    return(
            <View>
           <TouchableOpacity style={style.buttonGoogle}
                onPress={()=> navigation.navigate("SignInGoogle")}>
                     <Image source={require('../../assets/logoGoogle.png')} style={style.image}/>
                    <Text style={style.buttonText}>Faça login com o google</Text>
                </TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
image:{
    width:25,
    height:26,
    alignSelf: 'center',
    marginTop: '15%',
    margin: '2%'
},
buttonGoogle:{
    borderRadius: 50,
    paddingVertical: 8,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 10,
}
})