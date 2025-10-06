import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import WalletBar from "@/components/WalletBar";
import SupportModal from "@/components/SupportModal";
import { colors, spacing } from "@/theme/theme";
import { useStore } from "@/store/useStore";
import { Api } from "@/services/api";

export default function Home() {
  const { user } = useStore();
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <WalletBar />
      <ScrollView contentContainerStyle={{ padding: spacing(2) }}>
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "800", marginBottom: spacing(2) }}>
          Empower Your Creative Hustle
        </Text>

        <Image
          source={require("../../assets/placeholder.jpg")}
          style={{ width: "100%", height: 200, borderRadius: 12 }}
          resizeMode="cover"
        />
        <Text style={{ color: "#fff", fontWeight: "700", marginTop: spacing(1) }}>
          Welcome back, {user?.name || user?.handle}
        </Text>
        <Text style={{ color: "#9AA9BF", marginBottom: spacing(2) }}>
          Post your latest work, enter a contest, or grow your fan club.
        </Text>

        <TouchableOpacity
          onPress={() => setSupportOpen(true)}
          style={{ backgroundColor: colors.brand, padding: 12, borderRadius: 12, alignItems: "center" }}
        >
          <Text style={{ color: "#fff", fontWeight: "800" }}>Tip a Creator</Text>
        </TouchableOpacity>

        <SupportModal
          visible={supportOpen}
          onClose={() => setSupportOpen(false)}
          onConfirm={async ({ method, amount }) => {
            await Api.tip("u_2", amount, method);
            setSupportOpen(false);
          }}
        />
      </ScrollView>
    </View>
  );
}
