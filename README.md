# Neko Inn Landing Page 🐈

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

Landing Page para Hospedagem Felina

Desenvolvimento de uma landing page unificada focada em experiência do usuário e alta conversão, destinada a serviços premium de hotelaria para gatos.

Destaques:

Design minimalista e funcional por Zine Falouti

Arquitetura de informação otimizada para conversões

Experiência mobile-first responsiva

Stack: React | TypeScript | Vite | Chakra UI

| Mobile | Tablet | Desktop | 
|--------|---------|---------|
| <img src="./src/assets/mobile-nekoInn.png" width="200"> | <img src="./src/assets/tablet-nekoInn.png" width="400"> | <img src="./src/assets/desktop-nekoInn.png" width="800"> |

## 🚀 Funcionalidades

**Agendamento automatizado com confirmação via E-mail**: 
- Formulário com validação em tempo real e tratamento de tipos (TypeScript).
- Integração com EmailJS: Envio automático de confirmações para o cliente e para a administração (fluxo duplex).
- Fluxo duplex com tratamento de erros e estados de loading.
- Validação de data mínima (maio de 2025).
- Confirmação visual após envio bem-sucedido.

**Internacionalização (i18n) – PT/EN**: 
- Detecção automática do idioma do navegador.
- Conversão inteligente (ex.: "pt" → "pt-BR").
- Troca manual instantânea via react-18next sem recarregar a página (hook useTranslation + método changeLanguage).
- Estrutura modular com namespaces (home/components) e fallback para inglês.

**Dark Mode Toggle**: 
- Theming Dinâmico: Troca instantânea de estilos entre lightTheme e darkTheme sem recarregamento.
- Design acessível (contraste ajustado para ambos os temas).
- Enum Tipado: Definição explícita dos temas (light/dark) via ThemeType para segurança de tipos.
- Context API: Estado global gerenciado por ThemeProvider, compartilhando theme, themeData e toggleTheme com toda a aplicação.

## 📌 Desafios enfrentados 


## 🌐 Deploy no GitHub Pages

O projeto está disponível online via GitHub Pages. Acesse <a href="helzaaragao.github.io/NekoInn/">aqui</a> para visualizar.

### 🛠️ Dependências e Versões Utilizadas


### 📂 Como rodar o projeto na sua máquina local

Obs: é preciso já ter instalado o node.js, vscode ou um terminal da sua preferência para executar os comandos!

Clone esse repositório para os seus arquivos:
```
git clone https://github.com/helzaaragao/NekoInn.git
```

Depois, vá até a pasta que você acabou de criar com o comando anterior:

```
cd "NekoInn"
```
E instale todas as depedências e versões utilizadas por esse projeto:

```
npm install
```
Finalmente, rode no seu localhost:
```
npm run dev
```
