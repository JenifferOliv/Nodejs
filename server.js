const express = require('express');
const app = express();
//Rota principal
app.get('/', (req,res)=>{
    res.send('Servidor Express rodando...');
});
//Rota sobre
app.get('/sobre', (req,res)=>{
    res.send('Pagina Sobre');
});
//Rota produtos
app.get('/produtos', (req,res)=>{
    res.send('Pagina Produtos');
});


//Inicia o servidor na porta 3000
app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});

//API REST
app.get('/api/produtos', (req,res)=>{
    const produtos=[
        {id: 1, nome: "Mouse"},
        {id: 2, nome: "Teclado"}
    ];
    res.json(produtos);
})