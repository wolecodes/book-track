import app from './server';
import { swaggerDoc } from './utils/swagger';
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  swaggerDoc(app, 3000);
});
