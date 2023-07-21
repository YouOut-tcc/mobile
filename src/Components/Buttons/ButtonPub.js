import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonPub() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    navigation.navigate(""); 
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={[style.buttonPub, isPressed && style.buttonPubPressed]}>
          <Text style={style.buttonText}>Estabelecimento</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const style = StyleSheet.create({
  buttonPub: {
    backgroundColor: "#FE0472",
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: "7%",
    width: 250,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPubPressed: {
    backgroundColor: "#8200A8",
    opacity: 0.8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
