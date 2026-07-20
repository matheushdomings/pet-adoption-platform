const request = require("supertest");
const app = require("../src/app");

describe("Teste da rota inicial", () => {
  it("deve retornar mensagem do servidor", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Servidor atualizado pelo nodemon");
  });
});