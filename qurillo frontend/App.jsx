// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ProgressBar from './components/progressbar';
import NotificationScreen from './Screens/NotificationScreen';
import ShareScreen from './Screens/ShareScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator()




function App() {
  return (
 <NavigationContainer >
<Stack.Navigator
screenOptions={{
  headerShadowVisible: false, // Set this to false to remove the header border  
}}>
<Stack.Screen name="Home" component={HomeScreen}
options={{
  headerTitle: () => <ProgressBar />,
}}></Stack.Screen>
<Stack.Screen name="Notifications" component={NotificationScreen} />
<Stack.Screen name="My Rewards" component={ShareScreen}
options={{
  
  headerRight: () => (
    <Icon name="search" size={20} color="black" />
  )
}}
/>
</Stack.Navigator>

 </NavigationContainer>
  );
}



export default App;