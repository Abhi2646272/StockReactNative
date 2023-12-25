import React from 'react';
// import { SafeAreaView, StyleSheet, Stack } from 'react-native';
import Login from './Login'; // Import your main component
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Details" component={LibraryDetailScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>

  )
}

 
export default App;
