import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartProvider from './src/contexts/cart';

import { useFonts } from 'expo-font';

import Home from './src/pages/Home';
import Cart from './src/pages/Cart';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    LatoLight: require('./src/assets/fonts/Lato-Light.ttf'),
    LatoRegular: require('./src/assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('./src/assets/fonts/Lato-Bold.ttf'),
    NeoRegular: require('./src/assets/fonts/Neo-Sans-Std-Regular.otf'),
    NeoBold: require('./src/assets/fonts/Neo-Sans-Std-Bold.otf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar style="auto" />
        
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}
