import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from '../StarRating';

import {useNavigation} from '@react-navigation/native';

import AvatarCommerce from '../Avatar/avatarCommerce';
import consts from './consts';
import FavoriteIcon from './FavoriteIcon';

export default function CartInfo({commerce}) {
  const navigation = useNavigation();
  // console.log(commerce)
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProfileCommerce', {commerce: commerce})
      }
      style={styles.commerce}>
      <View style={styles.viewImg}>
        <AvatarCommerce />
        {!commerce.favorito ? null : (
          <View style={styles.viewFav}>
            <FavoriteIcon favorite={true} />
          </View>
        )}
      </View>
      <View style={styles.infoCommerce}>
        <Text
          style={[
            styles.commerceName,
            {minWidth: '60%'},
            {maxWidth: '72%'},
            {textAlign: 'center'},
          ]}
          numberOfLines={1}>
          {commerce.nome}
        </Text>
        <View style={styles.starRating}>
          <StarRating
            stars={commerce.nota}
            style={{...styles.commerceContainer, pointerEvents: 'none'}}
          />
        </View>

        <Text style={styles.commerceDistance}>{commerce.distance}</Text>
        <Text style={styles.commerceCheckin}>
          <Icon name={'users'} size={20} color="#FE0472" /> {commerce.checkins}{' '}
          check-ins
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  commerceContainer: {
    flexGrow: 1,
    alignItems: 'center',   
   
  },
  starRating: {
    width: '70%',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1 ,
  },

  //   scrollViewContent: {
  //     flexGrow: 1,
  //   },
  favorite: {
    position: 'relative',
  },
  commerce: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    width: '90%',
    height: 140,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#8200A8',
    backgroundColor: '#EFD9D3',
    // borderColor: 'red',
    // borderWidth: 1 ,
  },
  commerceName: {
    color: '#000',
    fontSize: 19,
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center',
    // borderColor: 'red',
    // borderWidth: 1 ,
  },
  viewImg: {
    width: '38%',
    height: '90%',
    margin: 8,
  },
  commerceDistance: {
    color: '#333',
    fontSize: 16,
    width: '70%',
    alignItems: 'center',
    textAlign: 'center',
    // borderColor: 'red',
    // borderWidth: 1 ,
  },
  commerceCheckin: {
    color: '#333',
    fontSize: 15,
    width: '70%',
    textAlign: 'center',
    // borderColor: 'red',
    // borderWidth: 1 ,
  },
  viewFav: {
    width: '30%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: '75%',
  },
});
