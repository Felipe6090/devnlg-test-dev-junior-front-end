# devnlg-test-dev-junior-front-end

## Geral

# Este projeto é parte de um processo seletivo para uma vaga para dev junior

## Tecnologias usada e Observações

Decidi por usar nextJS para desenvolver o projeto no front e, node com express para o back

# Infelizmente não consegui terminar o projeto a tempo

Com certeza o projeto não está nem perto de estar pronto, mas como eu recebi a oportunidade de participar do processo seletivo no dia 15/03 e, por conta de alguns acontecimentos, só pude começar no dia 21.

# Serviço de filtro e de compra não foram feitos

para ser mais exato neste commit eu estava fazendo o getStaticPathS da página do perfil do usuario, acho que precisaria de mais uma semana para deixar o projeto redondo, sem bug, com a melhor otimização que o NextJs pode oferecer e com o docker-compose e os docker-files prontos.

# Se tiver interresse tenho alguns projetos com docker compose no meu github!

utilizei styled components para a estilização, pois é a melhor opção na minha opnião

## Coisa que irei fazer no projeto

-focaria totalmente no front-end/design, terminaria todas as telas e depois implementaria as funcionalidades no back, pelo tempo disponivel acabei trabalhando no back e fron ao mesmo tempo, isso deixa as coisas um pouco confusas.

- depois de todas as funcionalidades estarem rodando 100% pretendo focar em refatorar e usar melhor os recursos do next.


# Documentação no postman das rotas do em relação ao back-end:
- https://go.postman.co/workspace/My-Workspace~911c1026-49f5-4d25-8d01-70ca4b57ccb4/collection/20287582-8663f1f3-2313-4a61-a472-cd3a9c90a8ad?action=share&creator=20287582


## Como testar

## É nescessario ter docker para rodar o banco de dados!!

# como usar o banco de dados

como não tive tempo de fazer um docker compose, você poder rodar o BD assim:

- baixe a imagem do mysql:5.7

- crie uma pasta mysql no diretorio de preferência 

- abra o powershell e rode o comando: docker run -e MYSQL_ROOT_PASSWORD=root -v {CAMINHO DA PASTA CRIADA}\mysql:/var/lib/mysql -p 3306:3306  mysql:5.7

# Dica: depois de criar a pasta mysql, copie o diretorio dela direto da pasta para facitar

- após isso terá que ser executado um comando para configurar o prisma, mas isso fica para depois

## Rodando o Back e o Front

- Clone o repositorio;

- Abra a aba web e back-end em dois terminais diferentes;

- instale as dependências com "npm i";

# Rode Somente no back-end: "npx prisma migrate dev"

- isso vai configura o prisma, irá pedir um nome para a migration, use o que quiser

- "npm run dev" para rodar;
