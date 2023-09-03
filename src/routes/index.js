import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Favorites from '../pages/Favorite';
import Profile from '../pages/Profile';
import ForgotPass from '../pages/ForgotPass';
import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage';
import ProfileCommerce from '../pages/ProfileCommerce';
import Register from '../pages/Register';
import SignInUser from '../pages/SignInUser';
import Welcome from '../pages/Welcome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function MyTabBar({ state, descriptors, navigation }) {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label =
//             options.tabBarLabel !== undefined
//               ? options.tabBarLabel
//               : options.title !== undefined
//               ? options.title
//               : route.name;

//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               // The `merge: true` option makes sure that the params inside the tab screen are preserved
//               navigation.navigate({ name: route.name, merge: true });
//             }
//           };

//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };

//           return (
//             <TouchableOpacity
//               accessibilityRole="button"
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{ flex: 1 }}
//             >
//               <Text style={{ color: isFocused ? '#ff0000' : '#222' }}>
//                 {label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   }

function BottomTab() {
  return (
    <PaperProvider>
      {/* colocar em um compomente separadp */}
      <Tab.Navigator
        // tabBar={props => <MyTabBar {...props} />}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = 'home';
              
            } 
            if (route.name === 'Mapa') {
              iconName = 'map';
              
            } 
            if (route.name === 'Perfil') {
              iconName = 'user';
              
            } 
            else if (route.name === 'Favoritos') {
              iconName = 'heart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

          headerShown: false,
          tabBarActiveTintColor: '#FE0472',
          tabBarInactiveTintColor: '#8200A8',
          tabBarActiveBackgroundColor: '#ede0d6',
          tabBarInactiveBackgroundColor: '#ede0d6',

          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarLabelStyle:{
            marginBottom: 5,
          }
          //   tabBarBackground: () => (
          //   ),
          //   tabBarLabel: ({focused, color}) => {

          //   },
        })}>
        <Tab.Screen name="Início" component={HomePage}/>
        <Tab.Screen name="Favoritos" component={Favorites}/>
        <Tab.Screen name="Mapa" component={MapPage} />
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen name="ProfileCommerce" component={ProfileCommerce} options={{tabBarButton: () => null}}/>
      </Tab.Navigator>
    </PaperProvider>
  );
}

{
  /* <Stack.Screen options={{headerShown:false}} /> */
}

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="SignInUser" component={SignInUser} />

      <Stack.Screen name="ForgotPass" component={ForgotPass} />

      <Stack.Screen name="HomePage" component={BottomTab} />
      {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
      {/* <Stack.Screen name="ProfileCommerce" component={ProfileCommerce} /> */}

      <Stack.Screen name="Register" component={Register} />
      
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}
