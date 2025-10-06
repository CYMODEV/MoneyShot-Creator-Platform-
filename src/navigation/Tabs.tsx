import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import Discover from "@/screens/Discover";
import Upload from "@/screens/Upload";
import Competitions from "@/screens/Competitions";
import Profile from "@/screens/Profile";
import { colors } from "@/theme/theme";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.bg, card: colors.panel, text: colors.text }
};

export default function Tabs() {
  return (
    <NavigationContainer theme={navTheme as any}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.panel, borderTopColor: "#111823" },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: "#8B9BB0",
          tabBarLabel: ({ focused, children }) => (
            <Text style={{ color: focused ? colors.accent : "#8B9BB0", fontSize: 12 }}>{children}</Text>
          )
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Upload" component={Upload} />
        <Tab.Screen name="Competitions" component={Competitions} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
