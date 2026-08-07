const request = require("supertest");
const app = require("../src/server");

describe("API manufacture", () => {
  test("GET /health répond ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /ttc calcule correctement", async () => {
    const res = await request(app).get("/ttc?ht=100");
    expect(res.status).toBe(200);
    expect(res.body.ttc).toBe(120);
  });
});
