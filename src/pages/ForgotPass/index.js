import React from "react";
import styles from "./style";
import LogoYO from "../../Components/LogoYouOut";
import {View, Text} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <LogoYO/>
            </View>
            <View style={styles.containerForm}>
             <Text> Esqueceu senha</Text>
            </View>
           
        </View>
    )
}
