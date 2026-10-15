// tests/integration/evento.integration.test.js
const { sequelize, Evento } = require("../../src/models");
const EventoService = require("../../src/services/EventoService");
const { ValidationError } = require("../../src/errors/AppError");
const limparBanco = require("../helpers/limparBanco");

beforeEach(async () => {
  await limparBanco();
});

afterAll(async () => {
  await sequelize.close();
});

describe("EventoService.criar (integração)", () => {

  // 1. TESTE QUE ESTAVA FALTANDO NO SEU ARQUIVO PARA FECHAR OS 5 TOTAIS:
  it("grava um evento válido", async () => {
    const dados = { nome: "Workshop de Node", data: "2026-10-25" };
    const criado = await EventoService.criar(dados);
    expect(criado.id).toBeDefined();
  });

  // 2. Teste existente do seu arquivo
  it("não grava evento com nome de 2 letras", async () => {
    const dados = { nome: "TI", data: "2026-10-15" };

    await expect(EventoService.criar(dados)).rejects.toThrow(ValidationError);

    const total = await Evento.count();
    expect(total).toBe(0);
  });

  // 3. Teste que você completou perfeitamente (Parte 3)
  it("grava o evento no banco com o nome correto", async () => {
    const dados = { nome: "Semana de Tecnologia", data: "2026-11-20" };

    const criado = await EventoService.criar(dados);

    const doBanco = await Evento.findByPk(criado.id);

    expect(doBanco).not.toBeNull();
    expect(doBanco.nome).toBe(dados.nome);
  });
});
