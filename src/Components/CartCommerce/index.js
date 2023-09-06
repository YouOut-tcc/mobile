import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';
import CartInfo from './Cart';
import consts from './consts';

export default function CommerceInfos({Empty, Header, Data}) {
  const itemHeight = 146;

  return (
    <View>
      <FlatList
        ListEmptyComponent={Empty}
        ListHeaderComponent={Header}
        data={Data}
        renderItem={({item}) => (
          <View style={styles.cartsConteiner}>
            <CartInfo commerce={item}/>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      {/* <View
        style={{
          height:
            Dimensions.get('window').height -
            consts.commerceList.length * itemHeight + 40,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cartsConteiner: {
    flex: 1,
    alignItems: 'center'
  },
  // commerceContainer: {
  //   flexGrow: 1,
  //   alignItems: 'center',
  //   width: Dimensions.get('screen').width,
  // },
});
