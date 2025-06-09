# Neko Inn Landing Page 🐈

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

Landing Page para Hospedagem Felina. Design minimalista e funcional por  <a href="www.figma.com/@zinefalouti?fuid=1136452661324589620">Zine Falouti</a> encontrado na <a href="https://www.figma.com/community/file/1363549094164405890/neko-inn-landing-page">comunidade Figma </a>.

| Mobile | Tablet | Desktop | 
|--------|---------|---------|
| <img src="./src/assets/mobile-nekoInn.png" width="200"> | <img src="./src/assets/tablet-nekoInn.png" width="400"> | <img src="./src/assets/desktop-nekoInn.png" width="800"> |

*Imagens meramente ilustrativas, pois ela pode mudar dependendo do tamanho da tela utilizada!

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
- Persistência com localStorage: Armazena a preferência do usuário (ex.: "dark" ou "light") no localStorage, mantendo o tema selecionado mesmo após recarregar a página ou fechar/reabrir o navegador.
- Design acessível (contraste ajustado para ambos os temas).
- Enum Tipado: Definição explícita dos temas (light/dark) via ThemeType para segurança de tipos.
- Context API: Estado global gerenciado por ThemeProvider, compartilhando theme, themeData e toggleTheme com toda a aplicação.

## 📌 Desafios enfrentados 

**Ser responsivo para todas as possíveis telas (celular, tablet e computador)** não era o esperado no design desenvolvido para esse projeto, porém eu desenvolvi as telas faltantes, tablet(>=768px) e mini-computadores(>=1024px), adaptando á necessidade encontrada para cada nova tela. Foi interessante para aprofundar meus conhecimentos de lógica de responsividade tanto no desenvolvimento do código quanto na distribuição de informação que o usuário veria no fim.

**Criar uma lógica para o botão Dark/Light Mode que se adequasse ao meu site** foi mais dificil do que eu imaginava. Por ser minha primeira vez desenvolvendo essa funcionalidade demorei a entender como faze-la e depois como aplicar no meu código atual. Principalmente que eu codei sem definir desde o início as variaveis que seriam trocadas e quais iriam ficar do mesmo jeito, mesmo o design já deixando exposto essas informações.Precisei de vídeos no Youtube e auxilio em sites com projetos parecidos para que aplicação funcionasse adequadamente.

**A parte do Book Now/ Reserve Agora** foi uma das desafiadoras para mim: não existia uma lógica do que fazer nessa parte. Eu poderia deixar estática, sem utilidade alguma, e ainda estaria seguindo o projeto base. Então, quando fui dá vida a essa parte, eu tive que escolher a lógica que iria utilizar e entre várias, optei por uma mais simples. Meu racionio foi enviar um e-mail tanto para o usuário quanto para o administrador da página(eu) com as informações que o usuário colocar no agendamento. Utilizei o serviço **EmailJS** que facilitou a integração de envios de e-mail sem necessidade de um servidor backend. Uma forma de ainda permitir uma comunicação entre cliente e administrador, mas simploria. 

Além disso, eu quis colocar a mudança de idiomas. O projeto veio totalmente em inglês e também não tinha essa pretenção de mudar o idioma. Porém, eu já tinha visto em projetos webs essa função e resolvi aproveitar a oportunidade para colocar em prática. Os tutoriais e documentação da i18n foram essenciais para essa etapa. 

Esse projeto estudo foi trabalhoso, cheio de primeiras tentativas e lógicas novas. 


## 🌐 Deploy no GitHub Pages

O projeto está disponível online via GitHub Pages. Acesse <a href="helzaaragao.github.io/NekoInn/">aqui</a> para visualizar.

### 🛠️ Dependências e Versões Utilizadas
**React**: 19.0.0  | **TypeScript**: 5.7.2 | **Vite**: 6.2.0 | **Styled-componets**: 6.1.17 |**Chakra UI**: 3.16.0 | **Phosphor-icons/react**: 2.1.7 | **Emailjs/browser**: 4.4.1 | **i18next**: 25.2.1


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
