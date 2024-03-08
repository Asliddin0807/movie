import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import {DetailScreen} from '../screens/DetailScreen'
import { PersonScreen } from "../screens/PersonScreen";
const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Movie" component={DetailScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Person" component={PersonScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}