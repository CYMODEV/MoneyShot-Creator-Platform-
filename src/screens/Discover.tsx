import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import WalletBar from "@/components/WalletBar";
import { colors, spacing } from "@/theme/theme";
import { Api } from "@/services/api";
import MediaTile from "@/components/MediaTile";

export default function Discover() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    Api.listDiscover().then(setItems);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <WalletBar />
      <ScrollView contentContainerStyle={{ padding: spacing(2) }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", marginBottom: spacing(2) }}>Discover</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {items.map((item) => (
            <MediaTile key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
