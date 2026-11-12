const { sequelize, Participante } = require("../../src/models");

const ParticipanteService = require("../../src/services/ParticipanteService");

const limparBanco = require("../helpers/limparBanco");

// Antes de CADA teste: banco vazio

beforeEach(async () => {

  await limparBanco();

});

// Depois de TODOS os testes do arquivo: fecha a conexão com o banco

afterAll(async () => {

  await sequelize.close();

});

describe("ParticipanteService.criar (integração)", () => {

  it("grava o participante no banco com nome e e-mail corretos", async () => {

    // Arrange

    const dados = { nome: "Ana Souza", email: "ana@senai.br" };

    // Act

    const criado = await ParticipanteService.criar(dados);

    // Assert: busca de novo NO BANCO, não confia no objeto devolvido

    const doBanco = await Participante.findByPk(criado.id);

    expect(doBanco).not.toBeNull();

    expect(doBanco.nome).toBe("Ana Souza");

  });

  describe("ParticipanteService.atualizar (integração)", () => {

    it("grava o nome novo no banco", async () => {

      // Arrange: criem um participante "Ana", e-mail "ana@senai.br"
      const dadosIniciais = { nome: "Ana", email: "ana@senai.br" };
      const participanteCriado = await ParticipanteService.criar(dadosIniciais);

      // Act: atualizem o nome para "Ana Maria"
      await ParticipanteService.atualizar(participanteCriado.id, { nome: "Ana Maria" });

      // Assert: busquem o participante no banco e confiram se o nome é "Ana Maria"
      const doBanco = await Participante.findByPk(participanteCriado.id);

      expect(doBanco).not.toBeNull();
      expect(doBanco.nome).toBe("Ana Maria");

    });

  });

  it("não grava participante com e-mail inválido", async () => {

    // Arrange: um participante com e-mail SEM @
    const dados = { nome: "Bruno", email: "brunoinvalido.com" }; // <- Preenchido sem o '@'

    // Act + Assert: a gravação precisa ser recusada
    await expect(ParticipanteService.criar(dados)).rejects.toThrow();

    // Assert no banco: se a gravação falhou, NENHUM participante novo foi salvo.
    const total = await Participante.count();
    expect(total).toBe(0); // <- Preenchido com 0

  });

  it("não grava participante com e-mail inválido", async () => {
    // Arrange: um participante com e-mail SEM @
    const dados = { nome: "Bruno", email: "bruno.senai.br" };

    // Act + Assert: a gravação precisa ser recusada
    await expect(ParticipanteService.criar(dados)).rejects.toThrow();

    // Assert no banco: nada foi gravado
    const total = await Participante.count();
    expect(total).toBe(0);
  });
});

// DESAFIO (Aula 05): a rota PUT /participantes/:id responde 200,
// mas o nome novo chega de verdade ao banco?
// Este teste fica VERMELHO de propósito: ParticipanteService.atualizar
// ainda não foi implementado. Não corrigir — é a evidência do defeito.
describe("ParticipanteService.atualizar (integração)", () => {
  it("grava o nome novo no banco", async () => {
    // Arrange
    const criado = await ParticipanteService.criar({
      nome: "Ana",
      email: "ana@senai.br",
    });

    // Act
    await ParticipanteService.atualizar(criado.id, { nome: "Ana Maria" });

    // Assert
    const doBanco = await Participante.findByPk(criado.id);
    expect(doBanco.nome).toBe("Ana Maria");
  });
});
