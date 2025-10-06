import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import WalletBar from "@/components/WalletBar";
import { colors, spacing } from "@/theme/theme";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [premium, setPremium] = useState(false);
  const [price, setPrice] = useState("2.99");

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <WalletBar />
      <View style={{ padding: spacing(2) }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", marginBottom: spacing(2) }}>Upload</Text>

        <Image
          source={require("../../assets/placeholder.jpg")}
          style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: spacing(2) }}
        />
        <TextInput
          placeholder="Title your post"
          placeholderTextColor="#6B7A8F"
          value={title}
          onChangeText={setTitle}
          style={{
            backgroundColor: "#0F172A",
            color: "#fff",
            borderRadius: 10,
            padding: 12,
            borderColor: "#1E2A44",
            borderWidth: 1,
            marginBottom: spacing(2)
          }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: spacing(2) }}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>Premium unlock</Text>
          <TouchableOpacity onPress={() => setPremium(!premium)}>
            <Text style={{ color: premium ? colors.accent : "#9AA9BF" }}>{premium ? "ON" : "OFF"}</Text>
          </TouchableOpacity>
        </View>

        {premium && (
          <TextInput
            placeholder="Price (USD)"
            placeholderTextColor="#6B7A8F"
            value={price}
            onChangeText={setPrice}
            keyboardType="decimal-pad"
            style={{
              backgroundColor: "#0F172A",
              color: "#fff",
              borderRadius: 10,
              padding: 12,
              borderColor: "#1E2A44",
              borderWidth: 1,
              marginBottom: spacing(2)
            }}
          />
        )}

        <TouchableOpacity
          onPress={() => {}}
          style={{ backgroundColor: colors.brand, padding: 14, borderRadius: 12, alignItems: "center" }}
        >
          <Text style={{ color: "#fff", fontWeight: "800" }}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
