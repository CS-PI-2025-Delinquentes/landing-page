## 👥 Integrantes

| Nome           | Função        | GitHub       | Responsabilidades                                                                                        |
| -------------- | ------------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| Arthur Teruel  | Product Owner | @httpteruel  | Define e prioriza o backlog, representa o cliente e esclarece requisitos                                 |
| Isaque Dias    | Scrum Master  | @isqdev      | Facilita o processo, remove impedimentos, garante o uso correto do Scrum, e faz a prototipação de telas  |
| Gregory Soares | Desenvolvedor | @Gregory-SF  | Desenvolve o produto, estima tarefas e trabalha de forma colaborativa                                    |
| Leandro Menoni | Desenvolvedor | @MenoniJesus | Desenvolve o produto, estima tarefas e trabalha de forma colaborativa                                    |
| Pedro Lino     | Desenvolvedor | @PedrooLino  | Desenvolve o produto, estima tarefas e trabalha de forma colaborativa                                    |
## 🎯 Objetivo
Criar uma landing page para divulgar o software que será desenvolvido futuramente com um cliente real. Este projeto serve como preparação para o desenvolvimento completo.
## 🛠️ Ferramentas

| Ferramenta          | Utilidade                                                      |
| ------------------- | -------------------------------------------------------------- |
| GitHub              | Versionamento, hospedagem e acompanhamento das tarefas do time |
| Discord/Google Meet | Reuniões                                                       |
| Figma               | Criação do protótipo da landing page                           |
| VS Code             | Ambiente de desenvolvimento do projeto                         |
| Dontpad             | Acesso rápido a links relevantes para o projeto                |
| Notion              | Manual de processos e melhores práticas                        |

## 📝 Padrões de Código

### Regras gerais
- Nome de funções, variáveis e arquivos, exclusivamente em inglês

### Funções 
- camelCase
- nomes simples e descritivos, os nomes podem ser grandes
- começar com verbo
- funções com retorno booleano começam com "is", "has", "can" ou "should"

Exemplos: 
- validateLogin()
- isUserActive()
- validateFormDataBeforeSubmission()
- processCheckoutAndCreateOrder()

### Variáveis
- camelCase
- nomes simples e descritivos, os nomes podem ser grandes
- usar substantivo
- variáveis booleanas começam com "is", "has", "can"

Exemplos:
- const isUserOnline = true;
- const counter;;
- const totalPriceWithDiscountAndTaxes;

### Classes CSS
- kebab-case
- nomes simples, geralmente curtos

Exemplos:
- card-title
- card-image
- profile

## Clean Code
“Qualquer um consegue escrever código que um computador entende. Bons programadores escrevem código que humanos entendem.” - Martin Fowler.

### O que fazer
- Manter o código consistente, seguir as nomenclaturas e padrões de código
- Manter o código e diretório de arquivos organizados
- Adicionar linhas em brancos entre diferentes conceitos 
- Identar código

- Uma função deve fazer uma única ação
- Criar funções para validar dados e tratar erros
- Nome da função junto ao parênteses

- Manter números em variáveis que descrevem seu significado
- Definir nomes simples e descritivos

### O que NÃO fazer
- Repetir código
- Escrever comentários
- Usar "números mágicos" (números não associados a uma variável)
- Retornar "Null" em uma função
