# Desafio em Vue

### Passo a passo:
  - Instação da <a href="https://cli.vuejs.org/"> CLI do Vue </a>:
    ``` 
    npm install -g @vue/cli "OU" yarn global add @vue/cli
    ```
    
  - Verificando a versão:
    ```
    vue –version
    ```
    
  - Atualizando pacote:
    ```
    npm update -g @vue/cli "OU" yarn global upgrade –latest@vue/cli
    ```
    
  - Criando novo projeto:
    ```
    npm init vue@latest "OU" vue create desafio_em_vue
    ```
    
  - O comando a seguir, cria um servidor local onde disponibiliza um link para acesso no browser:
    ```
    yarn serve
    ```
    
  - Transpilador utilizado para transformar o código Vue em JavaScript foi o <a href="https://babeljs.io/docs/en/"> Babel </a>
  
  - Estilização <a href="https://tailwindcss.com/"> Tailwind CSS </a>
    - Intalação: 
      ```
      yarn add -dev tailwindcss postcss autoprefixer vite
      ```
      
    - Gerando arquivo de configuração:
      ```
      npx tailwindcss init
      ```
      
    - Extensão usada no editor Visual Studio Code: 
      ```
      Tailwind CSS IntelliSense
      ```
      
  - Criando um componente:
    ```
    - Dentro da pasta padrão 'COMPONENTS', criar um nova pasta para cada componente e dentro da sua devida pasta criar arquivo com a extensão vue:
      - nome_do_component_seguido_de_'Component' 
        - nome_do_arquivo_seguido_da_extensão vue
          - exemplo: HeaderComponent / Header.vue
    ```
