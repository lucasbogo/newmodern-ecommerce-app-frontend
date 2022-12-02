# newmodern-ecommerce-app-screens

### Sobre:

Aplicativo desenvolvido como trabalho obrigatório para a disciplina **Projeto Integrador II** do curso de **Tecnologia em Ánalise e Desenvolvimento de Sistemas**. Este é o repositório referente ao **FRONT-END** da nossa aplicação. Portanto, eis aqui a **NewModern Ecommerce APP**.
<br>
<br>
O repositório referente ao back-end/API da aplicação newmodern econtra-se neste repositório: [NewModern Ecommerce API - BACK-END](https://github.com/lucasbogo/newmodern-ecommerce-app)

### Ferramentas, Tecnologias e Padrões utilizados neste projeto:

-  **ReactNative**
-  **Yarn or NPM**
-  **NativeBase**
-  **React Native Swiper**
-  **React Navigation**
-  **Redux** 
-  **Swipe ListView**
-  **React Navigation Material Top Tabs**
-  **React Native Tab View**
-  **Keyboard Aware ScrollView**
-  **Axios**
-  **Toaster Message**
-  **Context API**
-  **Styled Components**
-  **NGROK**

---------------------------------------------------------------------------------------------------------------------------------------------------------

## Criar Projeto React Native
#### Entre no diretorio criado anteriormente (onde consta o backend) ```cd newmodern-app``` e rode ```expo init --npm```.
#### Nomeie o projeto conforme desejar, eu nomeei o meu como: ```newmodern-ecommerce-app```.
#### Após a instalação do projeto e as dependecias JavaScript, abrir o projeto com editor de preferência, no meu caso, é o **VsCode** 

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Yarn
[Documentação Oficial](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Nota:
Deus sabe o quanto eu sofri para instalar bibliotecas essenciais para implementar este projeto corretamete usando o bendito **NPM**. No final das contas, eu consegui, mas a que custo?
<br>
<br>
Antes de prosseguir com a instalação das bibliotecas deste trabalho, pare tudo e instale **Yarn**. Se quiser continuar com o **NPM**, que Deus o ajude.
<br>
<br>
Após a instalação do **Yarn** substitua o ```npm install <package>``` por ```yarn add <package>```. Acabei de te salvar dias de patches e frustrações. De nada.

### Sobre:

Yarn fornece um rico conjunto de comandos de linha de comando para o ajudar em vários aspectos do seu pacote Yarn, incluindo instalação, administração, publicação, etc.

### Instalação:

#### Instalar Yarn globalmente
```
npm install --global yarn
```
#### Pronto. Apesar do npm ser super útil para o desenvolvimento do back-end. No front só trouxe desgraça. Desfruta da estabilidade do Yarn. :)

---------------------------------------------------------------------------------------------------------------------------------------------------------
# NativeBase
[Documentação Oficial](https://nativebase.io/)

### Sobre:

Native Base fornece o 'cross-platform' UI Componenets p/ ReactNative e VueJS. Essa Biblioteca traz ao desenvolvedordiversos componentes "prontos". Isso é excelente pois muitos componentes são considerados UNIVERSAIS e são CONSISTENTES em diferentes plataformas.

### Instalação:

#### Instalar a versão estável 
```
npm install --save native-base@2.8.2
```
---------------------------------------------------------------------------------------------------------------------------------------------------------
# React Native Swiper
[Documentação Oficial](https://www.npmjs.com/package/react-native-swiper)

### Sobre:

Para deixar a Interface Usuário mais bonita e intuitiva, utilizamos um componente chamado **SWIPER**. sERVE P/ A INTERAÇÃO DO USUÁRIO COM A APLICAÇÃO MOBILE. É algo interessante a ser implementado pois todo o usuário de Mobile, tanto Android como iOS, entende como 'tocar' um aplicação utilizando funcionalidades touch and swipe.

### Instalação:
```
npm install react-native-swiper
```
---------------------------------------------------------------------------------------------------------------------------------------------------------
# React Navigation
[Documentação Oficial](https://reactnavigation.org/)

### Sobre:

A biblioteca ReactNavigation fornece vários métodos p/ navegação entre telas. Essa é uma ferramenta extendida. Funciona em STACKS (pages over pages) (screen over screen); assim sempre serão possível utilizar recurso mobile back, etc... Pode ser utilizado em Stack, Tab, Drawer, etc...; possui suporte a 'gestures' (funcionalidades touch) e funciona tanto para android como iOS. 

### Instalação:

#### Dependencies1
```
expo install react-native-gesture-handler
```
#### Dependencies2
```
react-native-reanimated
```
#### Dependencies3
```
react-native-screens
```
#### Dependencies4
```
react-native-safe-area-context@react-native-community/masked-view
```
### Após isso, instalar via NPM
```
npm install@react-navigation/native
```
```
npm install@react-navigation/bottom-tab
```
### Instalar ícones
```
npm install react-native-vector-icons
```
### Instalar Navigation Stack
```
npm install@react-navigation/stack
```

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Redux
[Documentação Oficial](https://redux.js.org/)

### Sobre:
Essa biblioteca é usado para **StateManagement** de aplicações.

- É um PredictableStateContainer
- Makes State Mutation predictable
- Single Source of Truth
- State is read-only
- Changes are made with pure functions
- Uni direction state flow
- State is stored in plain JavaScript
- Action: JavaScript object that specifies how to change state
- Reducer: takes the current state and actions and return a new state

### Instalação1

```
npm install redux
```
### Instalação2

```
npm install react-redux
```
### Instalação3

```
npm install react-redux-devtools-extension
```
### Instalação4

```
npm install redux-logger
```
### Instalação: redux thunk:

#### Sobre:

é um middleware que 'extends' as habilidades *Store/Armazenamaneto*. Traz a lógica de sincronização necessárias p/ acessar o Banco de Dados.

- Thunk: passe-se *CALLS* assíncronos pelo middleware p/ o estado (state).
- Actions: são os métodos que irão despachar (dispatch) o payload ao Reducer p/ que a seja possível armazená-los em Store e permitir que o aplicativo seja acessado.

```
npm install redux-thunk
```


---------------------------------------------------------------------------------------------------------------------------------------------------------
# Swipe ListView
[Documentação Oficial](https://www.npmjs.com/package/react-native-swipe-list-view)

### Sobre:

Éuma listView vertical com linhas que deslizam p/ abrir e fechar. Manipula o comportamento nativo padrão, como fechar linhas quando o ListView é rolado ou quando linhas são abertas.


### INSTALAÇÃO:

```
npm install react-native-swipe-list-view
```
### IMPORTAR: 

```
import {swipeListView} from 'react-native-swipe-list-view;
```

---------------------------------------------------------------------------------------------------------------------------------------------------------
# React Navigation Material Top Tabs 
[Documentação Oficial](https://reactnavigation.org/docs/material-top-tab-navigator/)

### Sobre:

Barra de guias com tema de material design na parte superior da tela que permite alternar entre diferentes rotas tocando nas guias ou deslizando horizontalmente. transções animadas. Componentes são montados automaticamente

### Instalação:

```
npm install@react-navigation/material-top-tabs
```


---------------------------------------------------------------------------------------------------------------------------------------------------------
# React Native Tab View
[Documentação Oficial](https://www.npmjs.com/package/react-native-tab-view)

### Sobre:
Animações e gestures

### Instalação:
```
npm install react-native-tab-view
```

---------------------------------------------------------------------------------------------------------------------------------------------------------
# Keyboard Aware ScrollView
[Documentação Oficial](https://www.npmjs.com/package/react-native-keyboard-aware-scrollview)

### Sobre:
Um componente auxiliar destinado a ser usado como um substituto drop-in para ReactNative scrollview corretamente quando o teclado é mostrado ou ocultado para que todo o conteúdo seja rolável e disponível para o usuário


### Instalação:

```
npm install react-native-keyboard-aware-scrollvieww
```
---------------------------------------------------------------------------------------------------------------------------------------------------------
# Axios
[Documentação Oficial](https://axios-http.com/)

### Sobre:
Axios é um cliente HTTP baseado em promessas para o Node.JS e para o navegador. è isomórfico (pode rodar no navegador e no node.js com a mesma base de código) No lado do servidor usa-se o código nativo do node.js - o módulo HTTP, enquanto no lado do cliente (navegador) usa-se XMLHttpRequestes

- Faz XMLHttpRequestes do navegaor
- faz requisições http do node.js
- suporta a API de Promessas
- Intercepta requisições e respostas
- transforma os dados de requisições e de respostas
- cancela requisições
- automaticamente transforma dados p/ JSON
- suporta proteções contra XSRF no lado do cliente

### Instalação:

#### Dentro do diretório do projeto, RODAR o comando:
```
npm install axios
```
---------------------------------------------------------------------------------------------------------------------------------------------------------
# Toaster Message
[Documentação Oficial](https://www.npmjs.com/package/react-native-toast-message) 


### Sobre:
self explanatory

### Instalação:

#### Dentro do diretório do projeto, RODAR o comando:
```
npm install react-native-toast-message
```

---------------------------------------------------------------------------------------------------------------------------------------------------------
# Context API
[Documentação Oficial](https://reactjs.org/docs/context.html) 


### Sobre:
Fornece uma maneira de passar dados pela árvore de componentessem ter que pasar 'props' manualmente em todos os níveis

Armazena-se o 'State' ou 'Props' p/ poder acessá-los em todo o aplicativo

Utilizaremos isso p/ armazenar o usuário autenticado. Assim é possível navegar entre as telas sem ter que realizar a autenticação repetidamente.

tambem fornece a lógica p/ diferenciar User de Admin e restringir acesso. (projeto futuro)

### Instalação:

#### Dentro do diretório do projeto, RODAR o comando:
```
npm install@react-native-async-storage/async-storage
```

---------------------------------------------------------------------------------------------------------------------------------------------------------
# Styled Components
[Documentação Oficial](https://styled-components.com/docs/basics#installation) 


### Sobre:

Utilizando literais de modelo com tags e os CSS, style components permite escrever código CSS real p/ estilizar seus componentes.

também remove o mapeamento entre componentes e estilos

Possibilita usar componentes como uma construção de estilo de baixo nível

### Instalação:

#### Dentro do diretório do projeto, RODAR o comando:
```
yarn add styled-components
```
---------------------------------------------------------------------------------------------------------------------------------------------------------
# NGROK
[Documentação Oficial](https://ngrok.com/) 

### Sobre:

ngrok é a vantagem programável da rede que acrescenta conectividade,
segurança, e observabilidade às suas aplicações sem alterações de código. Como o android pega a porta 3000 para um função exclusiva (esqueci o motivo exatamente, mas não funciona...) Foi necessário utilizar NGROK para conseguir conetar com o localhost

install ngrok normally by using documentation.

### Run:

```
ngrok http 3000
```
### Copie e cole a URL NGROK em assets/common/baseUrl.js

