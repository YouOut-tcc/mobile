import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Platform, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import LogoYO from '../../Components/LogoYouOut';
import Commerce from '../../Components/CartCommerce';
import SearchbarComponent from '../../Components/searchBar';
import consts from '../../Components/CartCommerce/consts';

function Vazio() {
  return <Text>Não encontrado</Text>;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommerceList, setFilteredCommerceList] = useState([]);

  const handleSearchChange = filteredList => {
    setFilteredCommerceList(filteredList);
  };

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    > */}
      <View style={styles.containerLogo}>
        <LogoYO />
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerSearch}>
          <SearchbarComponent
            commerceList={consts.commerceList}
            onSearchChange={handleSearchChange}
          />
        </View>
        <View style={styles.containerPlace}>
          <Commerce Empty={<Vazio/>} Data={consts.commerceList}/>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
}
