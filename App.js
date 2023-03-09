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
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
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
  VStack,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
  KeyboardAvoidingView,
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

  const [username, setUsername] = React.useState({});
  const [password, setPassword] = React.useState({});

  const validate = () => {
    if (username.name === undefined || password.password === undefined) {
      Alert.alert("Undefined");
    } else {
      Alert.alert("" + username.name + " " + password.password);
    }
  };
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
      <Box
        flex="1"
        bg="#E6EBD5"
        alignItems="center"
        justifyContent={"center"}
        flexDirection={"column"}
        w="100%"
      >
        <Container
          flex="1"
          w={"full"}
          alignItems={"center"}
          justifyContent="flex-end"
          maxWidth="100%"
        >
          <Text fontFamily="Jost" fontSize="4xl">
            Quote
          </Text>
        </Container>
        <Container
          flex="2"
          width="100%"
          alignItems={"center"}
          justifyContent="center"
          maxWidth="100%"
        >
          <Container
            flex="1"
            bg="#B6AD90"
            width={"75%"}
            height={"80%"}
            maxHeight="80%"
            maxWidth="100%"
            borderRadius={"sm"}
          >
            <VStack
              flex="1"
              // space={10}
              alignItems="center"
              w="full"
              maxHeight={"full"}
              justifyContent="center"
            >
              <Box w="100%" margin={"2"} borderWidth={"0"}>
                <FormControl>
                  <Stack mx="8">
                    <FormControl.Label>
                      <Text
                        fontFamily={"Jost"}
                        fontSize="20px"
                        fontWeight={"normal"}
                      >
                        Username
                      </Text>
                    </FormControl.Label>
                    <Input
                      bg="white"
                      shadow={2}
                      type="text"
                      defaultValue=""
                      placeholder="Enter Username"
                      fontFamily={"Jost"}
                      fontSize="sm"
                      _focus={{
                        bg: "warmGray.50",
                        borderColor: "black",
                        borderWidth: "1",
                      }}
                      borderWidth="0"
                      onChangeText={(value) =>
                        setUsername({ ...username, name: value })
                      }
                      w="250"
                      h="54"
                    />
                    {/* <FormControl.HelperText>
                      Must be atleast 6 characters.
                    </FormControl.HelperText> */}
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
              </Box>

              <Box w="100%" margin={"2"} borderWidth={"0"}>
                <FormControl>
                  <Stack mx="8">
                    <FormControl.Label>
                      <Text
                        fontFamily={"Jost"}
                        fontSize="20px"
                        fontWeight={"normal"}
                      >
                        Password
                      </Text>
                    </FormControl.Label>
                    <Input
                      bg="white"
                      shadow={2}
                      type="password"
                      defaultValue=""
                      placeholder="Enter Password"
                      fontFamily={"Jost"}
                      fontSize="sm"
                      _focus={{
                        bg: "warmGray.50",
                        borderColor: "black",
                        borderWidth: "2",
                      }}
                      borderWidth="0"
                      onChangeText={(value) =>
                        setPassword({ ...password, password: value })
                      }
                      w="250"
                      h="54"
                    />
                    {/* <FormControl.HelperText>
                      Must be atleast 6 characters.
                    </FormControl.HelperText> */}
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
              </Box>
              <Box width={"100%"} borderWidth={"0"} margin="2">
                <Button
                  mx="8"
                  bgColor={"black"}
                  onPress={validate}
                  w="250"
                  h="54"
                >
                  <Text fontFamily="Jost" fontSize="20px" color={"white"}>
                    Sign In
                  </Text>
                </Button>
              </Box>
            </VStack>
          </Container>
        </Container>
        <Container flex={"1"}></Container>
      </Box>
    </NativeBaseProvider>
  );
}
