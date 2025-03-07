﻿## Documentação do Sistema de Gerenciamento de Notas Fiscais

Este sistema foi projetado para facilitar o gerenciamento de notas fiscais, permitindo que você crie, edite, visualize e exclua notas fiscais, clientes, produtos e empresas. Ele também oferece recursos para controlar usuários e suas permissões.

#### login: admin.
#### senha: admin.

[Visualizar Online](https://nfesystem.guilhermejp.com)

### Tecnologias utilizadas

**Backend:**

* Node.js
* Express.js
* Knex.js
* SQLite

**Frontend:**

* React
* Vite
* React Router
* Axios

### Instalação

**Backend:**

1. Clone o repositório: `git clone https://github.com/Maxtherox/nfe-system-2025.git`
2. Instale as dependências: `npm install`
3. Exclua o bando de dados antigo em: `/src/database/database.db`
4. Crie o banco de dados: `npx knex migrate:latest`
5. Inicie o servidor: `npm run dev`

**Frontend:**

1. Navegue até o diretório frontend: `cd frontend`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`

### API

**Rotas:**

* `/clients`: Gerencia clientes (criar, listar, editar, deletar)
* `/companies`: Gerencia empresas (criar, listar, editar, deletar)
* `/nfe`: Gerencia notas fiscais (criar, listar, editar, deletar)
* `/products`: Gerencia produtos (criar, listar, editar, deletar)
* `/sessions`: Gerencia sessões de usuários (login)
* `/users`: Gerencia usuários (criar, listar, editar, deletar)

**Autenticação:**

As rotas protegidas exigem um token de autenticação JWT no cabeçalho da requisição.

### Estrutura do banco de dados

**Tabelas:**

* `users`: Armazena informações dos usuários (nome, email, senha, papel).
* `clients`: Armazena informações dos clientes (nome, email, telefone).
* `companies`: Armazena informações das empresas (nome, cnpj, endereço).
* `nfe`: Armazena informações das notas fiscais (número, data, valor, cliente, empresa, produtos).
* `products`: Armazena informações dos produtos (nome, descrição, preço).

### Estrutura de Pastas

**Backend:**

```
backend/
├── src/
│   ├── Controllers/         # Controladores da API
│   ├── database/            # Configurações e migrações do banco de dados
│   ├── middlewares/         # Middlewares da aplicação
│   ├── routes/              # Rotas da API
│   ├── utils/               # Funções utilitárias
│   ├── server.js            # Arquivo principal do servidor
│   └── AppError.js          # Classe para tratamento de erros
└── ...                      # Outros arquivos de configuração
```

**Frontend:**

```
frontend/
├── src/
│   ├── pages/               # Páginas da aplicação
│   ├── components/          # Componentes React
│   ├── routes/              # Rotas da aplicação
│   ├── services/            # Serviços para comunicação com a API
│   ├── styles/              # Estilos globais e temas
│   ├── hooks/               # Hooks customizados
│   ├── main.jsx             # Arquivo principal da aplicação
│   └── ...                  # Outros arquivos
└── ...                      # Outros arquivos de configuração
```

### Estrutura das Páginas

O sistema possui as seguintes páginas principais:

* **Login:** Permite que os usuários façam login no sistema com suas credenciais.
* **Home:** Página inicial após o login, com informações gerais sobre o sistema e links para outras seções.
* **Clientes:** Permite gerenciar os clientes, incluindo a criação, edição, visualização e exclusão de clientes.
* **Empresas:** Permite gerenciar as empresas, incluindo a criação, edição, visualização e exclusão de empresas.
* **Produtos:** Permite gerenciar os produtos, incluindo a criação, edição, visualização e exclusão de produtos.
* **Notas Fiscais:** Permite gerenciar as notas fiscais, incluindo a criação, edição, visualização e exclusão de notas fiscais, com a possibilidade de adicionar produtos e informações de clientes e empresas.
* **Usuários:** Permite gerenciar os usuários do sistema (apenas para usuários com permissão de administrador), incluindo a criação, edição, visualização e exclusão de usuários.

### Funcionalidades

* **Gerenciamento de usuários:** Permite criar, editar, visualizar e excluir usuários, além de controlar suas permissões (admin ou usuário comum).
* **Gerenciamento de clientes:** Permite criar, editar, visualizar e excluir clientes.
* **Gerenciamento de empresas:** Permite criar, editar, visualizar e excluir empresas.
* **Gerenciamento de produtos:** Permite criar, editar, visualizar e excluir produtos.
* **Gerenciamento de notas fiscais:** Permite criar, editar, visualizar e excluir notas fiscais, incluindo a adição de produtos e informações de clientes e empresas.

### Considerações finais

Este sistema oferece uma solução completa para o gerenciamento de notas fiscais. Sua estrutura modular e API RESTful facilitam a integração com outras aplicações.

Qualquer dúvida entre em contato no e-mail: contato@guilhermejp.com ou pelo [linkedin](https://www.linkedin.com/in/guimaxtr/).
