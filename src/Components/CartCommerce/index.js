import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import CartInfo from './Cart';

export default function CommerceInfos({Empty, Header, Data, isLoading, fetchData}) {
  return (
    <View>
      <FlatList
      style={styles.flatList}
        ListEmptyComponent={Empty}
        ListHeaderComponent={Header}
        data={Data}
        renderItem={({item}) => (
          <View style={styles.cartsConteiner}>
            <CartInfo commerce={item}/>
          </View>
        )}
        keyExtractor={item => item.uuid}
        onEndReached={fetchData}
        onEndReachedThreshold={5}
      />
      {isLoading && <ActivityIndicator size="small" />}
    </View>
  );
}

const styles = StyleSheet.create({
  cartsConteiner: {
    flex: 1,
    alignItems: 'center'
  },
  flatList: {
    marginBottom: '18%',
  },

});
