import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Help from './pages/Help';
import MyAccount from './pages/MyAccount';
import { PrimaryColor } from './utils/colors';

const Stack = createNativeStackNavigator()
const BottomTabs = createMaterialBottomTabNavigator()

function Main() {
  <BottomTabs.Navigator
    initialRouteName="Home"
    activeColor={PrimaryColor}
  >
    <BottomTabs.Screen name='Home' component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="home" size={size} color={color} />;
        },
      }} />
    <BottomTabs.Screen name='Bookings' component={Bookings} />
    <BottomTabs.Screen name='Help' component={Help} />
    <BottomTabs.Screen name='Account' component={MyAccount} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={() => <SignIn isLoggedIn={false} />} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

