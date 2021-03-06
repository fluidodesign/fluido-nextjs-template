# Fluido WebApp Template

Base para aplicações web da Fluido

## Estrutura de arquivos

```bash
.
|-📁 config                    # module-alias: app-config
  |-📁locales                  # Arquivos em json para carregar linguagem
  |-📄 firebase-admin-sdk.json # Chave de configuração do Admin Firebase
  |-📄 firebase-web-sdk.json   # Chave de configuração do Firebase Web
  |-📄 locale.json             # Arquivo de configuração de multilinguagem
|-📁 public                    # Aquivos de acesso públicos
|-📁 src
  |-📁 client                  # module-alias: app-client
  |-📁 components              # module-alias: app-components
  |-📁 hooks                   # module-alias: app-hooks
  |-📁 pages                   # module-alias: app-pages
    |-📁 api                   # module-alias: app-api
      |-📄 _template.ts        # Aquivo de requisição HTTP Base
      |-📄 [name].ts           # Aquivo de requisição HTTP Base /api/[name]
    |-📄 _app.tsx              # No base da aplicação
    |-📄 _document.tsx         # Definição global do arquivo .html
    |-📄 index.tsx             # Pagina Home da aplicação
    |-📄 [name].tsx            # Definição de uma pagina /[name]
    |-📁 [name]
      |📄 -index.tsx           # Definição de uma pagina /[name]
      |📄 -[name2].tsx         # Definição de uma pagina /[name]/[name2]
  |-📁 server                  # module-alias: app-server
  |-📁 styles                  # module-alias: app-styles
|-📄 next.config.js            # Arquivo de configuração do NextJS
```

## Descrição dos modulos

### app-config

Local de arquivos de configurações

### app-pages

Local de definição das paginas da aplicação

### app-api

Local dos micro serviços da aplicação

### app-components

Local dos componentes visuais

### app-hooks

Local dos [HookStates](https://hookstate.js.org/) globais

### app-server

Local das ferramentas que são executadas do lado do servidor

### app-client

Local das ferramentas que são executadas do lado do cliente(browser)

### app-styles

Local de armazenamento dos arquivos de estilo globais. (_css_ | _scss_ | _sass_)
