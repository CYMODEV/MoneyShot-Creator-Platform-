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
