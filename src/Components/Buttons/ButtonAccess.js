import React from "react";
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


export default function ButtonAccess(){
    const navigation = useNavigation();
    return(
            <View>
                <TouchableOpacity style={style.buttonAccess}
                onPress={()=> navigation.navigate("CommercePage")}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
buttonAccess:{
    backgroundColor: '#FCA17D',
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: '5%',
    width: 150,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
}
})