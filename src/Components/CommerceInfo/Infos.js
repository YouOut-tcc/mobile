import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from './StarRating';
export default function Infos() {
  return(
        <View>
            <View style={styles.infoCommerce}>
                <Text style={styles.commerceName}>LOREM IPSUM </Text>
                    <Text style={styles.commerceAbout}>Restaurante - 3km de distância - {<StarRating />}</Text> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoCommerce: {
        marginTop: '1%',
        marginLeft: '4%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    commerceName: {
        color: '#000',
        fontSize: 20.6,
        fontWeight: 'bold',
      },
      
      commerceAbout: {
        color: '#333',
        fontSize: 16,
       
      },
      
});
