import React from "react";
import styles from "./style";
import LogoYO from "../../Components/LogoYO";
import {View, Text} from 'react-native';

export default function ForgotPass(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            <LogoYO/>
            </View>
            <Text>
                Página Esqueceu senha
            </Text>
        </View>
    )
}