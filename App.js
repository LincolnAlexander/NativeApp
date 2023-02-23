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
  Stack,
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

function AppColor() {
  return (
    <Center flex="1" bgColor="#E6EBD5" w="100%">
      <Example />
    </Center>
  );
}

function LoginBox() {
  return (
    <Center width="80%" height="30%" bg="#B6AD90">
      <Stack></Stack>
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
      {/* <LoginBox /> */}
      {/* <Center flex="1">
          <Container>
            <Text>ss</Text>
          </Container>
          <Text>aa</Text>
          
        </Center> */}

      {/* <Example />
      <Text fontFamily="Jost" fontSize="5xl">
        ssa
      </Text> */}
      <Box flex="1" bg="#E6EBD5" alignItems="center">
        <Container>
          <Text fontFamily="Jost" fontSize="2xl">
            Quote
          </Text>
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}
