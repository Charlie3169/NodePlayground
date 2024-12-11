import express, { Application } from 'express';
import expressOasGenerator from 'express-oas-generator';
import todoRoutes from './routes/todoRoutes';

const app: Application = express();
const port = process.env.PORT || 3004;

// Initialize Swagger documentation
expressOasGenerator.init(app, {});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
