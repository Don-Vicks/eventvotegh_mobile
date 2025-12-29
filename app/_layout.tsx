import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: true,
      headerTintColor: '#b23836',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: '', // Hides the back button text
      title: '', // Default empty title
      headerShadowVisible: false,
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(main)/home" options={{ title: 'Vote' }} />
      <Stack.Screen name="(main)/tickets" options={{ title: 'Buy Tickets' }} />
      <Stack.Screen name="browser/[id]" />
    </Stack>
  )
}
