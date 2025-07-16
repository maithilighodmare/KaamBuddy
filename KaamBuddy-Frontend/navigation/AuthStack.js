import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginUser from "../screens/auth/LoginUser";
import SignUpUser from "../screens/auth/SignUpUser";
import LoginProvider from "../screens/auth/LoginProvider";
import SignUpProvider from "../screens/auth/SignUpProvider";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginUser" component={LoginUser} />
      <Stack.Screen name="SignUpUser" component={SignUpUser} />
      <Stack.Screen name="LoginProvider" component={LoginProvider} />
      <Stack.Screen name="SignUpProvider" component={SignUpProvider} />
    </Stack.Navigator>
  );
}
