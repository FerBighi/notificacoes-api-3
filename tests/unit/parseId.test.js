// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
    // Exemplo do professor
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

    // SEU DESAFIO PREENCHIDO:
    it("lança ValidationError quando o id contém letras misturadas (12abc)", () => {
        // Esperamos que o sistema barre e lance um erro para "12abc"
        expect(() => parseId("12abc")).toThrow(ValidationError);
    });
});
