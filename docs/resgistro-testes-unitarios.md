# Registro de Testes Unitários
Aluno: MARIA FERNANDA
Grupo: GRUPO 3
Data: 24/09/2026

## Testes escritos

| #   | Arquivo            | O que o teste verifica                                                     | Tipo            |
| --- | ------------------ | -------------------------------------------------------------------------- | --------------- |
| 1   | validators.test.js | Não retorna erro para um e-mail válido                                     | sucesso         |
| 2   | validators.test.js | Retorna mensagem de erro para e-mail sem @                                 | falha           |
| 3   | validators.test.js | Aceita um texto com o tamanho exatamente igual ao mínimo ("Ana", mínimo 3) | borda           |
| 4   | parseId.test.js    | Lança ValidationError quando o id contém letras misturadas ("12abc")       | desafio / falha |

## Resultado
Passaram: 3 (ambiente + os 3 de validators)
Falharam: 1 (o desafio do parseId, indicando o defeito)

## Defeito encontrado
**Teste:** parseId - lança ValidationError quando o id contém letras misturadas (12abc)
**Esperado:** Que a função lançasse um erro `ValidationError` por conter letras e rejeitasse o ID.
**Obtido:** O teste falhou porque a função aceitou o ID "12abc" como um número válido, ignorando as letras.

## Cobertura
**% Lines da linha "helpers":** [COLOQUE AQUI O NÚMERO QUE APARECEU NO TERMINAL]%
**Em uma frase, o que esse número significa:** Esse número representa a porcentagem de linhas de código das funções da pasta "helpers" que foram executadas e validadas pelos nossos testes unitários.