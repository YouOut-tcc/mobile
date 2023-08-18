import React from "react";
import styles from "./style";
import LogoYO from "../../Components/LogoYouOut";
import InputReset from "../../Components/Inputs/InputReset";
import {View, Text} from 'react-native';

export default function ForgotPass(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <LogoYO/>
            </View>
            <View style={styles.containerForm}>
               <Text>Redefinir senha</Text>
            <InputReset/>
            </View>
           
        </View>
    )
}
