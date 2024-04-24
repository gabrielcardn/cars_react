# Lista de Carros

Este projeto consiste em uma aplicação web com uma tela de listagem de carros, oferecendo funcionalidades de criação, edição e exclusão de carros.

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)

## Sobre

Este projeto foi inicialmente concebido como uma máquina de estados para transitar entre telas, embora atualmente apresente apenas uma tela, a de listagem de carros.
Na tela, todos os carros cadastrados são exibidos, agrupados por marca. Além disso, é possível criar novos carros, editar e excluir carros já existentes.
A persistência do cadastro dos carros está sendo feita pela manipulação de um arquivo .json localizado em: /appserver/services/queries/cars/cars.json

## Tecnologias Utilizadas

Para o servidor, foi utilizado Node.js com Express, enquanto no cliente foi empregado Next.js com CSS Modules.

## Como Usar

Para começar, é necessário instalar as dependências tanto do aplicativo(/app) quanto do servidor(/appserver).

```bash
npm install
```

Antes de iniciar, é necessário realizar o build do aplicativo.

No diretório /app:

```bash
npm run build
npm run start
```

No diretório /appserver:

```bash
npm run start
```

Após acessar a tela de listagem de carros, você poderá:

- Criar um novo carro clicando no botão "criar", preenchendo os campos do formulário e clicando em "salvar".
- Editar um carro existente clicando no cartão referente ao carro na lista, alterando o(s) campo(s) no formulário e clicando em "salvar".
- Deletar um carro clicando no cartão referente ao carro na lista, clicando em "deletar" e confirmando.
