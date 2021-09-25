import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firstScreen from './firstScreen'
import secondScreen from './secondScreen'



const Stack = createNativeStackNavigator();
export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="firstScreen" component={firstScreen} />
                <Stack.Screen name="secondScreen" component={secondScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}