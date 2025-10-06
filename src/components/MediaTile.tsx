import React from "react";
import { Image, Text, View } from "react-native";
import { colors } from "@/theme/theme";

export default function MediaTile({ item }: any) {
  return (
    <View style={{ width: "48%", marginBottom: 10 }}>
      <Image source={item.url} style={{ width: "100%", height: 160, borderRadius: 10 }} resizeMode="cover" />
      <Text style={{ color: "#fff", fontWeight: "600", marginTop: 6 }} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={{ color: colors.subtext, fontSize: 12 }}>{item.user}</Text>
    </View>
  );
}
