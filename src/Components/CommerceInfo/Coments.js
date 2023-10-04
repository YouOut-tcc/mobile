import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import MenuDenuncia from '../menuDenuncia';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CommentList({ comment, index }) {
  const [denunciado, setDenunciado] = useState(false);
  const comentarioDenunciado = {
    nome: "Usuário",
    comentario: "Este é um comentário denunciado.",
    denunciado: true 
  };
  return (
    <View style={styles.commentContainer}>
      <Avatar.Image
        size={70}
        source={require('../../assets/people.png')}
        style={styles.avatar}
      />
      <View style={styles.commentContent}>
        <View style={styles.header}>
          <Text style={styles.userName}>{comment.nome}</Text>
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
        <Text>{comment.comentario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 16,
    marginTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 16,
    position: 'relative',
  },
  avatar: {
    marginRight: 16,
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
  }
});
