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


//====================================

// import React, { useState, useEffect } from 'react';
// import { 


// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons } from '@expo/vector-icons';
// import { HomeScreen, SplashScreen } from './src/components/Task';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" />
//         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Splash" component={SplashScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }

// אאאאאאאאאאאאאאאאאאאאאאאאאאאאא

// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { HomeScreen, SplashScreen } from './src/components/Task';

// const Stack = createStackNavigator();

// export default function App() {
//   return (

//     <NavigationContainer>
//       <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" />
//         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Splash" component={SplashScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }

//בבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבבב

// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text, Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// // יצירת Stack Navigator
// const Stack = createStackNavigator();

// // עמוד הבית
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// // עמוד פרטים
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// // רכיב ראשי
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen 
//             name="Home" 
//             component={HomeScreen} 
//             options={{
//               title: 'Home',
//               headerRight: () => (
//                 <Ionicons name="home" size={24} color="black" style={{ marginRight: 10 }} />
//               ),
//             }} 
//           />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }


// גגגגגגגגגגגגגגגגגגגגגגגגגגגגגגגגגגגג


// import { SafeAreaView, StatusBar, View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';

// // יצירת Stack Navigator
// const Stack = createStackNavigator();

// // עמוד השקה
// function SplashScreen({ navigation }) {
//   // ניתן להוסיף לוגיקה כאן כדי לעבור לעמוד הבית אחרי כמה שניות
//   setTimeout(() => {
//     navigation.replace('Home');
//   }, 2000); // מחכה 2 שניות לפני המעבר

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Splash Screen</Text>
//     </View>
//   );
// }

// // עמוד הבית
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// // עמוד פרטים
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// // רכיב ראשי
// export default function App() {
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" />
//         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Splash" component={SplashScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }



// דדדדדדדדדדדדדדדדדדדדדדדדדדדדדדדדדד
import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import {  TasksScreen, WelcomeScreen } from './src/components/Task';
import { SplashScreen } from './src/components/OpeningScreen';
import { HomePage } from './src/components/HomePage';






// יצירת Stack Navigator
const Stack = createStackNavigator();

// עמוד השקה
// export function SplashScreen({ navigation }) {
//   // ניתן להוסיף לוגיקה כאן כדי לעבור לעמוד הבית אחרי כמה שניות
//   setTimeout(() => {
//     navigation.replace('Home');
//   }, 2000); // מחכה 2 שניות לפני המעבר

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Splash Screen</Text>
//     </View>
//   );
// }

// עמוד הבית


// עמוד פרטים
// export function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// רכיב ראשי
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Tasks" component={TasksScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );

}



// export default function App() {
//   return (

//     <NavigationContainer>
//       <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" />
//         <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Splash" component={SplashScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }
