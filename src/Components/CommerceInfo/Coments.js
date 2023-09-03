import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import StarRating from './StarRating';

const CommentList = () => {
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
    <View>
    <Text style={styles.title}>{commentList.length} Comentários</Text>
    <View style={styles.hate}>{<StarRating />}</View>
    {commentList.map((comment, index) => (
      <View key={comment.id}>
        <View style={[styles.commentContainer, index !== 0 && styles.commentDivider]}>
          <Avatar.Image
            size={70}
            source={require('../../assets/people.png')}
            style={styles.avatar}
          />
          <View style={styles.commentTextContainer}>
            <Text style={styles.userName}>{comment.name}</Text>
            <Text>{comment.comment}</Text>
          </View>
        </View>
        {comment.replies && comment.replies.length > 0 && (
          <View style={styles.replyContainer}>
          
            {comment.replies.map((reply) => (
              <View key={reply.id} style={styles.reply}>
                <Avatar.Image
                  size={40}
                  source={require('../../assets/commerceLogo.png')}
                  style={styles.avatar}
                />
                <View style={styles.replyTextContainer}>
                  <Text style={styles.replyUserName}>{reply.name}</Text>
                  <Text style={styles.replyText} numberOfLines={20}>
                    {reply.content}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    ))}
  </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 16,
    color: '#000',
    marginLeft: 16,
  },
  hate: {
    alignItems: 'flex-end',
    right: 15,
    top: 16,
    position: 'absolute',

  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 8,
    paddingBottom: 8,
  },
  commentDivider: {
    marginTop: '2%',
    marginBottom: '2%'
  },
  avatar: {
    marginRight: 16,
  },
  commentTextContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  replyContainer: {
    marginLeft: 50,
    paddingLeft: 16,
    borderLeftWidth: 1,
    borderLeftColor: '#CCCCCC',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  replyIcon: {
    marginRight: 8,
  },
  replyTextContainer: {
    flex: 1,
  },
  replyUserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  replyText: {
    flexWrap: 'wrap', 
  },
});

export default CommentList;
