import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

// IMPORTAMO EL FACTORY PATTERN
import {ProductFactory} from './controllers/FactoryMethodPattern';

// inicializar servidor
const app = express();

// settings
app.set('views',path.join(__dirname, 'views'));
app.engine('hbs',exphbs({
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  extname: '.hbs'
}));
app.set('view engine','hbs');
// middlewares
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res) => {

  res.render('registro');
})

app.post('/products',async(req,res) => {
  const product = req.body;
  const {db} = req.body;
  const concretProductDB = new ProductFactory();
  // seleccionar el gestor de bd
  console.log(concretProductDB)
  // elegir gestor de bd
  const gestortDB = concretProductDB.createProduct(db)?.createProduct();

  // insertar productos en la db con
  const newProductDB = await gestortDB?.insertProduct(product);
  
  // seleccionar productos de db
  const productsDB = await gestortDB?.getProductsAll();
  res.json({
    ok: true,
    productsDB
  });
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log("Servidor corriendo en el puerto "+PORT);
})