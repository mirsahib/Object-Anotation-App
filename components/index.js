import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import CameraScreen from './CameraScreen'
import LabelScreen from './LabelScreen';



const Stack = createNativeStackNavigator();
export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="Label" component={LabelScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}