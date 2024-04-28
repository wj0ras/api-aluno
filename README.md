# api-aluno
Essa api foi desenvolvida para um trabalho da faculdade, CRUD de aluno/notas. Tecnologias utilizadas: Node - Express e MongoDB(atlas) - mongoose

# como utilizar a api

Faça o download ou clone o projeto, abra o terminal na pasta e execute o comando "node app.js"

# faça as requisições HTTP

Nessa api vc podera fazer o CRUD de Aluno contendo como dados Nome, Idade, Serie, Notas (sendo notas uma sub-collection que tambem tem seu endpoint para fazer o CRUD).

    Endpoint Aluno = /api/aluno

    Endpoint Notas = /api/notas

# Criar
    Aluno:
    post = ex: http://localhost:3000/api/aluno

    body json:
    {
        "name": "Welison",
        "idade": 24,
        "serie": "4° trimestre",
        "notas": [
            {
            "prova": "Prova A",
            "nota": 10
            },
            {
            "prova": "Prova B",
            "nota": 9
            } 
        ]
    }

    obs: em notas é um array, então pode ser adicionado mais de uma nota.

    Notas: 
    post = ex: http://localhost:3000/api/notas

    body json:
    {
        "prova": "Prova A",
        "nota": 10
    }

# Buscar todos dados

    get = ex:

    http://localhost:3000/api/aluno    
    http://localhost:3000/api/notas

# Buscar por id

    get = ex:  
    
    http://localhost:3000/api/aluno/id(Id do Aluno)
    http://localhost:3000/api/notas/id(Id da nota)

# Excluir dado

    delete = ex 

    http://localhost:3000/api/aluno/662e879883fcc36e297f66f7 (/id do aluno que quer excluir)
    http://localhost:3000/api/notas/662e854bc18020d9a859606d (/id da notas que quer excluir)

# Atualizar dado

    put = ex

    Aluno:

    http://localhost:3000/api/aluno/662e879883fcc36e297f66f7 (/id do aluno que quer atualizar)

    body json :

    {
        "name": "Atualização",
        "idade": 24,
        "serie": "4° trimestre",
        "notas": [
            {
            "prova": "Prova A",
            "nota": 10
            },
            {
            "prova": "Prova B",
            "nota": 9
            } 
        ]
    }

    Notas:

    put = ex: http://localhost:3000/api/notas/662e854bc18020d9a859606d (/id da notas que quer atualizar)

    body json:
    
    {
        "prova": "Prova A",
        "nota": 10
    }