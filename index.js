import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app=express();

//Conectar la base de datos
db.authenticate()
    .then( () =>console.log('Base de datos conectada'))
    .catch( error => console.log(error));

//Definir puerto
//variables de entorno process.env.PORT
const port=process.env.PORT || 4000;

//agregar router
app.use('/',router);

//HABILITAR PUG
app.set('view engine','pug');

//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio="Agencia de viajes";
    res.locals.unaVariable = "Una nueva variable";
    console.log(res.locals);
    //console.log(req);
     next();
});



//Definir la carpeta publica
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})