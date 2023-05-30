# Programação Funcional


## Porque Programação Funcional?

  * Organizar uma linha de raciocínio
  * Entender uma nova maneira de abordar os problema
  
## O que é Programação Funcional?

  É um paradigma de programação como a Orientação a Objetos, por exemplo

    * Uma maneira de resolver problemas 

## Funções 
  
  * Pequenas tarefas dentro de uma função
  * Abstrair um problema e isolar ele dentro da função
  * Não modificar dados fora dela
  * Pequenas e bem específicas no que fazem.

### Características principais da função

  * Uma lado (ou mais) entra em uma função e um novo dado sai dessa função 
  * Não altera dados 
  * Não Guarda estado Stateless

## Linguagens funcionais 

  * JavaScript (multiparadigma)
  * PHP (multiparadigma)
  * Elixir
  * Haskell

## Pontos Positivos 

  * Fácil manutenção 
  * Fácil uso de testes
    * Funções isoladas e consistentes
  * Códigos mais confiáveis

## Princípios 

  * Paradigmas 
    - Programação Imperativa
    - Programação Declarativa

  * Dados 
    - Imutalibidade 
    - Stateless

  * Funções
    - Independentes
    - Puras
    - Higher-order
    - First-class
    - Composição

## Programação Imperativa

  * O código é pensado e gerado em sequência.
  * O código é pensado como um passo-a-passo, como uma receita de bolo
  * Uma coisa depende da outra
  * O estado de um dado é alterado constantemente causando mutações nas variáaveis
  * Orientação a Objetos é um tipo de paradigma imperativo

## Programação Declarativa

  * O código é gerado para fazer algo, não importa como 
  * O que fazer e não como fazer 
  * Não há necessidade de um passo a passo no código
  * Programação funcional é um tipo de paradigma declarativo 

## Imutalibidade 
  
  * Uma variável não vai variar 
  * Se vocẽ precisar mudar uma variavel, você não mudam você cria uma nova

## Stateless

  * Não guarda estado
  * A função só conhece dados entregues a ela
  * A resposta não poderá variar 

## Funções 
  Características das funções na programação funcional.

    * Função Independentes
    * Funções Puras
    * First-class Functions
    * Higher-order Functions
    * Composição de Funções

### Funções independentes 
  * Deverá ter ao menos 1 argumento 
  * Deverá retornar algo
  * Nada que acontecer lá dentro afeta o mundo externo
    * dados imutáveis
    * não guardar estado 
  * Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (afunção chama ela mesma)

### Funções Puras

  * Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento 
  * Não deverá sofrer nenhuma interferência do mundo externo a ela 
  * Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
  * Não terá nenhum efeito colateral no seu código
    * Não irá modificar nenhum dado.
    * Não irá guardar nenhum estado.

### First-class function 

  * Podem estar em qualquer lugarm inclusive, como parâmetro de outras funções 
  * A função poderá ser entendida como uma variável 

### Higher-order function 

  * Funções que recebem funções como argumentos
  * Funções que poderão retornar outras funções

### Composição de funções 
  * Um encadeamente de funções 
  * Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna...

## Conclusão 

  * Paradigma de Programação 
  * Linguagens 
  * Conceitos Fundamentais 
    * Stateless, imutabilidade, função pura, Higher-orders