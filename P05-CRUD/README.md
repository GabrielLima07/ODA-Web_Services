# TESTES REALIZADOS NO INSOMNIA

### Rotas e status HTTP

POST http://localhost:7777/alunos/
req.body
{
	"name":"aluno-1234"
}
status: 200 OK



GET http://localhost:7777/alunos/
status: 200 OK



PUT http://localhost:7777/alunos/1
req.body 
{
	"name":"aluno-8080"
}
status: 200 OK



DELETE http://localhost:7777/alunos/0
status: 200 OK
