# Listagem de carros

Nesse projeto foi feito uma tela, com componente de listagem de carros e a possibilidade de criação, edição e deleção dos carros.

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)

## Sobre

O projeto foi pensado para ser uma máquina de estados para transitar entre telas, porém no momento só possui uma tela (a de carros).
Nele será listado todos os carros cadastrados agrupados por marca.
E será possível criar novos carros, editar e deletar carros já criados.

## Tecnologias Utilizadas

Foi usado para o servidor Node + Express, e no cliente NextJs com CSS Modules.

## Como Usar

Inicialmente é necessário instalar as dependências do "app" e do "appserver".
```
npm install
```
Para executar é necessário fazer o "build" do app antes de iniciar.
No /app:
```
npm run build
npm run start
```
No /appserver:
```
npm run start
```
