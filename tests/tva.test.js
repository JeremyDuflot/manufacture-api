const { calculTTC, calculRemise, appliquerCoupon } = require("../src/tva");

describe("calculTTC", () => {
  test("calcule correctement un montant TTC standard", () => {
    expect(calculTTC(100, 0.2)).toBe(120);
  });

  test("rejette un montant invalide", () => {
    expect(() => calculTTC("abc", 0.2)).toThrow("montant invalide");
  });

  test("rejette un montant négatif", () => {
    expect(() => calculTTC(-10, 0.2)).toThrow("montant invalide");
  });

  test("applique un taux réduit", () => {
    expect(calculTTC(100, 0.055)).toBe(105.5);
  });

  test("arrondit correctement au centime", () => {
    expect(calculTTC(19.99, 0.2)).toBe(23.99); // 19.99*1.2 = 23.988
  });
});

describe("calculRemise", () => {
  test("applique correctement un pourcentage de remise", () => {
    expect(calculRemise(100, 0.1)).toBe(90);
  });
});

describe("appliquerCoupon", () => {
  test("applique le code PROMO10", () => {
    expect(appliquerCoupon(100, "PROMO10")).toBe(90);
  });

  test("applique le code PROMO20", () => {
    expect(appliquerCoupon(100, "PROMO20")).toBe(80);
  });

  test("retourne le prix sans remise si le coupon est inconnu", () => {
    expect(appliquerCoupon(100, "INVALIDE")).toBe(100);
  });
});
