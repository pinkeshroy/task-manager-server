import app from './app';
import { connectDB } from './config/db';
import { redisClient } from './config/redis';

const port = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});

process.on('SIGINT', async () => {
  await redisClient.quit();
  process.exit(0);
});
