import { Router } from "express";
import UserController from "../controller/UserController";
import LoginController from "../controller/loginController";

const routes = Router();

routes.get('/search', new UserController().search)
routes.post('/user', new UserController().create);
// routes.update('/user',new UserController().update)
routes.delete('/user/deleteAll', new UserController().delete)
routes.post('/login', new LoginController().login)


export default routes;