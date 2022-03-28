import { Router } from "express";

import FilterItemsController from "./controllers/FilterItemsController";

import PassAllItemsHandler from "./controllers/PassAllItemsHandler";

import TakeOneProductController from "./controllers/TakeProductItem";

const filterItemsController = new FilterItemsController();

const passAllItemsHandler = new PassAllItemsHandler();

const takeOneProductController = new TakeOneProductController();

//

const routes = Router();

routes.get("/getAll", passAllItemsHandler.defaultFormart);

routes.get("/secundaryGetAll", passAllItemsHandler.alternativeFormat);

routes.get("/filter", filterItemsController.handle);

routes.get("/takeProduct/:product", takeOneProductController.handle);

export { routes };
