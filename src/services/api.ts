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
