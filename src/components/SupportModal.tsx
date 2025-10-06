import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { colors } from "@/theme/theme";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (p: { method: "fiat" | "pix" | "stars"; amount: number }) => void;
};

export default function SupportModal({ visible, onClose, onConfirm }: Props) {
  const [method, setMethod] = useState<"fiat" | "pix" | "stars">("pix");
  const [amount, setAmount] = useState(5);

  const amounts = [1, 5, 10, 20];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", padding: 16 }}>
        <View style={{ backgroundColor: "#111826", borderRadius: 12, padding: 16 }}>
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 12 }}>Support Creator</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
            {(["fiat", "pix", "stars"] as const).map((m) => (
              <TouchableOpacity key={m} onPress={() => setMethod(m)}>
                <Text style={{ color: method === m ? colors.accent : "#9ca3af", fontWeight: "700" }}>{m.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {amounts.map((v) => (
              <TouchableOpacity key={v} onPress={() => setAmount(v)}>
                <Text style={{ color: amount === v ? colors.accent : "#e5e7eb", fontSize: 16 }}>${v}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 16, gap: 16 }}>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ color: "#9ca3af" }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onConfirm({ method, amount })}>
              <Text style={{ color: colors.success, fontWeight: "700" }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
