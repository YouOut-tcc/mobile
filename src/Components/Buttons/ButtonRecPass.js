import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonRecPass() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    navigation.navigate("HomePage"); 
  };

  return (
    <View>
      <TouchableOpacity
        style={[style.buttonAccess, isPressed && style.buttonAccessPressed]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={style.buttonText}>Enviar e-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  buttonAccess: {
    backgroundColor: "#FE0472",
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: "5%",
    width: 150,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAccessPressed: {
    backgroundColor: "#8200A8",
    opacity: 0.8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
