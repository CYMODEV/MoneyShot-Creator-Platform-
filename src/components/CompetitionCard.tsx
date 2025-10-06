import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, spacing } from "@/theme/theme";
import { formatUSD } from "@/utils/format";

type Props = {
  title: string;
  prizeCents: number;
  entryFeeCents: number;
  entryFeePIX: number;
  onEnter: (method: "fiat" | "pix") => void;
};

export default function CompetitionCard({ title, prizeCents, entryFeeCents, entryFeePIX, onEnter }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Prize</Text>
        <Text style={styles.value}>{formatUSD(prizeCents)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Entry</Text>
        <Text style={styles.value}>
          {formatUSD(entryFeeCents)} or {entryFeePIX} PIX
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.btn, styles.btnFiat]} onPress={() => onEnter("fiat")}>
          <Text style={styles.btnText}>Enter ($)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnPix]} onPress={() => onEnter("pix")}>
          <Text style={styles.btnText}>Enter (PIX)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0F172A",
    borderRadius: 12,
    padding: spacing(2),
    marginBottom: spacing(2),
    borderColor: "#1E2A44",
    borderWidth: 1
  },
  title: { color: "#fff", fontSize: 18, fontWeight: "700", marginBottom: spacing(1) },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 4 },
  label: { color: "#9AA9BF" },
  value: { color: "#E6EDF7", fontWeight: "600" },
  actions: { flexDirection: "row", gap: 12, marginTop: spacing(2) },
  btn: { flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: "center" },
  btnFiat: { backgroundColor: "#1E293B" },
  btnPix: { backgroundColor: colors.brand },
  btnText: { color: "#fff", fontWeight: "700" }
});
