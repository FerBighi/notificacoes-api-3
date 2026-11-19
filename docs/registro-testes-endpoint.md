# Registro de Testes de Endpoint

Aluno: Maria Fernanda
Grupo: 3

## Testes escritos

| #   | Verbo e rota     | Com token? | Status esperado | Verde ou vermelho? |
| --- | ---------------- | ---------- | --------------- | ------------------ |
| 1   | POST /eventos    | Sim        | 201             | Verde              |
| 2   | GET /eventos/:id | Não        | 404             | Verde              |
| 3   | GET /eventos/:id | Não        | 400             | Vermelho           |

## Resultado

Linha "Tests:" da saída do npm run test:endpoint: `Tests: 1 failed, 4 passed, 5 total`

## Defeito encontrado

Teste: `responde 400 quando o id tem letras` (`GET /eventos/:id` enviando um ID numérico seguido de letras, como `${evento.id}abc`)
Esperado: `400` (Bad Request / erro de validação por ID inválido)
Obtido: `200` (a API aceitou o parâmetro com letras e retornou o evento correspondente à parte numérica do ID)
Em qual aula esse mesmo defeito já tinha aparecido, e como: Na Aula 04 (testes unitários), na função `parseId` (ex.: `parseId("12abc")`), que utiliza `parseInt` e extrai apenas os números iniciais da string (`12`), ignorando as letras no final em vez de rejeitar a entrada como inválida.