import { OpenAPIHono } from '@hono/zod-openapi';
import type { PinoLogger } from 'hono-pino';
import notFound from './middlewares/not-found';
import onError from './middlewares/on-error';
import { logger } from './middlewares/pino-logger';

type AppBindings = {
  Variables: {
    logger: PinoLogger;
  };
};

const app = new OpenAPIHono<AppBindings>();

app.use(logger());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.notFound(notFound);

app.onError(onError);

export default app;
