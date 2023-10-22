import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function FavoriteHeader({Length}) {
  return (
    <Text style={styles.heartFavorite}>
      <Icon name={'heart'} size={30} color="#FE0472" />
      {'  '}
      {Length}
    </Text>
  );
}

const styles = StyleSheet.create({
  heartFavorite: {
    alignSelf: 'center',
    marginTop: '5%',
    fontWeight: 'bold',
    fontSize: 25,
  },
})