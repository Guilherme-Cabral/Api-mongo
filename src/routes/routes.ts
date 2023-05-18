import { Router } from "express";
import UserController from "../controller/UserController";
import LoginController from "../controller/loginController";

const routes = Router();

routes.get('/search', UserController.search)
routes.post('/user', UserController.create);
// routes.update('/user',UserController.update)
routes.delete('/user/deleteAll', UserController.delete)

routes.post('/login', LoginController.login)


export default routes;