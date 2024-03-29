import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Signup from "./SignupPage";
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
  Pressable,
  Flex,
} from "native-base";

export default function LoginPage() {
  const [loaded] = useFonts({
    Jost: require("../assets/fonts/Jost-Regular.ttf"),
  });

  const [username, setUsername] = React.useState({});
  const [password, setPassword] = React.useState({});
  const navigation = useNavigation();
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
        bg="#8F9B81"
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
          flex="3"
          width="100%"
          alignItems={"center"}
          justifyContent="flex-start"
          maxWidth="100%"
          marginTop={"8"}
        >
          <Container
            flex="1"
            bg="#B6AD90"
            width={"75%"}
            height={"50%"}
            maxHeight="60%"
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
                      bg="#e5e7eb"
                      shadow={2}
                      type="text"
                      defaultValue=""
                      placeholder="Enter Username"
                      fontFamily={"Jost"}
                      fontSize="sm"
                      _focus={{
                        bg: "warmGray.50",
                        borderColor: "black",
                        borderWidth: "1.5",
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
                      bg="#e5e7eb"
                      shadow={2}
                      type="password"
                      defaultValue=""
                      placeholder="Enter Password"
                      fontFamily={"Jost"}
                      fontSize="sm"
                      _focus={{
                        bg: "warmGray.50",
                        borderColor: "black",
                        borderWidth: "1.5",
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
                  bgColor={"#2F4858"}
                  onPress={validate}
                  w="250"
                  h="54"
                >
                  <Text fontFamily="Jost" fontSize="20px" color={"#e5e7eb"}>
                    Sign In
                  </Text>
                </Button>
              </Box>
            </VStack>
          </Container>
          <Container margin={"2"} flex="none " alignItems={"center"}>
            <Text fontFamily={"Jost"} fontSize="16px" color={"black"}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => Alert.alert()} textAlign="center">
              <Text
                fontFamily={"Jost"}
                fontSize="16px"
                color={"black"}
                textAlign={"center"}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </Text>
            </Pressable>
          </Container>
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}
