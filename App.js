import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Help from './pages/Help';
import { PrimaryColor } from './utils/colors';
import SearchBuses from './pages/SearchBuses';
import Passenger from './pages/Passenger';
import Account from './pages/Account';
import OTPPage from './pages/OTPPage';


const Stack = createNativeStackNavigator()
const BottomTabs = createMaterialBottomTabNavigator()

function Main() {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      activeColor={PrimaryColor}
      labeled={true}
      barStyle={{
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
      }}
      tabBarOptions={{ labelStyle: { fontWeight: 'bold' } }}
    >
      <BottomTabs.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),

          tabBarLabel: 'Home',
        }}
      />
      <BottomTabs.Screen
        name='Bookings' component={Bookings}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ticket" color={color} size={24} />
          ),
          tabBarLabel: 'Bookings',
        }} />
      <BottomTabs.Screen name='Help' component={Help}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="trail-sign" color={color} size={24} />
          ),
          tabBarLabel: 'Help',
        }} />
      <BottomTabs.Screen name='Account' component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={24} />
          ),
          tabBarLabel: 'Account',
        }} />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='verification' component={OTPPage} options={{ headerShown: false }} />
        <Stack.Screen name="SearchBus" component={SearchBuses} options={{ title: 'Search Results' }} />
        <Stack.Screen name='AddPassenger' component={Passenger} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

