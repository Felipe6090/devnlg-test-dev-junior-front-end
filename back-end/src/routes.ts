import { Request, Response, Router } from "express";

import FilterItemsController from "./controllers/FilterItemsController";

import PassAllItemsController from "./controllers/PassAllItemsController";

const filterItemsController = new FilterItemsController();

const passAllItemsController = new PassAllItemsController();

const routes = Router();

routes.get("/getAll", passAllItemsController.handle);

routes.get("/filter", filterItemsController.handle);

export { routes };
