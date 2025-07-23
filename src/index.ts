import express,{json, urlencoded} from 'express';
import productsRouter from './routes/products/index';

const PORT = 3000;
const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
