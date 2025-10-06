import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/theme/theme";
import { useStore } from "@/store/useStore";

export default function WalletBar() {
  const { wallet } = useStore();
  const fiat = (wallet.fiatCents / 100).toFixed(2);
  return (
    <View style={styles.bar}>
      <Text style={styles.item}>$ {fiat}</Text>
      <Text style={styles.item}>PIX {wallet.pix.toFixed(2)}</Text>
      <Text style={styles.item}>★ {wallet.stars}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#111823",
    borderBottomColor: "#0D1220",
    borderBottomWidth: 1
  },
  item: { color: colors.accent, fontWeight: "700" }
});
