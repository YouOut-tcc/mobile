import React from "react";
import styles from "./style";
import LogoYO from "../../Components/LogoYouOut";
import { View, Text } from 'react-native';
import Carousel from "../../Components/Carousel";

export default function ProfileCommerce() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LogoYO />
      </View>
      <View style={styles.containerForm}>
        <Carousel />
        <Text>ProfileCommerce</Text>
      </View>
    </View>
  );
}
