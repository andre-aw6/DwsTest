import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';


const MainStack = createNativeStackNavigator();



export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Playlist" component={HomeScreen} />
        <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
);