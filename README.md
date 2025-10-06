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
