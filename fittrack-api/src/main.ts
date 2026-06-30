import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const stripSlash = (url: string) => url.replace(/\/+$/, '');
  const allowedOrigins = [
    'http://localhost:4200',
    process.env.FRONTEND_URL,
  ]
    .filter((u): u is string => Boolean(u))
    .map(stripSlash);

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(stripSlash(origin))) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  app.setGlobalPrefix('api');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`API rodando na porta ${port}`);
}
bootstrap();
