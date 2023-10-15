import * as React from 'react';
import {Avatar} from 'react-native-paper';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AvatarUser = () => (
  <>
    <Avatar.Image size={90} source={require('../../assets/people.png')} />
    <View style={styles.viewName}>
      <Text style={styles.nameUser} numberOfLines={2}>
        {' '}
        Josefinobistefundo Santos Fulano Rodrigues Santos Vieira Sousa Sousa
        Sousa Sousa
      </Text>
      <TouchableOpacity style={styles.viewConfig}>
        <Icon name={'cog'} size={30} color="#EDE0D6" />
      </TouchableOpacity>
    </View>
  </>
  // Josefinobistefundo Santos Fulano Rodrigues Santos Vieira Sousa Sousa Sousa Sousa
);

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
    marginEnd: '8%'
  },
});
export default AvatarUser;
