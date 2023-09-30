import React from "react";
import styles from "./style";
import {View, Text, ScrollView} from 'react-native';
import AvatarUser from "../../Components/Avatar/avatarUser";
import Notificacoes from "../../Components/UserProfile/Notificacoes";
import Cupons from "../../Components/UserProfile/Cupons";
import Checkins from "../../Components/UserProfile/Checkins";

export default function Profile(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrol}>
            <View style={styles.containerLogo}>
               <AvatarUser/>
            </View>
            <View style={styles.containerForm}>
              <Notificacoes/>
              <Cupons/>
              <Checkins/>
            </View>
            </ScrollView>
        </View>
    )
}
