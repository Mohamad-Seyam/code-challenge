import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import resourceRoutes from './routes/ResourcesRoute';
import sequelize from './config/dbConfig';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
    this.initializeDatabase();
  }

  private initializeMiddlewares(): void {

    // Body parsers
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // Security headers
    this.app.use(helmet());

    // JSON size limit
    this.app.use(
      express.json({
        limit: '50mb',
      })
    );

    // Logging in development
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    }
  }

  private initializeRoutes(): void {
    this.app.use('/api/v1', resourceRoutes);
  }

  private initializeErrorHandling(): void {
    // 404 handler
    this.app.use('*', (req, res) => {
      res.status(404).json({
        message: 'API not found',
      });
    });
  }

  private initializeDatabase(): void {
    sequelize.sync()
      .then(() => console.log('Database connected'))
      .catch((err) => console.error('Database connection error:', err));
  }

  public listen(port: string): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default App;
