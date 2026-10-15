# Registro de Testes de Integração

Aluno: Maria Fernanda Bighi Siqueira

Grupo: 3

Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes-api-3

Por que ele é separado do banco da API: Ele é separado para evitar que os testes modifiquem, poluam ou apaguem os dados reais de desenvolvimento e produção do sistema.

## Testes escritos

| #   | Arquivo                          | O que o teste verifica                                         | Verde ou vermelho? |
| --- | -------------------------------- | -------------------------------------------------------------- | ------------------ |
| 1   | participante.integration.test.js | Gravação correta de participante com nome e e-mail válidos     | Verde              |
| 2   | participante.integration.test.js | Rejeição de participante com e-mail inválido (sem @)           | Verde              |
| 3   | evento.integration.test.js       | Rejeição de evento com nome de apenas 2 letras                 | Verde              |
| 4   | evento.integration.test.js       | Gravação correta de evento válido no banco                     | Verde              |
| 5   | evento.integration.test.js       | Gravação do evento com o nome correto enviado                  | Verde              |
| 6   | participante.integration.test.js | Atualização correta do nome do participante no banco (Desafio) | Vermelho           |

## Resultado

Linha "Tests:" da saída do npm run test:integration:
Tests:       1 failed, 5 passed, 6 total

## Defeito encontrado

Teste: ParticipanteService.atualizar (integração) > grava o nome novo no banco

Esperado: "Ana Maria"

Obtido: "Ana"

O que o usuário da API veria (a rota responde 200, mas...): O usuário veria uma mensagem de sucesso com o código status 200, dando a falsa impressão de que o nome foi alterado, mas, ao consultar novamente, veria que o nome continuou o antigo no banco de dados.
