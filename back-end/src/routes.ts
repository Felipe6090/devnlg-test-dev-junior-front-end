import { Request, Response, Router } from "express";

import FilterItemsController from "./controllers/FilterItemsController";

import PassAllItemsController from "./controllers/PassAllItemsController";

import SecundaryPassAllItemsController from "./controllers/SecundaryPassAllItemsController";

import TakeOneProductController from "./controllers/TakeOneProductController";

const filterItemsController = new FilterItemsController();

const passAllItemsController = new PassAllItemsController();

const secundaryPassAllItemsController = new SecundaryPassAllItemsController();

const takeOneProductController = new TakeOneProductController();

const routes = Router();

routes.get("/getAll", passAllItemsController.handle);

routes.get("/secundaryGetAll", secundaryPassAllItemsController.handle);

routes.get("/filter", filterItemsController.handle);

routes.get("/takeProduct/:product", takeOneProductController.handle);

export { routes };
