# Projeto de Desenvolvimento Web - Cadastro e Login

<p align="center">
  <img alt="Tecnologia" src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img alt="Estilo" src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white"/>
  <img alt="Framework" src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img alt="UI" src="https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
</p>

## 👤 Desenvolvedor

* **Nome:** João Gabriel Menezes Marra
* **Matéria:** Desenvolvimento Web

---

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido como avaliação para a matéria de Desenvolvimento Web. O objetivo principal foi aplicar na prática os conceitos de **componentização** em React, a **passagem de propriedades (props)** e o uso de **CSS Modules** para estilização encapsulada.

A aplicação simula uma plataforma com duas telas principais: uma para **Login** e outra para **Cadastro (Home)**.

---

## 🎯 Conceitos Aplicados

O foco deste trabalho foi a estrutura e a comunicação entre componentes:

* **Componentização:** A interface foi dividida em componentes reutilizáveis, como `Input`, `Button` e `Navegacao`, permitindo um código mais limpo e de fácil manutenção.
* **Passagem de Props:** Os componentes foram configurados dinamicamente através de `props`. Por exemplo, o componente `Input` recebe `placeholder`, `type` e `id`, enquanto o `Button` recebe o texto a ser exibido.
* **CSS Modules:** Toda a estilização foi feita utilizando `.module.css`. Isso garante que os estilos de um componente não "vazem" e afetem outros, evitando conflitos de classes CSS.

---

## 🛠️ Telas e Funcionalidades

### 1. Tela de Login

* **Componente `Navegacao`:** No topo da página, foi criado um componente de barra de navegação. A estrutura HTML e o layout base foram adaptados do **Bootstrap**.
* **Formulário:** Um formulário simples pedindo "Email/CPF" e "Senha".
* **Componentes:** Utiliza os componentes `Input` (configurado via props para os tipos `text` e `password`) e `Button` (configurado com o `props="Entrar"`).

### 2. Tela de Home (Cadastro)

* **Formulário Completo:** Uma página de cadastro com múltiplos campos (Nome, Email, CPF, Endereço, etc.).
* **Layout (Bootstrap Grid):** Os campos do formulário estão organizados utilizando o sistema de **Grid do Bootstrap** para criar um layout responsivo e alinhado.
* **Seleção de Gênero (Material UI):** Para o campo "Gênero", foi utilizado o componente **Checkbox do Material UI (MUI)** para demonstrar a integração de bibliotecas de UI externas.

---

## 💻 Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [LINK-DO-SEU-REPOSITÓRIO]
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd [NOME-DA-PASTA-DO-PROJETO]
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute a aplicação:**
    ```bash
    npm run dev
    ```
5.  Abra `http://localhost:5173` (ou a porta indicada no terminal) no seu navegador.
