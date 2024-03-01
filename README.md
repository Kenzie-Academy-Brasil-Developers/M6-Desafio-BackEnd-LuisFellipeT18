```bash
# Desafio Fullstack

Esse é um projeto baseado em uma agenda virtual, onde é possivel armazenar contatos, atravez de um usuario criado.

# Documentação do projeto : API 
http://localhost:3000/api

# Para visualizar a app no vercel click:
https://desafio-beck-end-luisfellipet18.vercel.app

Lembre-se inicialmente na pasta BackEnd/src/mains=.ts 
nesta parte do codigo:
app.enableCors({}) esta assim para poder acessar o link do vercel. 
para que a app funcione localmente va na pasta BackEnd/src/mains=.ts 
nesta parte do codigo:
app.enableCors({origin:"http://localhost:5174"})
e salve o projeto - somente assim poderá visualizar a pagina localmente

```bash
## Configuração do ambiente

O arquivo `.env.example` é um exemplo de como configurar as variáveis de ambiente necessárias para o funcionamento do projeto. Antes de iniciar o projeto, é necessário criar um arquivo `.env` com base neste exemplo e preencher as informações relevantes.

### Passos para configuração:

Faça uma cópia do arquivo `.env.example` e renomeie-o para `.env`.
Abra o arquivo `.env` em um editor de texto.
Preencha as variáveis de ambiente com as informações apropriadas para o seu ambiente de desenvolvimento. As variáveis comuns incluem:
  ➜ `DATABASE_URL`: A URL de conexão com o banco de dados.
  ➜ `SECRET_KEY`: Uma chave secreta usada para assinar tokens de autenticação, etc.
Salve o arquivo `.env`.

Certifique-se de não compartilhar o arquivo `.env` contendo informações sensíveis, como senhas e chaves secretas, em repositórios públicos. É uma boa prática manter o arquivo `.env` listado no arquivo `.gitignore` para evitar seu rastreamento pelo controle de versão.

Para mais detalhes sobre as variáveis de ambiente suportadas e suas configurações, consulte a documentação do projeto.


## Contribuindo

Esse projeto é divido em duas Pastas , BackEnd e FrontEnd, cada diretório possui a sua inicialização. 

Para começar já na pagina do github, na page do repositório, click no botão verde Code, em seguica click no icone Copy url to clipboard, para copiar o repositório, va no terminal da sua maquina e clone o repositorio com o comando :
$ git clone <link_copiado>

Abra o a pasta do aquivo no seu programa de desenvolvimento - exemplo VS Code. 

## Navegando nos diretórios
é preciso rodar cada uma das aplicaçoes para ter acesso interno da app
Já dentro da pasta DESAFIO-BACK-BackEnd
digite no terminal:
$ ls 

$ cd BackEnd - <Enter>- acessa o diretorio do BackEnd

$ cd FrontEnd - <Enter> 
acessa o diretorio do FrontEnd 

A Aplicação necessita que tenha dois terminais abertos, um para o FrontEnd e outro para o BackEnd.

## Acessando o BackEnd 
No seu terminal , dentro do diretório do BackEnd - para rodar digite no terminal


$ npm install <Enter>

## Realizando as migrações - BackEnd
npx prisma migrate dev

$ npm run start:dev <Enter>

A aplicação estara rodando - Exemplo: 
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts, POST} route +1ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts, GET} route +0ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts/:id, GET} route +0ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts/:id, PATCH} route +1ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts/:id, DELETE} route +0ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [NestApplication] Nest application successfully started +55ms

## Acessando o FrontEnd 
No seu terminal , dentro do diretório do frontEnd, execute os seguintes comandos:
Esse comando é utilizado para instalar as dependências do projeto.
$ npm install <Enter>
Em seguida, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento do frontend.
$ npm run dev <Enter>

Certifique-se de que o backend esteja em execução antes de iniciar o frontend.

A aplicação estara rodando - Exemplo: 
 VITE v5.0.12  ready in 353 ms

  ➜  Local:   http://localhost:5175/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

  Basta Clicar no link e a aplicação abrira no navegador. Atenção apenas funcionará com o BackEnd iniciado e rodando. 

ATT: conferir se a porta é a mesma configurada no BackEnd/Src/main :
app.enableCors({origin:"http://localhost:5175"})







