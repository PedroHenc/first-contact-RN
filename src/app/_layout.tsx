import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Feather } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#727d9b',
          drawerActiveTintColor: '#ffff',
          drawerHideStatusBarOnOpen: true,
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor: '#1d1f25',
            paddingTop: 32,
            width: '50%',
          },
          drawerLabelStyle: {
            marginLeft: -24,
          },
          sceneContainerStyle: {
            backgroundColor: '#1d1f25',
          },
        }}
      >
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: 'Inicio',
            drawerIcon: ({ color, size }) => (
              <Feather name='home' size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name='notifications'
          options={{
            drawerLabel: 'Notificações',
            drawerIcon: ({ color, size }) => (
              <Feather name='bell' size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
