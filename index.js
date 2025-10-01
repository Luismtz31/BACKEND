// index.js - MODIFICACIÓN TEMPORAL PARA DEPURAR

// ... (todo el código de express, cors y conexión a DB igual que antes)

// Ruta de prueba (ESTA SÍ LA DEJAMOS)
app.get('/', (req, res) => {
  res.send('API Backend funcionando');
});

// --- SECCIÓN A COMENTAR ---
// Importar rutas
/* <---- INICIA EL COMENTARIO
const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes(db));

const clientesRoutes = require('./routes/clientes');
app.use('/api/clientes', clientesRoutes(db));

const ventasRoutes = require('./routes/ventas');
app.use('/api/ventas', ventasRoutes(db));

// ... comenta TODAS las demás rutas también ...

const metodosPagoRoutes = require('./routes/metodos_pago');
app.use('/api/metodos_pago', metodosPagoRoutes(db));
*/ // <---- TERMINA EL COMENTARIO

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
