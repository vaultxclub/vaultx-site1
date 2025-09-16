// =========================
// VAULTX GLOBAL CONFIG
// =========================

// Telegram links
const TELEGRAM_CHANNEL = "https://t.me/VaultXClub";
const TELEGRAM_CONTACT = "https://t.me/CEOVaultX"; // example: contact for support

// Elite membership settings
const ELITE_PRICE = 100;                 // USDT / month
const ELITE_RAFFLE_PRIZE_USDT = 200;     // Prize per raffle
const ELITE_RAFFLE_PER_MEMBERS = 120;    // 1 prize for every N active members

// Investment tiers (capital -> expected monthly growth rate)
const VAULTX_TIERS = [
  { capital: 100,    pct: 0.40 },
  { capital: 250,    pct: 0.35 },
  { capital: 500,    pct: 0.30 },
  { capital: 1000,   pct: 0.25 },
  { capital: 2500,   pct: 0.20 },
  { capital: 5000,   pct: 0.15 },
  { capital: 10000,  pct: 0.10 },
];

// Fees (applied on profit)
const MGMT_FEE = 0.10;       // 10% management fee
const WITHDRAW_FEE = 0.10;   // 10% withdrawal fee

// Legal banner (will appear in the footer of all pages)
const LEGAL_BANNER = "© VaultX Investment Club. All rights reserved. All content is proprietary and protected by intellectual property laws. Unauthorized use or reproduction is strictly prohibited.";