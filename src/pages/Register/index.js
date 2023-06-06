import React from "react";
import styles from "./style";
import LogoYO from "../../Components/LogoYO";
import {View, Text, ScrollView, Keyboard  } from 'react-native';
import ButtonGoogle from "../../Components/Buttons/ButtonGoogle";
import InputRegister from "../../Components/Inputs/InputRegister";

export default function Register(){
    return(
        
        <View style={styles.container}>
             <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.containerLogo}>
          <LogoYO />
        </View>
        <InputRegister style={styles.containerRegister} />
        <Text style={styles.or}>━━━━━━━━━━ ou ━━━━━━━━━━</Text>
        <ButtonGoogle style={styles.containerGoogle} />
      </ScrollView>
        </View>
    )
}