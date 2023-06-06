import React from "react";
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


export default function ButtonUser(){
    const navigation = useNavigation();
    return(
            <View>
                <TouchableOpacity style={style.buttonUser}
                onPress={()=> navigation.navigate("SignInUser")}>
                    <Text style={style.buttonText}>Usuário</Text>
                </TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
buttonUser:{
    backgroundColor: '#FCA17D',
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: '15%',
    width: 250,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
}
})