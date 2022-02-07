import { Router } from "express";
import ClientsController from "../controllers/ClientsController";
import OrdersByClientController from "../../../../clients/infra/http/controllers/OrdersByClientController";
import CreateClientValidation from "../middleware/CreateClientValidation";
const routes = Router();

routes.post("/", CreateClientValidation, ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientsController.findById);

routes.get("/:id/pedidos", OrdersByClientController.findById);

routes.put("/:id", ClientsController.update);

//routes.delete("/:id", ClientsController.delete);

export default routes;
