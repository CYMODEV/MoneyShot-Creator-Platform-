# MoneyShot-Creator-Platform-
Platform for creative content sharing, and more particularly to systems and methods for integrating tokenized economies, competitions, and multi‑channel monetization in a social media environment.
moneyshot-app/
├─ app.json
├─ app.config.ts
├─ package.json
├─ tsconfig.json
├─ babel.config.js
├─ .gitignore
├─ README.md
├─ assets/
│  ├─ icon.png
│  ├─ splash.png
│  └─ placeholder.jpg
├─ src/
│  ├─ App.tsx
│  ├─ navigation/
│  │  └─ Tabs.tsx
│  ├─ screens/
│  │  ├─ Home.tsx
│  │  ├─ Discover.tsx
│  │  ├─ Upload.tsx
│  │  ├─ Competitions.tsx
│  │  └─ Profile.tsx
│  ├─ components/
│  │  ├─ WalletBar.tsx
│  │  ├─ CompetitionCard.tsx
│  │  ├─ SupportModal.tsx
│  │  └─ MediaTile.tsx
│  ├─ theme/
│  │  └─ theme.ts
│  ├─ store/
│  │  └─ useStore.ts
│  ├─ services/
│  │  ├─ api.ts
│  │  └─ mock.ts
│  └─ utils/
│     └─ format.ts
{
  "expo": {
    "name": "MoneyShot",
    "slug": "moneyshot",
    "version": "1.0.0",
    "scheme": "moneyshot",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0B0F14"
    },
    "updates": { "fallbackToCacheTimeout": 0 },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "app.moneyshot.mobile"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#0B0F14"
      },
      "package": "app.moneyshot.mobile"
    },
    "web": { "bundler": "metro", "favicon": "./assets/icon.png" }
  }
}
export default {
  expo: {
    extra: {
      apiBaseUrl: process.env.API_BASE_URL || "https://mock.moneyshot.app"
    }
  }
};
{
  "name": "moneyshot",
  "version": "1.0.0",
  "private": true,
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start -c",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",
    "lint": "eslint . --ext .ts,.tsx"
  },
  "dependencies": {
    "@react-navigation/bottom-tabs": "^6.6.0",
    "@react-navigation/native": "^6.1.9",
    "expo": "^51.0.0",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.0",
    "react-native-gesture-handler": "~2.14.0",
    "react-native-reanimated": "~3.10.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "~3.31.1",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@types/react": "~18.2.79",
    "@types/react-native": "~0.73.0",
    "typescript": "~5.3.3"
  }
}
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] },
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: { "@": "./src" },
          extensions: [".ts", ".tsx", ".js", ".json"]
        }
      ]
    ]
  };
};
node_modules
.expo
.expo-shared
dist
web-build
*.log
android
ios
# MoneyShot (Expo React Native)

A modern, entrepreneurial UI for the MoneyShot platform with five core tabs, wallet bar, and competition flows. Runs out-of-the-box with mock data.

## Quick start
1. npm install -g expo-cli
2. npm install
3. npm run start
4. Press i (iOS) or a (Android) or scan QR with Expo Go.

## Env
- API_BASE_URL (optional): defaults to a mock.

## Structure
- src/screens: Home, Discover, Upload, Competitions, Profile
- src/components: WalletBar, CompetitionCard, SupportModal, MediaTile
- src/store: zustand app state
- src/services: api client + mock data
- src/theme: colors, spacing, typography

## Build
- iOS: npm run ios
- Android: npm run android
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
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import Discover from "@/screens/Discover";
import Upload from "@/screens/Upload";
import Competitions from "@/screens/Competitions";
import Profile from "@/screens/Profile";
import { colors } from "@/theme/theme";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.bg, card: colors.panel, text: colors.text }
};

export default function Tabs() {
  return (
    <NavigationContainer theme={navTheme as any}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.panel, borderTopColor: "#111823" },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: "#8B9BB0",
          tabBarLabel: ({ focused, children }) => (
            <Text style={{ color: focused ? colors.accent : "#8B9BB0", fontSize: 12 }}>{children}</Text>
          )
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Upload" component={Upload} />
        <Tab.Screen name="Competitions" component={Competitions} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export const colors = {
  bg: "#0B0F14",
  panel: "#0F172A",
  text: "#E6EDF7",
  subtext: "#9AA9BF",
  accent: "#FFD166",
  success: "#22C55E",
  danger: "#EF4444",
  brand: "#3B82F6"
};

export const spacing = (n: number) => n * 8;

export const shadow = {
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
  elevation: 4
};
export const formatUSD = (cents: number) => `$${(cents / 100).toFixed(2)}`;
export const formatPIX = (pix: number) => `PIX ${pix.toFixed(2)}`;
import { create } from "zustand";

type Wallet = { fiatCents: number; pix: number; stars: number };
type User = { id: string; handle: string; name?: string; avatar?: string };

type State = {
  user: User | null;
  wallet: Wallet;
  setUser: (u: User | null) => void;
  setWallet: (w: Partial<Wallet>) => void;
};

export const useStore = create<State>((set) => ({
  user: { id: "u_1", handle: "cymo", name: "Dani", avatar: undefined },
  wallet: { fiatCents: 12500, pix: 420.5, stars: 12 },
  setUser: (u) => set({ user: u }),
  setWallet: (w) => set((s) => ({ wallet: { ...s.wallet, ...w } }))
}));
export const mockDiscover = [
  { id: "m1", url: require("../../assets/placeholder.jpg"), title: "Sunset Muse", user: "@sol" },
  { id: "m2", url: require("../../assets/placeholder.jpg"), title: "Neon Dreams", user: "@lumen" },
  { id: "m3", url: require("../../assets/placeholder.jpg"), title: "Stage Heat", user: "@aria" }
];

export const mockCompetitions = [
  {
    id: "c1",
    title: "Beauty Pageant",
    endsAt: Date.now() + 1000 * 60 * 60 * 24,
    prizeCents: 1000000,
    entryFeeCents: 3000,
    entryFeePIX: 10
  },
  {
    id: "c2",
    title: "Ad Commercial Spot",
    endsAt: Date.now() + 1000 * 60 * 60 * 48,
    prizeCents: 250000,
    entryFeeCents: 1500,
    entryFeePIX: 5
  }
];
// Swap to real API later; for now returns mock data.
import { mockCompetitions, mockDiscover } from "./mock";

export const Api = {
  async listDiscover() {
    await wait(150);
    return mockDiscover;
  },
  async listCompetitions() {
    await wait(150);
    return mockCompetitions;
  },
  async enterCompetition(_id: string, _method: "fiat" | "pix") {
    await wait(250);
    return { ok: true };
  },
  async tip(_toUserId: string, _amount: number, _method: "fiat" | "pix" | "stars") {
    await wait(200);
    return { ok: true };
  }
};

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
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
