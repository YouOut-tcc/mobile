import React from "react";
import { createStackNavigator } from '@react-navigation/stack';



import Routes from "../routes";
import Welcome from '../pages/Welcome';
import SignInUser from '../pages/SignInUser';
import ForgotPass from "../pages/ForgotPass";
import CommercePage from "../pages/HomePage";
import Favorites from "../pages/Favorite";
import Register from '../pages/Register';

const Stack = createStackNavigator();

const AuthNavigatior = () => {
    console.log(Stack)
  return (
    <Stack.Navigator>
        <Stack.Screen name={Routes.Welcome} component={Welcome} />
        <Stack.Screen name={Routes.SignInUser} component={SignInUser} />
        <Stack.Screen name={Routes.ForgotPass} component={ForgotPass} />
      <Stack.Screen name={Routes.CommercePage} component={CommercePage} />
      <Stack.Screen name={Routes.Register} component={Register} />

    </Stack.Navigator>
  );
}

export default AuthNavigatior;


// const styles = StyleSheet.create({

// })