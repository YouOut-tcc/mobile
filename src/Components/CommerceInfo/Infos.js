import React, {useState} from 'react';
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
        alignSelf: 'flex-start',
        marginTop: '2%',
        marginLeft: '2%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        // borderWidth: '100%'

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
