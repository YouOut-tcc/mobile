import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import MenuDenuncia from '../menuDenuncia';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AnswerList({ comment, index }) {
  const [denunciado, setDenunciado] = useState(false);
  const comentarioDenunciado = {
    nome: "Comércio",
    comentario: "Este é um comentário denunciado.",
    denunciado: true 
  };
  let date = new Date(comment.criado);
  date = date.toLocaleDateString("en-GB");

  return (
    <View style={styles.commentContainer}>
      <Avatar.Image
        size={45}
        source={require('../../assets/store.png')}
        style={styles.avatar}
      />
      <View style={styles.commentContent}>
        <View style={styles.header}>
          <Text style={styles.userName}>{comentarioDenunciado.nome}</Text>
          <View style={styles.dados}>
              <Text style={styles.userName}>14/11/2023</Text>
            </View>
          <View style={styles.tst}>
          {denunciado && (
            <>
              <Icon name="exclamationcircle" size={16} color="red" />
              <Text style={styles.denunciadoText}>Comentário Denunciado</Text>
            </>
          )}
          <MenuDenuncia denunciado={denunciado} setDenunciado={setDenunciado} />
          </View>
        </View>
        <Text>{comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingBottom: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#CCCCCC',
    paddingBottom: 16,
    left: 50,
    position: 'relative',
    width: '80%',
    // height: 200,
    maxHeight: 200,
    marginBottom: '5%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  avatar: {
    marginRight: 16,
    marginLeft: 15,
  },
  commentContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tst:{
    zIndex: 1,
  },
  dados: {
    marginLeft: '20%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
