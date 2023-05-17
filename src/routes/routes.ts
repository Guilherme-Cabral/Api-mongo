import { Router } from "express";
import UserController from "../controller/UserController";

const routes = Router();

routes.get('/search',UserController.search)
routes.post('/user', UserController.create);
// routes.update('/user',UserController.update)
// routes.delete('/user',UserController.delete)


export default routes;