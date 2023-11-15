import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonUser() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    navigation.navigate("SignInUser"); // Navegar para a próxima tela aqui
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={[style.buttonUser, isPressed && style.buttonUserPressed]}>
          <Text style={style.buttonText}>Usuário</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const style = StyleSheet.create({
  buttonUser: {
    backgroundColor: "#FE0472",
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: "15%",
    // width: 250,
    minWidth: 250,
    maxHeight: "100%",
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonUserPressed: {
    backgroundColor: "#8200A8",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
