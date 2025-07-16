import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import RoleSelectionScreen from "../screens/RoleSelectionScreen";
import AuthStack from "./AuthStack";
import UserTabs from "./UserTabs";
import ProviderTabs from "./ProviderTabs";
import ChatListScreen from "../screens/chat/ChatListScreen";
import ChatRoomScreen from "../screens/chat/ChatRoomScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Chat" component={ChatListScreen} />
<Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        <Stack.Screen name="UserTabs" component={UserTabs} />
        <Stack.Screen name="ProviderTabs" component={ProviderTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
