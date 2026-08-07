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
});
