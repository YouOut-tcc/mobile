import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { useState } from 'react';
import CartInfo from './Cart';

export default function CommerceInfos({Empty, Header, Data, isLoading, fetchData}) {
  return (
    <View>
      <FlatList
      style={styles.flatList}
        ListEmptyComponent={Empty}
        ListHeaderComponent={Header}
        refreshing={isLoading}
        onRefresh={fetchData}
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
    alignItems: 'center',
     // borderColor: 'red',
    // borderWidth: 1 ,
  },
  flatList: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: '35%',
  },

});
