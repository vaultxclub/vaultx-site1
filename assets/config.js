// ==========================
// VAULTX CONFIG FILE
// ==========================

// Supabase API keys (deja corecte la tine)
const SUPABASE_URL = "https://neurcsbdipckfdpbxbgg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ldXJjc2JkaXBja2ZkcGJ4YmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMzAwNzAsImV4cCI6MjA3MzYwNjA3MH0.loilXskv4OAjvukXrAi_NFg_BsKCiC7Ze5ItW7c8whs";

// Legal banner for footer (EN)
const LEGAL_BANNER = "© VaultX Investment Club. All rights reserved. Unauthorized use or reproduction is strictly prohibited.";

// Investment tiers — ✅ mapping corect din proiectul inițial (procente DESC)
const VAULTX_TIERS = [
  { capital: 100,    pct: 0.40 }, // 40%
  { capital: 250,    pct: 0.35 }, // 35%
  { capital: 500,    pct: 0.30 }, // 30%
  { capital: 1000,   pct: 0.25 }, // 25%
  { capital: 2500,   pct: 0.20 }, // 20%
  { capital: 5000,   pct: 0.15 }, // 15%
  { capital: 10000,  pct: 0.10 }  // 10%
];

// Elite subscription info
const ELITE_PRICE = 100;                  // price per month
const ELITE_RAFFLE_PRIZE_USDT = 200;      // daily raffle prize
const ELITE_RAFFLE_PER_MEMBERS = 120;     // 1 prize per this many members

// Optional contact link
const TELEGRAM_CONTACT = "https://t.me/VaultXClub";