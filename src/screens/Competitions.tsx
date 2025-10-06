import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import WalletBar from "@/components/WalletBar";
import CompetitionCard from "@/components/CompetitionCard";
import { colors, spacing } from "@/theme/theme";
import { Api } from "@/services/api";

export default function Competitions() {
  const [comps, setComps] = useState<any[]>([]);
  useEffect(() => {
    Api.listCompetitions().then(setComps);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <WalletBar />
      <ScrollView contentContainerStyle={{ padding: spacing(2) }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", marginBottom: spacing(2) }}>Competitions</Text>
        {comps.map((c) => (
          <CompetitionCard
            key={c.id}
            title={c.title}
            prizeCents={c.prizeCents}
            entryFeeCents={c.entryFeeCents}
            entryFeePIX={c.entryFeePIX}
            onEnter={async (method) => {
              const res = await Api.enterCompetition(c.id, method);
              if (res.ok) Alert.alert("Entered", `You entered via ${method.toUpperCase()}`);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
