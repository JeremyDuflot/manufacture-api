function calculTTC(ht, taux = 0.2) {
  if (typeof ht !== "number" || ht < 0) throw new Error("montant invalide");
  return Math.round(ht * (1 + taux) * 100) / 100;
}

function calculRemise(ht, pourcentage) {
  return Math.round(ht * (1 - pourcentage) * 100) / 100;
}

function appliquerCoupon(ht, code) {
  if (code === "PROMO10") return calculRemise(ht, 0.1);
  if (code === "PROMO20") return calculRemise(ht, 0.2);
  return ht;
}

module.exports = { calculTTC, calculRemise, appliquerCoupon };
