import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useReducer, useEffect, useMemo, createContext} from 'react';
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
import AccessCommerce from '../pages/AccessCommerce';
import AuthContext from '../context/authContext';
import * as SecureStore from 'expo-secure-store';

import {getToken, userLogin} from '../services/user';
import {BackendAcessError, LoginError} from '../error/user';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
            } else if (route.name === 'Favoritos') {
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
          tabBarLabelStyle: {
            marginBottom: 5,
          },
          //   tabBarBackground: () => (
          //   ),
          //   tabBarLabel: ({focused, color}) => {

          //   },
        })}>
        <Tab.Screen name="Início" component={HomePage} />
        <Tab.Screen name="Favoritos" component={Favorites} />
        <Tab.Screen name="Mapa" component={MapPage} />
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen
          name="ProfileCommerce"
          component={ProfileCommerce}
          options={{tabBarButton: () => null}}
        />
       </Tab.Navigator>
    </PaperProvider>
  );
}

{
  /* <Stack.Screen options={{headerShown:false}} /> */
}

export default function Routes() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      // quando o backend esta desligado, ele não funciona e fica preso na tela de loading
      try {
        userToken = await SecureStore.getItemAsync('userToken');

        console.log(`token de init: ${userToken}`);
        if (userToken) {
          console.log('entrando na verificação do token');
          let res = await getToken(userToken);
          console.log('feito a req do token');
          if (res.status == 200) {
            // sessionStorage.setItem("userToken", res.data.token);
            userToken = res.data.token;
            SecureStore.setItemAsync('userToken', res.data.token);
          }
        }

        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      } catch (error) {
        console.log(error.constructor.name);
        console.log(error.message);
        if (error instanceof ReferenceError) {
          console.log(error.message);
        } else if (error instanceof TypeError) {
          console.log(error.message);
        }

        // Restoring token failed
        dispatch({type: 'RESTORE_TOKEN', token: null});
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async args => {
        // V.In a production app, we need to send some data (usually username, password) to server and get a token
        // X.We will also need to handle errors if sign in failed
        // V.After getting token, we need to persist the token using `SecureStore`

        try {
          const data = {
            email: args.email,
            password: args.password,
          };

          let token = await userLogin(data);

          console.log(token);
          // sessionStorage.setItem("userToken", res.data.token);
          SecureStore.setItemAsync('userToken', token);
          dispatch({type: 'SIGN_IN', token: token});
        } catch (error) {
          console.log(error.constructor.name);
          if (error instanceof LoginError) {
            throw error;
          } else if (error instanceof BackendAcessError){
            throw error;
          } else if (error instanceof ReferenceError) {
            console.log(error.message);
          } else if (error instanceof TypeError) {
            console.log(error.message);
          }
        }
      },
      signOut: () => {
        dispatch({type: 'SIGN_OUT'});
      },
      // signUp: async data => {
      //   // In a production app, we need to send user data to server and get a token
      //   // We will also need to handle errors if sign up failed
      //   // After getting token, we need to persist the token using `SecureStore`
      //   // In the example, we'll use a dummy token

      //   dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      // },
    }),
    [],
  );

  // if (state.isLoading) {
  //   return (
  //     <>
  //      <Load/>
  //     </>
  //   );
  // }

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {state.userToken == null ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen
              name="SignInUser"
              component={SignInUser}
              options={{
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
            <Stack.Screen name="ForgotPass" component={ForgotPass} />
            <Stack.Screen name="AccessCommerce" component={AccessCommerce} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomePage" component={BottomTab} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
