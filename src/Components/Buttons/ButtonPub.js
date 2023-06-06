import React from "react";
import {
    View,
    Text,
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


export default function ButtonPub(){
    const navigation = useNavigation();
    return(
            <View>
                <TouchableOpacity style={style.buttonPub}
                onPress={()=> navigation.navigate("")}>
                    <Text style={style.buttonText}>Estabelecimento</Text>
                </TouchableOpacity>
            </View>
    )
}

const style = StyleSheet.create({
buttonPub:{

    backgroundColor: '#FCA17D',
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: '7%',
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