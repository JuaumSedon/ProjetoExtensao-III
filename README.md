# Ateliê Laudir

## ✨ Visão Geral do Projeto

O **Ateliê Laudir** é uma plataforma digital desenvolvida para modernizar a presença online de um pequeno negócio local especializado em **serviços de costura, estética e venda de produtos artesanais**.

O objetivo principal é oferecer uma opção de pedir serviços e, ao mesmo tempo, um **Painel Administrativo completo (CRUD)** para a fundadora gerenciar os serviços de forma eficiente.

### Estrutura da Aplicação

O projeto segue a arquitetura **MVC (Model-View-Controller)**, utilizando **EJS** para renderização dinâmica e organização limpa do frontend, e **Mongoose** para interface com o banco de dados.

## 🛠️ Tecnologias Principais

| Categoria | Tecnologia | Uso no Projeto |
| :--- | :--- | :--- |
| **Backend** | **Node.js** | Ambiente de execução JavaScript no servidor. |
| **Framework** | **Express** | Definição de rotas e middleware. |
| **Banco de Dados** | **MongoDB** | Banco de dados NoSQL para dados persistentes. |
| **ORM/ODM** | **Mongoose** | Modelagem de dados e conexão com o MongoDB. |
| **Frontend** | **EJS** | Motor de templates para renderização dinâmica de páginas. |
| **Estilização** | **CSS Puro** | Estilos modernos e responsivos, focados em acessibilidade. |

***

## ⚙️ Entidades e Modelagem de Dados

O banco de dados (`atelie_laudir`) é composto pelas seguintes coleções principais, gerenciadas por meio do **Mongoose**:

| Coleção | Model | Descrição |
| :--- | :--- | :--- |
| `items` | `servicoModel` | Armazena os **serviços/produtos** oferecidos (nome, descrição, preço). É o foco do CRUD administrativo. |
| `usuarios` | `usuarioModel` | Gerencia os usuários com credenciais (nome, email, senha) para acesso (padrão e admin). |
| `mensagens` | `mensagemModel` | Captura e armazena mensagens enviadas pelos clientes através da página "Fale Conosco". |

***

## 🔑 Fluxo de Usuário e Autenticação

A aplicação suporta dois perfis de acesso:

### 1. Área do Cliente (Público)

* **Página Inicial (`/intro`):** Apresenta a história do ateliê e informações gerais.
* **Fale Conosco (`/fale-conosco`):** Formulário para clientes enviarem mensagens e ordenarem pedidos (salvas no banco de dados via `mensagemController.salvarMensagem`).
* **Cadastro (`/cadastro`):** Permite que novos usuários criem uma conta para acesso padrão.

### 2. Painel Administrativo (CRUD)

O acesso ao painel é liberado após a autenticação. A conta **Admin padrão** é fixa: `E-mail: admin@email.com` e `Senha: admin123`.

A página principal do painel (`/home`) oferece acesso direto às funcionalidades de gerenciamento:

* **Listar Serviços (`/listar-itens`):** Visualiza todos os itens/serviços cadastrados.
* **Adicionar Serviço (`/novo-item` -> `/adicionar-item`):** Interface para incluir novos serviços (CREATE).
* **Atualizar Serviço (`/atualizar` -> `/atualizar-item`):** Permite selecionar um item pelo nome e editar sua descrição/preço (UPDATE).
* **Remover Serviço (`/remover-item` -> `/remover-item/:id`):** Lista de itens com botões de exclusão (DELETE), com confirmação obrigatória.
* **Ver Mensagens (`/mensagens`):** Lista todas as mensagens recebidas, ordenadas por data de envio.

### Recurso de Acessibilidade

O projeto incorpora um script (`/public/scripts/acessibilidade.js`) e estilos CSS que permitem ao usuário:
1.  Aumentar e diminuir o tamanho da fonte.

***

