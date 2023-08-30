
import React from "react";
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


export default function ButtonForgotPass(){
    const navigation = useNavigation();
    return(
            <View>
                <TouchableOpacity style={style.buttonForgotPass}
                onPress={()=> navigation.navigate("ForgotPass")}>
                    <Text style={style.buttonText}>Esqueceu a senha?</Text>
                
                </TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
buttonForgotPass:{
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: '2%',
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