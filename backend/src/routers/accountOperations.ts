import { Router } from "express";
import {
  createOperation,
  getOperationsByAccountNumber,
} from "../controllers/accountOperation/controller";

import { accountOperationValidator } from "../controllers/accountOperation/validator";
import validation from "../middlewares/validation";

const accountOperationsRouter = Router();

accountOperationsRouter.get("/:accountNumber", getOperationsByAccountNumber);

accountOperationsRouter.post(
  "/",
  validation(accountOperationValidator),
  createOperation
);

export default accountOperationsRouter;
