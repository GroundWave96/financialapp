import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

import Entradas from '../screens/Entradas';
import Estatisticas from '../screens/Estatisticas';
import Mapa from '../screens/Mapa';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0, // Remove a sombra no Android
            height: 90,
          },
          tabBarBackground: () => (
            <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
          ),
          tabBarActiveTintColor: '#FF3B5C',
          tabBarInactiveTintColor: '#8E8E93',
        }}
      >
        <Tab.Screen name="Entradas" component={Entradas} />
        <Tab.Screen name="Estatísticas" component={Estatisticas} />
        <Tab.Screen name="Mapa" component={Mapa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}