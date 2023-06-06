import React from "react";
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


export default function ButtonRegister(){
    const navigation = useNavigation();
    return(
            <View>
                <TouchableOpacity style={style.buttonRegister}
                onPress={()=> navigation.navigate("Register")}>
                    <Text style={style.buttonText}>Ainda não possui conta?</Text>
                    <Text style={style.buttonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
buttonRegister:{
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: '15%',
    width: 250,
    height: 80,
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