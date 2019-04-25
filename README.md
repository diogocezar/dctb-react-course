# Curso ReactJS

Olá pessoal, todo este material está baseado no curso starter da RocketSeat para ReactJS.

O site da rocketseat: https://rocketseat.com.br/

Recomendo muito os materiais do pessoal ;)

## O que é ReactJS?

- Aplicações web são divididas em 2 pates: Front-End e Back-End;
- Back-End -> Lado do Servidor; (PHP, Ruby, NodeJS, Python);
- Front-End -> É a parte visual (HTML + CSS + JS);
- ReactJS -> Atua no Front-End;
- Qual problema ele resolve?
  - Faz mais que o JS puro consegue fazer;
  - **Organiza** o nosso projeto;
  - Manipula a DOM;
  - Utilizado para construção de **SPA's**;

### SPA's

Tradicionalmente, em uma aplicação web renderizada pelo servidor, nós teríamos um modelo **MVC**, e cada **View** deste modelo seria responsável por criar uma tela, chamada por uma rota.

Uma SPA é uma forma diferente de trabalhar com uma aplicação.

Vamos ter apenas **uma página principal** e todas as outras páginas da aplicação serão escritas e modificadas pela linguagem de programação JavaScript.

Nessa abordagem:

O Back-End ao invés de retornar o próprio HTML formatado, retorna os dados no formato **JSON**;

Back-End fica totalmente separado do Front-End;

Isso traz bastante flexibilidade na parte interativa (animações, efeitos, etc...)

---

## Primeiro Hello World

Podemos ver aqui https://reactjs.org/

Um simples exemplo em ReactJS:

```js
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("hello-example")
);
```

A palavra chave é **COMPONENTE**!

Note também que temos uma notação um tanto quanto estranha! Uma função que retorna um HTML? Isso é possível? SIM!

O ReactJS utiliza uma notação tecnologia chamada JSX, então o que vemos na tela não é HTML propriamente dito, é um código JS que vai ser transformado em HTML.

## Configurando o Ambiente

Para criar um projeto em ReactJS temos que ter alguns pré-requisitos;

O primeiro deles é ter o NodeJS e o NPM instalados em sua máquina.

https://nodejs.org/

Também iremos utilizar o yarn um gerenciador de pacotes.

https://yarnpkg.com/

O Yarn é um gerenciador de pacotes um pouco mais rápido que o npm;

---

Verificando se tudo está oks:

```bash
node -v
npm -v
yarn -v
```

## Instalando o create-react-app

Agora, precisamos instalar um ferramenta "mágica" que irá fazer todo o trabalho "chato" de configuração do Babel e do Webpack que são ferramentas que permitem a utilização de JavaScript moderno nos nossos navegadores.

```bash
npm install -g create-react-app
```

## Criando nosso primeiro projeto

Agora podemos criar um novo projeto utilizando o comando

```bash
create-react-app huntweb
```

Esse passo deve demorar um pouco até a instalação completa de todos os pacotes.

Agora podemos entrar em nossa pasta e analisar os arquivos que foram criados.

### Estrutura de Pastas

**node_modules** é onde ficarão as dependências dos nossos projetos;

**public** são todos os arquivos que vão ser acessíveis pelo usuário final da nossa aplicação;

**src** é a pasta onde ficará todo o código da nossa aplicação;

**.gitignore** é um arquivo de configuração do git, para ignorar o node_modules, por exemplo.

**package.json** é o arquivo de configuração do nosso projeto web, também é neste arquivo que estarão listadas as dependências do nosso projeto.

Notemos que inicialmente ele começa com as dependências:

- react é o react em sí;
- react-dom é o que faz as interações com o html;
- react-script são os scripts para automatizar a transpilação de códigos;

em scripts, temos os scripts que podemos utilizar para começar a aplicação (start) por exemplo, ou até mesmo criar a versão final (build).

o **README.md** é a documentação do projeto.

o **yarn.lock** é o cache dos pacotes já baixados.

Agora podemos enfim rodar a nossa aplicação, utilizando o comando:

```bash
yarn run start
```

### O que são componentes?

Para entender melhor o que são os nossos componentes vamos alterar um pouco a estrutura do nosso projeto inicial, para isso, remova os arquivos:

- src/App.css
- src/App.test.js
- src/index.css
- src/logo.svg
- src/serviceWorker.js

Agora, é necessário remover as chamadas dos arquivos removidos em App.js e index.js

Ficamos então com:

index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

App.js

```js
import React from "react";

const App = () => {
  return <h1>Olá ReactJS</h1>;
};

export default App;
```

Agora podemos salvar, e analisar o nosso projeto. Vejamos que ele já alterou as informações.

Agora sim podemos trabalhar com o conceito de componentização.

index.js vai ser o primeiro arquivo aberto pelo ReactJS.

A partir dele é que todos os outros arquivos serão chamados.

Note que temos alguns imports:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
```

Basicamente, todas as vezes em que for necessário utilizar JSX (HTML+JS) vamos precisar importar o React.

Neste caso o ReactDOM será o responsável por "linkar" nossa aplicação ao nosso arquivo html principal (index.html)

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Note então, que estamos renderizando o nosso primeiro "componente" (App) dentro da div "root" no nosso arquivo **index.html**

Abra o arquivo index.html e veja que a div root existe dentro dele.

Em ReactJS TUDO é componente!

Botões, links, imagens, inputs, e até mesmo página completas!

Por isso, o nosso App é um "componente" que representa toda a nossa página inicial!

Um componente poderia ser definido por:

> Um conjunto de parte visual (que é o nosso HTML) a parte funcional (que é JavaScript) e a parte de estilização (que é o CSS)

Então um componente é um elemento completo e auto-contido que encapsula essas três responsabilidades e uma única responsabilidade.

Então, podemos entender agora que cada pequena parte da nossa aplicação é um componente.

Sabendo que um componente pode ser formado por outros componentes, podemos criar um componente que também é formado por outros componentes.

## Tipos de Componentes

Em ReactJS nós temos 2 principais tipos de componentes: **Componentes com Estados** e **Componentes sem Estados**

Também são conhecidos por (_StateLess_ e _StateFull_);

Os dois componentes tem as mesmas características, já citadas anteriomente, com a diferença que: um componente **com estados** possui atributos que poderão ter o seu valor alterado, e impactarão na renderização do componente, cada vez que uma dessas propriedades for alterada.

Já, os componentes sem estados, são componentes mais simples, que quase sempre só servem para renderizar uma responsabilidade pequena de nossa página.

Outra diferença muito importante é a forma como estes componentes são escritos.

Um componente com estados quase sempre vai ser representado por uma classe, por exemplo:

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1>Olá ReactJS</h1>;
  }
}

export default App;
```

Note que para este componente nós temos que obrigatoriamente utilizar o método `render()` pois ele será o responsável por mostrar as informações na tela.

O mesmo componente poderia ser escrito da seguinte forma:

```js
import React from "react";

const App = () => {
  return <h1>Olá ReactJS</h1>;
};

export default App;
```

Com a diferença que neste segundo caso, não seria possível utilizar os estados dentro do componente. A não ser que utilizássemos os Hooks, que podem ser visto mais detalhadamente: https://willianjusten.com.br/habemus-react-hooks/

### Um exemplo de utilização do estado de um componente

Poderíamos por exemplo, ter um componente que representasse um relógio:

```js
import React, { Component } from "react";

class Clock extends Component {
  state = {
    now: null
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <h1>{this.state.now}</h1>;
  }
}

export default Clock;
```

Note que para que nós possamos utilizar o estado, temos que usar uma classe!

Mas neste código, temos muitas coisas novas!

Vamos entender cada um dos seus novos conceitos!

1. Note que agora estamos utilizando uma nova sintaxe dentro do método render: `<h1>{this.state.now}</h1>` isso significa o próprio JSX, ou seja, uma mistura entre HTML e JavaScript.
   Neste caso, nós estamos pedindo para que dentdo de uma tag `<h1>` nós coloquemos o conteúdo da variável `this.state.now`. `this` é referente a própria classe, `state` é o controle de estados deste componente, onde todos os estados vão ficar e `now` é o nome da nossa variável;

2. No início da classe temos algo como: `state = { now: null };`. Aqui estamos representando a declaração do nosso atributo de estado, inicialmente valendo `null`.

3. Notemos tambem um novo método sendo chamado dentro da classe: `componentDidMount` este método faz parte do ciclo de vida dos componentes com estado do ReactJS. Isso significa que, componentes com estado vão possuir alguns métodos especial que podem interceptar alguns momento de seu ciclo de vida, neste caso estamos utilizando um método que vai executar uma função no momento em que o componente for montado, ou seja, quando ele estiver pronto para ser exibido em tela. Neste caso, estamos utilizando uma função que irá setar um intervalo de tempo para executar uma função que irá alterar o estado do nosso componente a cada 1 segundo.

4. A forma de alterar um estado. O ReactJS aplica um importante conceito de imutabilidade, isso significa que por definição, não poderíamos, por exemplo, fazer o seguinte: `this.state.now = 'xyz'` pois isso vai de encontro com o princípio da imutabilidade, no qual, nenhum estado deve ser diretamente alterado. Por isso, devemos utilizar um método especial chamado `setState()` que recebe como parâmetro como será o novo estado do componente;

5. E por último, de onde vem a mágica? Como o react muda o valor da variável, toda vez que o estado é alterado? A resposta é simples! Por definição, sempre que um estado de um componente é alterado, o react chama novamente o método de `render()` por isso, não precisamos nos preocupar em renderizar isso novamente no DOM, pois o próprio ReactJS faz este trabalho para nós!
