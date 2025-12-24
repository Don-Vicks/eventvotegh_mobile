import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Text } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#b23836',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e2e8f0',
        },
        tabBarLabel: ({ children, color }) => (
          <Text
            style={{
              fontSize: 11,
              color,
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='contests'
        options={{
          title: 'Contests',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='trophy-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='pagentry'
        options={{
          title: 'Pagentry',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ribbon-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='reality-show'
        options={{
          title: 'Reality Show',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='videocam-outline' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}
