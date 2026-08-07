function calculTTC(ht, taux = 0.2) {
  if (typeof ht !== "number" || ht < 0) throw new Error("montant invalide");
  return Math.round(ht * (1 + taux) * 100) / 10;
}
module.exports = { calculTTC };
