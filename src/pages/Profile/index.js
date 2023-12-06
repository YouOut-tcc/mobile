import React from "react";
import styles from "./style";
import {View, Text, ScrollView} from 'react-native';
import AvatarUser from "../../Components/Avatar/avatarUser";
import Notificacoes from "../../Components/UserProfile/Notificacoes";
import Cupons from "../../Components/UserProfile/Cupons";
import Checkins from "../../Components/UserProfile/Checkins";
import { getInformacoesUsuario } from "../../services/user";
import { useEffect, useState } from "react";

export default function Profile(){
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await getInformacoesUsuario();
                console.log('Dados do usuário recebidos:', data);
                setUserData(data);
            } catch (error) {
                console.error('Erro ao obter informações do usuário:', error);
            }
        };

        fetchUserInfo();
    }, []);
    
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrol}>
            <View style={styles.containerLogo}>
            {userData && <AvatarUser id={userData.id} />}
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
