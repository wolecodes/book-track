import app from './server';
import { swaggerDoc } from './utils/swagger';
import { config } from './config';
import dotenv from 'dotenv';

// Load environment variables from .env file in non-production environments
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
app.listen(3000, () => {
  console.log(`Server is running in ${config.nodeEnv} ${config.port}`);
  swaggerDoc(app, 3000);
});
