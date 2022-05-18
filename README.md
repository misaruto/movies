# Projeto base para minicurso de React

## Descrição
Projeto desenvolvido para servir de norte para o ensino de react para os alunos do curso de Ciencias da Computação do <a href="https://www.ifsudestemg.edu.br/riopomba">IF Sudeste MG - Campus Rio Pomba</a> mostrando como iniciar um projeto basico e fazer configurações.

## Como executar a aplicação
- Gerar API KEY
    - Vá no site do <a href="https://www.themoviedb.org/">The Movie DB</a>
    - Crie uma conta ou faça login
    - Na tela de perfil de usuario
    - Clique na sua foto de perfil, depois em configurações
    - Na tela de Configurações clique em API
    - Gere uma nova ou pegue a API KEY existente
- Configurando o projeto
    - Faça o clone do projeto
    - Crie um arquivo `.env` na base do projeto
        - Adcione uma variavel com o seguinte nome `REACT_APP_TMDB_API_KEY`
        - Deve ficar na seguinte estrutura: `REACT_APP_TMDB_API_KEY=sua_api_key`
        - Salve o arquivo
- Rodando o projeto
    - Inicie um terminal ou prompt de comando
    - Vá até a pasta do projeto
    - Execute o comando: npm install
    - Após finalizar rode o projeto com o comando: npm start