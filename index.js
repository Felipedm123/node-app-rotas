const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>Página Inicial</h1>
        <p>Bem-vindo ao meu projeto Node.js na nuvem.</p>
        <a href="/sobre">Sobre</a> |
        <a href="/contato">Contato</a>
    `);
});

app.get("/sobre", (req, res) => {
    res.send(`
        <h1>Sobre o Projeto</h1>
        <p>Este projeto foi criado para a disciplina de Desenvolvimento de Software em Nuvem.</p>
        <a href="/">Voltar</a>
    `);
});

app.get("/contato", (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <p>Aluno: Felipe</p>
        <p>Projeto usando Node.js, Express, GitHub, AWS e Railway.</p>
        <a href="/">Voltar</a>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});