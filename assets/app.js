/* ===== Funcții logice VaultX ===== */

/**
 * Returnează procentul de profit brut pentru un capital dat
 */
function tierPercent(cap){
  const t = VAULTX_TIERS.find(x => x.capital === cap);
  return t ? t.pct : 0;
}

/**
 * Calculează profitul complet (brut, după taxe)
 */
function calcProfit(capital){
  const pct = tierPercent(capital);
  if(!pct) return null;

  const brut = capital * pct;         // profit brut
  const mgmt = brut * MGMT_FEE;       // taxă gestiune
  const afterMgmt = brut - mgmt;      // profit după gestiune
  const withdraw = afterMgmt * WITHDRAW_FEE; // taxă retragere
  const finalNet = afterMgmt - withdraw;     // profit final

  return {
    pct,         // procent brut
    brut,        // profit brut
    mgmt,        // taxa gestiune
    afterMgmt,   // după gestiune
    withdraw,    // taxa retragere
    finalNet     // profit final
  };
}