function calculRemise(ht, pourcentage) {
  return Math.round(ht * (1 - pourcentage) * 100) / 100;
}
function appliquerCoupon(ht, code) {
  if (code === "PROMO10") return calculRemise(ht, 0.1);
  if (code === "PROMO20") return calculRemise(ht, 0.2);
  return ht;
}
module.exports = { calculTTC, calculRemise, appliquerCoupon };
