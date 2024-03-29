import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import StarRating from '../StarRating';

import {useNavigation} from '@react-navigation/native';

import AvatarCommerce from '../Avatar/avatarCommerce';

export default function CardCheck({commerce}) {
  const navigation = useNavigation();
  // console.log(commerce)
  return (
    <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={7}
        showsPagination={false}
        buttonWrapperStyle={styles.buttonWrapper}
        prevButton={
          <Text style={styles.buttonText}>
            {' '}
            <Icon name={'chevron-left'} size={20} color="#FE0472" />
          </Text>
        }
        nextButton={
          <Text style={styles.buttonText}>
            <Icon name={'chevron-right'} size={20} color="#FE0472" />
          </Text>
        }
      >
    <TouchableOpacity
      // onPress={() =>
      //   // navigation.navigate('ProfileCommerce', {commerce: commerce})
      // }
      style={styles.commerce}>
      <View style={styles.viewImg}>
        <AvatarCommerce />
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
          {/* {commerce.nome} */}
        </Text>
        <View style={styles.starRating}>
          <StarRating style={styles.commerceContainer} />
        </View>
        <Text style={styles.commerceDistance}>1</Text>
        <Text style={styles.commerceCheckin}>
          <Icon name={'users'} size={20} color="#FE0472" /> {' '}
          check-ins
        </Text>
      </View>
    </TouchableOpacity>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  starRating: {
    width: '70%',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1 ,
  },
  favorite: {
    position: 'relative',
  },
  commerce: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    width: '80%',
    height: 140,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#8200A8',
    backgroundColor: '#EFD9D3',
    alignSelf: 'center',
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
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '20%',
    marginTop: '15%',

  },
});
