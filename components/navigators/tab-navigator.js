import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Ionicons';
import { SearchScreen } from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName = ''
                    if(route.name === "Home"){
                        focused ? iconName = 'home' : iconName = 'home-outline'
                    }else if(route.name == 'Movie'){
                        focused ? iconName = 'logo-youtube' : iconName = 'logo-youtube'
                    }else if(route.name == 'Search'){
                        focused ? iconName = 'search' : iconName = 'search-outline'
                    }

                    return <Feather name={iconName} size={size} color={color}/>
                },

                tabBarActiveTintColor: 'crimson',
                tabBarInactiveTintColor: 'black'

            })}>
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
                <Tab.Screen name="Movie" component={DetailScreen} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTab