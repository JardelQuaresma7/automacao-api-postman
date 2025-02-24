# Automação de Testes de API com Cypress e Postman

Este repositório contém um projeto simples de automação de testes de API desenvolvido durante um bootcamp. O objetivo é integrar o Cypress com o Postman para validar endpoints de uma API de forma automatizada.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes automatizados
- [Postman](https://www.postman.com/) - Ferramenta para requisições e testes de API
- [Newman](https://www.npmjs.com/package/newman) - Executor de coleções do Postman via linha de comando
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## Estrutura do Projeto

```
automacao-api-postman/
├── cypress/
│   ├── e2e/
│   │   ├── api-tests/
│   ├── support/
│   ├── fixtures/
├── collections/
│   ├── api-collection.json
├── cypress.config.js
├── package.json
├── README.md
```

- `cypress/e2e/api-tests/`: Contém os testes automatizados de API.
- `collections/api-collection.json`: Coleção de testes do Postman.
- `cypress/support/`: Arquivos de suporte e configurações adicionais.
- `cypress/fixtures/`: Dados estáticos usados nos testes.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Postman](https://www.postman.com/) para criar e testar APIs manualmente

## Instalação

Siga os passos abaixo para configurar o ambiente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/JardelQuaresma7/automacao-api-postman.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd automacao-api-postman
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Executando os Testes

### Cypress

Para executar os testes automatizados da API usando Cypress:

- Abra a interface do Cypress:

  ```bash
  npx cypress open
  ```

  ou

  ```bash
  yarn run cypress open
  ```

- Execute os testes em modo headless:

  ```bash
  npx cypress run
  ```

  ou

  ```bash
  yarn run cypress run
  ```

### Newman (Postman CLI)

Para rodar os testes do Postman via linha de comando com Newman:

```bash
newman run collections/api-collection.json -e collections/environment.json
```

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar os testes ou adicionar novas funcionalidades:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
