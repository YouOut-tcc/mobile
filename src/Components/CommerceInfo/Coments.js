import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import MenuDenuncia from '../menuDenuncia';
import Icon from 'react-native-vector-icons/FontAwesome';
import ComentsAnswer from '../CommerceInfo/ComentsAnswer';

export default function CommentList({comment, index}) {
  const [denunciado, setDenunciado] = useState(false);
  const comentarioDenunciado = {
    nome: 'Usuário',
    comentario: 'Este é um comentário denunciado.',
    denunciado: true,
  };

  const handleDenunciar = () => {
    setDenunciado(true);
  };

  let date = new Date(comment.criado);
  date = date.toLocaleDateString('en-GB');

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Avatar.Image
          size={70}
          source={require('../../assets/people.png')}
          style={styles.avatar}
        />
        <View style={styles.commentContent}>
          <View style={styles.header}>
            <Text style={styles.userName}>{comment.nome}</Text>
            <View style={styles.dados}>
              <Text style={styles.userName}>{date}</Text>
              <Text>
                {comment.pontuacao}{' '}
                <Icon name="star" size={16} color="#FE0472" />
              </Text>
            </View>
          </View>
          <View style={styles.coment}>
            <Text>{comment.comentario}</Text>
          </View>
          <View style={styles.tst}>
            {denunciado && (
              <>
                <Icon name="exclamation-circle" size={16} color="red" />
                <Text style={styles.denunciadoText}>
                  {' '}
                  Comentário Denunciado
                </Text>
              </>
            )}
            <MenuDenuncia onDenunciar={handleDenunciar} />
          </View>
        </View>
      </View>
      <View style={styles.resposta}>
        {comment.resposta && (
          <ComentsAnswer comment={comment.resposta}>
             <MenuDenuncia onDenunciar={handleDenunciar} />
          </ComentsAnswer>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 8,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 16,
    marginTop: 8,
    paddingBottom: 8,
    // borderBottomWidth: 1,
    // borderBottomColor: '#CCCCCC',
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
  tst: {
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  dados: {
    // marginLeft: '15%',
    alignSelf: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },
  coment: {
    maxWidth: '80%',
  },

});
