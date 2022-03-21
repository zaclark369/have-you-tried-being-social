const express = require('express');
const connection = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

connection.once('open', ()=>{
   app.listen(PORT, () => console.log(`Connected on localhost:${PORT} !🌍!`)); 
});