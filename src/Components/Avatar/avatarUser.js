import React, { useState, useEffect } from 'react';
import {Avatar} from 'react-native-paper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuPerfil from '../UserProfile/menuPerfil';
import { getInformacoesUsuario } from '../../services/user';
const AvatarUser = ({ id }) => {

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getInformacoesUsuario(id);
        console.log('Dados do usuário recebidos:', data);

        if (data && data.length > 0) {
          setUserInfo(data[0]);
        } else {
          console.warn('Array de dados vazio ou inválido.');
        }
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
      }
    };

    fetchUserInfo();
  }, [id]);

return(
  <>
    <Avatar.Image size={90} source={require('../../assets/people.png')} />
    <View style={styles.viewName}>
    {userInfo ? (
          <>
            {userInfo.nome ? (
              <Text style={styles.nameUser} numberOfLines={2}>
                {userInfo.nome}
              </Text>
            ) : (
              <Text style={styles.nameUser}>Nome do usuário indisponível</Text>
            )}
            <View style={styles.viewConfig}>
              <MenuPerfil userInfo={userInfo}/>
            </View>
          </>
        ) : (
          <Text style={styles.nameUser}>Carregando informações do usuário...</Text>
        )}
    </View>
  </>
  // Josefinobistefundo Santos Fulano Rodrigues Santos Vieira Sousa Sousa Sousa Sousa
);
}

const styles = StyleSheet.create({
  viewName: {
    width: '80%',
    alignSelf: 'center',
  },
  nameUser: {
    color: '#EDE0D6',
    fontSize: 20,
    textAlign: 'left',
    margin: '3%',
    maxWidth: '92%',
  },
  viewConfig: {
    alignSelf: 'flex-end',
    marginEnd: '8%',
    // width: '30%',
    // height: '50%',
  // borderColor: 'red',
  // borderWidth: 1
  },
});
export default AvatarUser;
