import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabs from "@/navigation/Tabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Tabs />
    </SafeAreaProvider>
  );
}
