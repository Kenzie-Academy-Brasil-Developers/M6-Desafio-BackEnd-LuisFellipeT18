
# Desafio Fullstack

Esse é um projeto baseado em uma agenda virtual, onde é possivel armazenar contatos, atravez de um usuario criado.




## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run build

  vercel deploy
```



## Contribuindo

Esse projeto é divido em duas Pastas , BackEnd e FrontEnd, cada diretório possui a sua inicialização. 

Para começar já na pagina do github, na page do repositório, click no botão verde Code, em seguica click no icone Copy url to clipboard, para copiar o repositório, va no terminal da sua maquina e intaleo repositorio com o comando :
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


## Acessando o FrontEnd 
No seu terminal , dentro do diretório do frontEnd - para rodar digite no terminal
$ git install <Enter>
$ npm run dev <Enter>

A aplicação estara rodando - Exemplo: 
 VITE v5.0.12  ready in 353 ms

  ➜  Local:   http://localhost:5175/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

  Basta Clicar no link e a aplicação abrira no navegador. Atenção apenas funcionará com o BackEnd iniciado e rodando. 

ATT: conferir se a porta é a mesma configurada no BackEnd/Src/main :
app.enableCors({origin:"http://localhost:5175"})


## Acessando o BackEnd 
No seu terminal , dentro do diretório do frontEnd - para rodar digite no terminal
$ git install <Enter>
$ npm run start:dev <Enter>

A aplicação estara rodando - Exemplo: 
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts, POST} route +1ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts, GET} route +0ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts/:id, GET} route +0ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts/:id, PATCH} route +1ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [RouterExplorer] Mapped {/contacts/:id, DELETE} route +0ms
[Nest] 18691  - 07/02/2024, 14:36:41     LOG [NestApplication] Nest application successfully started +55ms

## Realizando as migrações - BackEnd
npx prisma migrate dev





