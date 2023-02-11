import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';
import Todos from '../screens/Todos';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Todos" component={Todos} />

    </Stack.Navigator>
  );
}

export default Navigation;
