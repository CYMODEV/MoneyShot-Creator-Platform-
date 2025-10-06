import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import WalletBar from "@/components/WalletBar";
import { colors, spacing } from "@/theme/theme";
import { useStore } from "@/store/useStore";

export default function Profile() {
  const { user } = useStore();

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <WalletBar />
      <View style={{ padding: spacing(2) }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: spacing(2) }}>
          <Image
            source={require("../../assets/placeholder.jpg")}
            style={{ width: 64, height: 64, borderRadius: 32, marginRight: 12 }}
          />
          <View>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>{user?.name || user?.handle}</Text>
            <Text style={{ color: "#9AA9BF" }}>Creator | Entrepreneur</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#0F172A", padding: spacing(2), borderRadius: 12, borderColor: "#1E2A44", borderWidth: 1 }}>
          <Text style={{ color: "#fff", fontWeight: "700", marginBottom: spacing(1) }}>Earnings snapshot</Text>
          <Text style={{ color: "#9AA9BF" }}>Tips, premium unlocks, and competition winnings appear here.</Text>
        </View>

        <TouchableOpacity
          style={{ marginTop: spacing(2), backgroundColor: colors.accent, padding: 12, borderRadius: 10, alignItems: "center" }}
        >
          <Text style={{ color: "#111", fontWeight: "800" }}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
