import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TagsCommerce = () => {
  return (
    <>
      <View>
        <Text style={styles.buttonText}>
          <Icon name={'tags'} size={15} color="#FE0472" />
          {'  Tags'}
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Restaurante</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Bar</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Eventos</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Baladas</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Drinks</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Almoços</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Música ao vivo</Text>
        </View>
        <View style={styles.item}>
        <Icon name={'hashtag'} size={13} color="#FE0472" />
          <Text style={styles.tagtxt}>Não sei mais</Text>
        </View>
    
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',   
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#CCCCCC', 
    // borderBottomWidth: 1,
    // borderBottomColor: '#CCCCCC',
  },
  buttonText:{
    margin: '2%',
    fontWeight: 'bold',
    fontSize: 16,
    height: 23,
    textAlign: 'center',
    alignSelf: 'center'
  },
  tagtxt:{
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default TagsCommerce;
