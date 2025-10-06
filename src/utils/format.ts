export const formatUSD = (cents: number) => `$${(cents / 100).toFixed(2)}`;
export const formatPIX = (pix: number) => `PIX ${pix.toFixed(2)}`;
