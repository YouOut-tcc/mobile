import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogoYouOut from './LogoYouOut';

export default function CommentList({comment, index}) {
  return (
    <View style={styles.containerForm}>
        <View style={styles.img}>
            <LogoYouOut/>
        </View>
        <Text style={styles.textend}>Equipe YouOut</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        backgroundColor: '#8200A8',
    },
    img:{
        width: '70%',
        height: '35%',
        alignSelf: 'center',
        marginTop:'60%' 
    },
    textend:{
        color: '#EDE0D6',
        fontSize: 20,
        alignItems: 'flex-end',
        alignSelf: 'center',
        marginTop:'50%'        
    },
    

});
