import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style";
import LogoYO from "../../Components/LogoYouOut";
import Commerce from "../../Components/CommerceInfo/Commerce";
import SearchbarComponent from "../../Components/searchBar";
import consts from "../../Components/CommerceInfo/consts";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCommerceList, setFilteredCommerceList] = useState([]);

  const handleSearchChange = (filteredList) => {
    setFilteredCommerceList(filteredList);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
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
          <Commerce commerceList={filteredCommerceList} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
