const { calculTTC } = require("../src/tva");

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

  test("accepte un montant nul", () => {
    expect(calculTTC(0, 0.2)).toBe(0);
  });
});
