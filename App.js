import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './View/HomeView';
import testView from './View/testView';
import { Provider as PaperProvider } from 'react-native-paper';
import End from './View/end';
import MyTabs from './View/Tab';
// Navigation stack setup
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <PaperProvider>
    <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Accueil' component={HomeView} options={{title: 'Accueil'}} /> */}
          {/* <Stack.Screen name='Test' component={testView} options={{title: 'Test'}}/>
          <Stack.Screen name='End' component={End} options={{title: 'End'}}/> */}
          <Stack.Screen name='Accueil' component={MyTabs} />

        </Stack.Navigator>

    </NavigationContainer>
    </PaperProvider>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
