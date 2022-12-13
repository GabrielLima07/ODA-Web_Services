const express = require('express');

const server = express();

server.use(express.json());

const alunos = ['aluno-3337', 'aluno-9090', 'aluno-4554']
//GET one       READ
server.get('/alunos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(alunos[index]);
});
//GET all of them
server.get('/alunos', (req, res) => {
    return res.json(alunos)
});

//POST          CREATE
server.post('/alunos', (req, res) => {
    const { name } = req.body;
    alunos.push(name)

    return res.json(alunos)
});
//PUT           UPDATE
server.put('/alunos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    alunos[index] = name;
    
    return res.json(alunos);
})
//DELETE        DELETE
server.delete('/alunos/:index', (req, res) => {
    const {index} = req.params;
    
    alunos.splice(index, 1);
    return res.json({ message: 'O aluno saiu da sala'})
})




server.listen(7777);