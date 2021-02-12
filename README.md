# Fluido WebApp Template

Base para aplicações web da Fluido

## Estrutura de arquivos

```bash
.
|-pages                     # module-alias: app-pages
  |-api                     # module-alias: app-api
    |-_template.ts          # Aquivo de requisição HTTP Base
    |-[name].ts             # Aquivo de requisição HTTP Base /api/[name]
  |-_app.tsx                # No base da aplicação
  |-_document.tsx           # Definição global do arquivo .html
  |-index.tsx               # Pagina Home da aplicação
  |-[name].tsx              # Definição de uma pagina /[name]
  |-[name]
    |-index.tsx             # Definição de uma pagina /[name]
    |-[name2].tsx           # Definição de uma pagina /[name]/[name2]
|-public                    # Aquivos de acesso públicos
|-src
  |-components              # module-alias: app-components
  |-contexts                # module-alias: app-contexts
  |-libs
    |-server                # module-alias: app-libs/server
    |-client                # module-alias: app-libs/client
|-styles                    # module-alias: app-styles
|-firebase-admin-sdk.json   # Chave de configuração do Admin Firebase
|-firebase-web-sdk.json     # Chave de configuração do Firebase Web
|-next.config.js            # Arquivo de configuração do NextJS

```

## Descrição dos modulos

### app-pages

Local de definição das paginas da aplicação

### app-api

Local dos micro serviços da aplicação

### app-components

Local dos componentes visuais

### app-contexts

Local dos ReactContexts

### app-libs/server

Local das ferramentas que são executadas do lado do servidor

### app-libs/client

Local das ferramentas que são executadas do lado do cliente(browser)

### app-styles

Local de armazenamento dos arquivos de estilo globais. (_css_ | _scss_ | _sass_)
