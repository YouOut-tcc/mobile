import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Navigation from "../Components/navigation/navigation";
import Welcome from '../pages/Welcome';
import SignInUser from '../pages/SignInUser';
import ForgotPass from "../pages/ForgotPass";
import Register from "../pages/Register";
import CommercePage from "../pages/CommercePage";



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
                name="CommercePage"
                component={CommercePage}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown:false}}
            />
              {/* <Stack.Screen
                name="Navigation"
                component={Navigation}
                options={{headerShown:false}}
            /> */}

        </Stack.Navigator>
    )

}
