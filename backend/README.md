<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Code Challenge - Serviço de Usuário

Este projeto é parte de um desafio para testar seus conhecimentos em desenvolvimento backend e frontend com Typescript, utilizando Node.js com Nest.js no backend e React.js com TypeScript no frontend. O objetivo é criar um serviço de usuário com operações de CRUD básicas.

## Funções obrigatórias

- **Endpoints**:

  - [] Deve ser possível criar usuário;
  - [] Deve ser possível atualizar usuário;
  - [] Deve ser possível deletar usuário;
  - [] Deve ser possível buscar todos os usuários;
  - [] Deve ser possível buscar um único usuário pelo seu ID.

- **Guard no método DELETE**: 

  - [] Adicionar um guard na request do método DELETE para verificar se o parâmetro "access-token" foi fornecido no header, e o seu valor deve ser "meegu". Caso o valor não seja fornecido ou seja diferente de "meegu", a deleção do usuário não será permitida.

- **Validações no método POST**: 

  - No método POST, realizar as seguintes validações nos parâmetros de entrada do body:
    - [] name: uma string obrigatória com no mínimo 2 caracteres e no máximo 100;
    - [] birthdate: uma data obrigatória;
    - [] zipcode: uma string obrigatória;
    - [] acceptedTerms: um booleano.

- **Busca de informações do CEP**: 
  
  - [] Antes de armazenar os dados do usuário, buscar informações sobre o logradouro, bairro, cidade e estado com base no CEP fornecido. Isso pode ser feito realizando uma requisição para uma API pública de busca de CEP, utilizando o ZIPCODE enviado no body. Por exemplo, utilizar a API pública "https://viacep.com.br/ws/01001000/json/" para consultar o CEP 01001000.

- **Atualização de data/hora**: 

  - [] No momento da atualização de um usuário, inserir a data/hora da atualização no campo updatedAt.

## Instruções de execução

Siga as instruções abaixo para iniciar o projeto:

Em construção...

## Pontos Extras

- [] Armazenamento em banco de dados MySQL utilizando o Docker Compose;
- [] Utilização do ORM Prisma;io para facilitar o acesso e manipulação dos dados no banco de dados relacional;
- [] Inclusão de regras de Lint no projeto para garantir a consistência e qualidade do código;
- [] Validação de idade no método POST, verificando se o usuário tem pelo menos 18 anos para efetuar o cadastro;
- [] Escrita de pelo menos 1 teste unitário para cada função do CRUD;
- [] Criação de uma collection no Postman com todas as requests;
- [] Adição de filtro pelo nome no método GET utilizando query parameters;
- [] Observar os códigos HTTP de retorno para as operaçõe da API;
- [] Exibir as mensagens de confirmação e/ou erro obtidos em cada operação do CRUD.