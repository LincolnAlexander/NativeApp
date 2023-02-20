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
import React from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
//import * as SplashScreen from "expo-splash-screen";
import {
  NativeBaseProvider,
  Box,
  Header,
  Body,
  Heading,
  Footer,
  Title,
  useFormControlContext,
  Text,
  Center,
  Container,
} from "native-base";

function Example() {
  return (
    <Center>
      <Container>
        <Heading>
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
      </Container>
    </Center>
  );
}

export default function App() {
  const [loaded] = useFonts({
    Jost: require("./assets/fonts/Jost-Regular.ttf"),
  });

  if (!loaded) return null;
  return (
    <NativeBaseProvider>
      <Example />
      <Text fontFamily="Jost" fontSize="5xl">
        ssa
      </Text>
    </NativeBaseProvider>
  );
}
