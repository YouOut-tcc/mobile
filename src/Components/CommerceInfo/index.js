import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import Carousel from './Carousel';
import Infos from './Infos';
import Menu from './Menu';
import Events from './Events';
import Coments from './Coments';
import StarRating from '../StarRating';

function CommentHeader({Length}) {
  return (
    <View style={styles.containerCommentHeader}>
      <Text style={styles.title}>{Length} Comentários</Text>
      <View style={styles.rate}>{<StarRating />}</View>
    </View>
  );
}

export default function ProfileCommerce() {

  const commentList = [
    {
      id: 1,
      name: 'Fulano de tal bla bla bla',
      comment: 'Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id,Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id,Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id',
      replies: [
        { id: 1, name: 'Responder 1', content: 'Resposta 1 ao comentário 1 Resposta 1 ao comentário 1 Resposta 1 ao comentário 1 Resposta 1 ao comentário 1 Resposta 1 ao comentário 1' },
      ],
    },
    {
        id: 2,
        name: 'Lorem Ipsum 1',
        comment: 'Lorem ipsum dolor sit amet. Nam debitis maxime et rerum unde id',
        replies: [
          { id: 2, name: 'Responder 1', content: 'Resposta 1 ao comentário 1' },
        ],
      },
  ];

  return (
    <View style={styles.containerForm}>
      <Carousel />
      <View style={styles.Infos}>
        <Infos />
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            <Menu />
            <Events />
            <CommentHeader Length={commentList.length}/>
          </>
        }
        data={commentList}
        renderItem={({item, index}) => (
          <View>
            <Coments comment={item} index={index}/>
          </View>
        )}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8200A8',
  },
  containerCommentHeader: {
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#EDE0D6',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  touchableArea: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 16,
    color: '#000',
    marginLeft: 16,
  },
  rate: {
    alignItems: 'flex-end',
    right: 15,
    top: 16,
    position: 'absolute',

  },
});
