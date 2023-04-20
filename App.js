import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './View/HomeView';
import testView from './View/testView';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import End from './View/end';
import MyTabs from './View/Tab';
// Navigation stack setup
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <PaperProvider>
    <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Accueil' component={HomeView} options={{title: 'Accueil'}} />
          <Stack.Screen name='Test' component={testView} options={{title: 'Test'}}/>
          <Stack.Screen name='End' component={End} options={{title: 'End'}}/> */}
          <Stack.Screen name='Accueil' component={MyTabs} />

        </Stack.Navigator>

    </NavigationContainer>
    </PaperProvider>
  );
}


