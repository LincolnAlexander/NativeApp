import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useFonts } from "expo-font";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
  VStack,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
  KeyboardAvoidingView,
  Pressable,
  Flex,
} from "native-base";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
