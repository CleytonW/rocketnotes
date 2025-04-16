# 🚀 Rocketnotes

![image](https://github.com/user-attachments/assets/c3560e99-68e9-4229-8bb6-2559f7c91546)

Aplicação de anotações simples, com foco em produtividade e organização. O projeto é uma SPA (Single Page Application) desenvolvida com **React** e estilizada com **Styled Components**, conectada a uma API que permite criação, visualização e exclusão de notas com tags.

## 🛠 Tecnologias

- React.js
- React Router
- Styled Components
- Vite
- JavaScript (ES6+)

## 📌 Funcionalidades

- Cadastro e login de usuários
- Criação de novas notas
- Listagem de notas com tags associadas
- Filtro por título ou tag
- Visualização individual da nota
- Exclusão de notas

## 🧩 Componentização

O projeto foi desenvolvido com foco em reutilização de componentes, mantendo o código limpo e organizado. Algumas das principais abstrações:

- `Header`, `Input`, `Note`, `Section`, `Tag`, `Button`, entre outros
- Uso de `props.children` para flexibilidade entre componentes

## 🌐 Integração com Backend

A aplicação se conecta a uma **API REST** desenvolvida em Node.js, utilizando rotas autenticadas com JWT e banco de dados SQLite.


## ▶️ Como executar

```bash
# Clone o repositório
git clone https://github.com/CleytonW/rocketnotes.git

# Acesse o diretório
cd rocketnotes

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

⚠️ Certifique-se de que a API backend esteja rodando antes de iniciar o front-end.

## 💡 Aprendizados principais
Roteamento com React Router

Gerenciamento de estado com props

Estilização com styled-components

Comunicação com APIs REST

Organização de projetos React escaláveis

<br>

***
Feito com 💙 por Cleyton Melo
