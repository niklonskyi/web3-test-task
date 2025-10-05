export const VALIDATION = {
  AMOUNT: {
    MIN: 0.00001,
    MAX: 100,
    DECIMALS: 5,
    REGEX: /^\d*(?:\.\d{0,5})?$/,
  },
} as const;
