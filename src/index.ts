import express,{json, urlencoded} from 'express';
import productsRoutes from './routes/products/index';
import authRoutes from './routes/auth/index'
import ordersRoutes from './routes/orders/index'

const PORT = 3000;
const app = express();

app.use(json());
app.use(urlencoded({extended: false}));

app.use('/products', productsRoutes);
app.use('/auth', authRoutes);
app.use('/orders', ordersRoutes);

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
});
