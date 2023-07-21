import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../pages/Welcome';
import SignInUser from '../pages/SignInUser';
import ForgotPass from "../pages/ForgotPass";
import Favorites from "../pages/Favorite";
import Register
 from '../pages/Register';
import HomePage from "../pages/HomePage";
import ProfileCommerce from "../pages/ProfileCommerce";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown:false}}

            />

            <Stack.Screen
                name="SignInUser"
                component={SignInUser}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="ForgotPass"
                component={ForgotPass}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{headerShown:false}}
                
            />
             <Stack.Screen
                name="ProfileCommerce"
                component={ProfileCommerce}
                options={{headerShown:false}}
                
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown:false}}
            />
             <Stack.Screen
                name="Favorites"
                component={Register}
                options={{headerShown:false}}
            />
            
        </Stack.Navigator>
    )

}


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Welcome from '../pages/Welcome';
// import SignInUser from '../pages/SignInUser';
// import ForgotPass from '../pages/ForgotPass';
// import CommercePage from '../pages/CommercePage';
// import Favorites from '../pages/Favorite';
// import Register from '../pages/Register';

// const Tab = createBottomTabNavigator();


// export default function Routes() {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <StatusBar backgroundColor="#8200A8" barStyle="light-content" />
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ color, size }) => {
//               let iconName;

//               if (route.name === 'CommercePage') {
//                 iconName = 'shopping-cart';
//               } else if (route.name === 'Favorites') {
//                 iconName = 'heart';
//               } 

//               return <Icon name={iconName} size={size} color={color} />;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: '#FE0472',
//             inactiveTintColor: '#8200A8',
//           }}
//         >
//          <Tab.Screen name="Welcome" component={Welcome} options={{ tabBarVisible: false, headerShown:false
//          }} />
//           <Tab.Screen name="SignInUser" component={SignInUser} options={{ tabBarVisible: false, headerShown:false }} />
//           <Tab.Screen name="ForgotPass" component={ForgotPass} options={{ tabBarVisible: false, headerShown:false }} />
//           <Tab.Screen name="CommercePage" component={CommercePage} options={{headerShown:false }} />
//           <Tab.Screen name="Favorites" component={Favorites} options={{headerShown:false }} />
//           <Tab.Screen name="Register" component={Register} options={{headerShown:false }} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }