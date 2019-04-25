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
    return <h1 className="clock">{this.state.now}</h1>;
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

## Criando o Header

Vamos criar o primeiro componente que será o header da nossa aplicação!

Também vamos fazer uma estilização básica!

Vamos então começar a organizar nossos componentes!

Em `/src` vamos criar uma nova pasta chamada `components`

Cada componente deve ser colocado em uma pasta, isso é uma boa prática, pois dentro desta pasta nós colocaremos o próprio componente sempre chamado de index, e um arquivo chamado styles.css que serão as estilizações daquele componente.

Então criaremos os seguintes arquivos:

1. `src/components/Header/index.js`
2. `src/components/Header/styles.css`

Também, vamos refatorar um pouco nossa estrutura anterior!

É comum colocar nossas páginas em pastas separadas, por isso vamos mover o `src/App.js` para `src/pages/Main.js` e também criar um estilo para ela `src/pages/styles.css`

E aproveitando, vamos também criar uma pasta para o nosso componente Clock: `src/components/Clock/index.js` e também um estilo para ele `src/components/Clock/styles.css`.

Neste momento, nossa estrutura de pastas deve ficar parecida com:

```
src
|-- components
|   |-- Clock
|   |   |-- index.js
|   |   `-- styles.css
|   `-- Header
|       |-- index.js
|       `-- styles.css
|-- index.js
`-- pages
    `-- Main
        |-- index.js
        `-- styles.css
```

Claro, que agora precisamos ajustar os nosso componentes, então seguem as modificações de cada um dos arquivos:

src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/Main";
ReactDOM.render(<Main />, document.getElementById("root"));
```

src/pages/Main/index.js

```js
import React, { Fragment } from "react";
import Header from "../../components/Header";
import Clock from "../../components/Clock";
const Main = () => {
  return (
    <Fragment>
      <Header />
      <Clock />
    </Fragment>
  );
};
export default Main;
```

Aqui temos que notar algumas coisas especiais!

Estamos aqui aprendendo a importar nossos primeiros componentes! Isso significa que dentro deste contexto nós teremos os componentes Header e Clock para serem utilizados "como" tags HTML, e no lugar em que forem chamadas vão exibir o conteúdo do seu respectivo componente.

Outro detalhe importante é em relação a um novo componente chamado **Fragment** importado diretamente de "react". Isso acontece pois, por definição, o react só consegue renderizar uma única tag por componente, e neste caso queremos utilizar 2: Header e Clock! Uma solução mais "antiga" seria colocar ambos os componentes em uma `<div>` vazia. O problema disso é que nós "sujamos" o código com div's. O Fragment é uma alternativa mais moderna para resolver este problema, pois encapula vários componentes sem a necessidade de adicionar uma nova div ao código fonte.

Agora vamos analisar o componente Header:

src/components/Header/index.js

```js
import React from "react";
import "./styles.css";

const Header = () => <header id="main-header">JSHunt</header>;

export default Header;
```

Note que aqui estamos importando o arquivo **styles.css** que irá adicionar uma melhor aparência ao nosso header.

src/components/Header/styles.css

```css
header#main-header {
  width: 100%;
  height: 60px;
  background: #da552f;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Neste momento já podemos rodar a aplicação e analisar o resultado até este ponto.

O resultado esperado é o header, e o relógio sendo executado!

Vamos agora aplicar um estilo global, para melhorar um pouco a aparência geral dos elementos:

```css
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  font-size: 14px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #fafafa;
  color: #333;
}
```

E vamos incluir isso na nossa Main:

```js
import React, { Fragment } from "react";
import Header from "../../components/Header";
import Clock from "../../components/Clock";
import "./styles.css";
const Main = () => {
  return (
    <Fragment>
      <Header />
      <Clock />
    </Fragment>
  );
};
export default Main;
```

E para finalizar essa parte, vamos também colocar um estilo para o Clock:

```css
h1.clock {
  width: 100%;
  height: 60px;
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
}
```

Da mesma forma este css deve ser importado dentro do componente Clock:

```js
import React, { Component } from "react";
import "./styles.css";
class Clock extends Component {
...
```

## Capturando os Dados de uma API

A primeira coisa a ser feita, é a instalação de uma nova biblioteca no nosso projeto, para isso, basta executar o comando:

```bash
yarn add axios
```

A partir deste momento, temos a opção de fazer um import desta biblioteca em qualquer um dos nossos componentes. Para isso basta incluir o comando:

```js
import axios from "axios";
```

Uma boa prática, é criar um elemento específico para a realização das chamadas da api, para isso vamos criar na raiz do nosso projeto uma nova pasta chamada **services** e dentro dela, um arquivo chamado **api.js**.

Neste exemplo vamos buscar os repositórios de um usuário no GitHub!

Para isso vamos utilizar a api:

https://api.github.com/users/diogocezar/repos

Note que basta alterar diogocezar por outro usuário para obter os seus repositórios!

Nosso arquivo api, deve preparar uma função para obter os dados desta api, ficando desta forma:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/diogocezar/repos"
});

export default api;
```

Agora vamos criar uma novo componente só para listar os dados desta api. `src/components/List/index.js` vamos importar o serviço que acabamos de criar:

```js
import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

class List extends Component {
  render() {
    return <h1>Lista de Repositórios</h1>;
  }
}

export default List;
```

Note que este componente é um componente com estado!

Agora vamos utilizar o `componentDidMount(){}` para fazer a busca na api e alterar o estado deste componente!

```js
import React, { Component, Fragment } from "react";
import api from "../../services/api";
import "./styles.css";

class List extends Component {
  state = {
    repos: []
  };
  componentDidMount() {
    this.loadRepos();
  }
  loadRepos = async () => {
    const response = await api.get();
    this.setState({ repos: response.data });
  };
  render() {
    return (
      <Fragment>
        <h1>Lista de Repositórios</h1>
        <ul>
          {(this.state.repos.length &&
            this.state.repos.map((item, key) => {
              return (
                <li key={key}>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })) || <li>Carregando...</li>}
        </ul>
      </Fragment>
    );
  }
}

export default List;
```

Note que chamamos uma função da própria classe chamada `this.loadRepos()` essa função será o gatilho para a busca na api.

Como sabemos JavaScript é uma linguagem assíncrona, por isso, existem várias formas de se obter uma informação sem uma sincronissidade.

Neste caso vamos utilizar `async` e `await` que são formas modernas de ligar com promisse.

Basicamente, uma quando uma função é async, nós podemos executar uma `promise` com a instrução `await`, desta forma, nós conseguimos fazer a linha "esperar" para ir para a próxima.

Neste caso, estamos esperando a api retornar o resultado para somente depois adicionar os elementos retornados ao estado do componente.

Note que, também estamos utilizando isso a nosso favor para fazer um sistema de "Carregando..."

Fazemos a verificação: se o estado está preenchido com ítens, então faça um map destes ítens retornando para cada ocorrência um elemento de lista. Se não, retorne um elemento de lista com "carregando..."

---

Agora, podemos colocar um estilo para melhorar um pouco o visual da lista de repositórios

```css
h1.repos {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding-bottom: 10px;
}

#repos-list {
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;
}

#repos-list article {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

#repos-list article strong {
  font-size: 1.2rem;
}

#repos-list article p {
  font-size: 1rem;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
}

#repos-list article a {
  height: 42px;
  border-radius: 5px;
  border: 1px solid #da552f;
  background: none;
  margin-top: 20px;
  color: #da552f;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}

