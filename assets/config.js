// ========= SETĂRI VAULTX =========

// Link Telegram oficial
const TELEGRAM_CHANNEL = "https://t.me/VaultXClub";

// Link contact direct (CEO) – dacă vrei să schimbi, modifică aici
const TELEGRAM_CONTACT = "https://t.me/CEOVaultX"; 
// alternativ: "https://t.me/VaultX_CEO2"

// Preț abonament Elite (USDT/lună)
const ELITE_PRICE = 100;

// Tombolă Elite
const ELITE_RAFFLE_PRIZE_USDT = 200;     // valoarea premiului zilnic
const ELITE_RAFFLE_PER_MEMBERS = 120;    // la câți membri activi se acordă un premiu

// Niveluri + procente profit lunar brut
const VAULTX_TIERS = [
  { capital: 100,   pct: 0.40 },
  { capital: 250,   pct: 0.35 },
  { capital: 500,   pct: 0.30 },
  { capital: 1000,  pct: 0.25 },
  { capital: 2500,  pct: 0.20 },
  { capital: 5000,  pct: 0.15 },
  { capital: 10000, pct: 0.10 },
];

// Taxe aplicate profitului
const MGMT_FEE = 0.10;       // 10% taxă de gestiune
const WITHDRAW_FEE = 0.10;   // 10% taxă de retragere

// Banner legal (apare în footer pe fiecare pagină)
const LEGAL_BANNER = "VaultX Investment Club – exemplu demo. Profiturile nu sunt garantate. Respectați legislația aplicabilă.";