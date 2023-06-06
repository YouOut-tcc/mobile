import React from "react";
import styles from "./styles";
import LogoYO from "../../Components/LogoYO";
import ButtonAccess from "../../Components/Buttons/ButtonAccess";
import ButtonRegister from "../../Components/Buttons/ButtonRegister";
import ButtonForgotPass from "../../Components/Buttons/ButtonForgotPass";
import ButtonGoogle from "../../Components/Buttons/ButtonGoogle";
import InputLogin from "../../Components/Inputs/InputLogin";
import {View, Text} from 'react-native';

export default function SignIn(){
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            <LogoYO/>
            </View>
            <Text style={styles.message}>Login</Text>
            <Text style={styles.text}>Faça login para continuar</Text>
           
            <InputLogin/>
            
            <ButtonAccess/>
            <ButtonForgotPass/>
            <Text style={styles.title}>━━━━━━━━━━ ou ━━━━━━━━━━</Text>
            <ButtonGoogle/>

            <ButtonRegister/>



        </View>
    )
}