#repos-list article a:hover {
  background: #da552f;
  color: #fff;
}
```

## Rotas

## Propriedades

## Eventos

## Styled Components

Site oficial: https://www.styled-components.com/

Documentação: https://www.styled-components.com/docs

### PASSO 1

Criar uma base de react utilizando o comando:

```
create-react-app styled-components-demo
```

Caso você não tenha o comando instalado, pode fazer através de:

```
yarn add create-react-app -g
```

Caso na tenha o yarn:

```
npm install -g yarn
```

Caso não tenha o npm... ai você se vira :heart:

### PASSO 2

Instalar a lib do Styled Components no seu projeto:

```
yarn add styled-components
```

### PASSO 3 - ENTENDENDO

Como é o padrão do React?

- Temos arquivos puros .css para estilização dos componentes;
- Dentro dos arquivos .js nós importamos o css em questão para estilizar arquivos;
- Utiliza-se as "classes" ou "id" ou "seletores" para personalizar a aparência do seu projeto;
- Muito próximo do que nós já conhecemos com HTML + CSS :blush:

Com styled-components, isso passa a ser diferente!

- Cria NOVOS componentes;
- Sua única e exclusiva função é: a sua estilização! :open_mouth:
- Ao invés de usar tags nativas e classes, vamos usar componentes em React com a única diferença que eles já terão por definição um estilo;

### PASSO 4

Vamos fazer uma limpeza no projeto default!

Removendo:

- Arquivos \*.css;
- Arquivos \*.teste.js;
- Imagens;
- Service Worker;

### PASSO 5

- Deixar apenas um "Hello World";

### PASSO 6

- Vamos agora, criar um arquivo .js para definir toda a nossa estilização;
- Note que a partir de agora, por mais estranho que pareça, não vamos usar CSS para escrever CSS!
- Criar um novo arquivo chamado styles.js;
- O nosso objetivo agora é: alterar o texto do "Hello World" para uma cor vermelha, por exemplo;
- Ao invés de criar um "class" para este html, vamos então criar um "novo componente" com o único objetivo de deixar um texto vermelho;
- O nome deste componente poderia ser Title, por exemplo;

#### App.js

```js
import React, { Component } from "react";
import { Title } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello World</Title>
      </div>
    );
  }
}
export default App;
```

#### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
`;
export { Title };
```

- Note que: criamos uma variável que recebe uma função styled;
- Essa função é uma função "especial" da linguagem JavaScript moderna que permite que uma função se comporte como uma string;
- Essa técnica se chama Tagged template strings: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings
- No VSCode para ver a sintaxe com hightlight precisa-se uma extensão: styled-components;

#### Nota

Se estivermos no ReactNative, basta utilizar a seguinte importação:

```js
import styled from "styled-components/native"; // importa o pacote
...
```

### Tá e pq?

O bacana é que ao utilizar styled-components nós temos a certeza que uma estilização nunca vai afetar outro componente da nossa aplicação, eles são _autocontidos_.

O nome disso no CSS é CSS Escopado! É o estilo que pertence ao escopo!

Quando temos várias classes, geralmente essas classes tem nomes iguais... Exemplo: "btn-1", "big-image", etc...

Por isso, conseguimos reaproveitar de VERDADE componentes de um projeto em outro! Sem a interdependência de outros arquivos CSS!

### SINTAXE "SASS"

Conseguimos aninhar nossas propriedades de acordo com a estrutura de componentes:

#### App.js

```js
import React, { Component } from "react";
import { Title } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title>
          Hello World
          <span>texto menor</span>
        </Title>
      </div>
    );
  }
}
export default App;
```

#### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
  span {
    font-size: 12px;
  }
`;
export { Title };
```

- Vantagem: não precisamos criar um componente para TODA a estilização que formos fazer! Só quando fizer sentido!
- Quando criar um novo? Quando tivermos blocos! Exemplo: Formulários, Seção de Destques de uma Home;

### PASSANDO PROPS

E quando temos a necessidade de criar diferentes estilos para o mesmo componente?

Por exemplo botões:

- Um botão padrão;
- Um botão de warning;
- Um botão de error;
- Um botão maior;
- Um botão menor;
- Etc...

#### App.js

```js
import React, { Component } from "react";
import { Title } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title fontSize={20}>
          Hello World
          <span>texto menor</span>
        </Title>
      </div>
    );
  }
}
export default App;
```

#### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
  font-size: ${props => `${props.fontSize}px`};
  span {
    font-size: 12px;
  }
`;
export { Title };
```

Conseguimos então acessar facilmente as propriedades dos styleds components;

### HERDANDO PROPRIEDADES

Uma funcionalidade muito bacana também é a possibilidade de herdar as propriedades de um outro styled-component.

#### App.js

```js
import React, { Component } from "react";
import { Title, TitleSmall } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title fontSize={20}>
          Hello World
          <span>texto menor</span>
        </Title>
        <TitleSmall>
          Novo Título Pequeno
          <span>texto menor</span>
        </TitleSmall>
      </div>
    );
  }
}
export default App;
```

#### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
  background: #000;
  font-size: ${props => `${props.fontSize}px`};
  span {
    font-size: 12px;
  }
`;

const TitleSmall = style(Title)`
    color: #00f;
    font-size: 16px;
`;
export { Title, TitleSmall };
```

### CONCLUSÃO

Com essa demonstração vimos o poder dos styled-components;

É importante lembrar que aprender styled-componente não tira a necessidade de aprender CSS, que é a base para a criação de suas propriedades;

Também, temos de fato componentes totalmente modulares que podem ser "copiados" para novos projetos;

Uma ótima maneira de criar suas próprias libs de componentes visuais;

---

## Básico do Redux

### Thunk
