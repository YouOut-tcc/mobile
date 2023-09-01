import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 
import styles from "./style";
import LogoYO from "../../Components/LogoYouOut";
import Commerce from "../../Components/CommerceInfo/Commerce";
import Searchbar from "../../Components/searchBar";

export default function HomePage() {
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
            <Searchbar />
          </View>
          <View style={styles.containerPlace}>
            <Commerce />
          </View>
        </View>
      </KeyboardAwareScrollView>

  );
}