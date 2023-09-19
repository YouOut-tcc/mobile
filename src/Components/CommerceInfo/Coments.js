import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function CommentList({comment, index}) {
  return (
    <View>
      <View
        style={[styles.commentContainer, index !== 0 && styles.commentDivider]}>
        <Avatar.Image
          size={70}
          source={require('../../assets/people.png')}
          style={styles.avatar}
        />
        <View style={styles.commentTextContainer}>
          <Text style={styles.userName}>{comment.nome}</Text>
          <Text>{comment.comentario}</Text>
        </View>
      </View>
      {comment.replies && comment.replies.length > 0 && (
        <View style={styles.replyContainer}>
          {comment.replies.map(reply => (
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
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 8,
    paddingBottom: 8,
  },
  commentDivider: {
    marginTop: '2%',
    marginBottom: '2%',
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
