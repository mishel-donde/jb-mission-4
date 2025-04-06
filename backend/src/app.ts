import cors from "cors";
import express, { json } from "express";
import { connect } from "./db/mongoose";

// Middlewares
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";

// Routers
import accountOperationsRouter from "./routers/accountOperations";

const app = express();

export async function start() {
  await connect();

  // Middlewares
  app.use(cors());
  app.use(json());

  app.use("/operations", accountOperationsRouter);

  app.use(notFound);

  app.use(errorLogger);
  app.use(errorResponder);

  // app.listen(port, () => console.log(`${name} started on port ${port}...`));
}

export default app;
