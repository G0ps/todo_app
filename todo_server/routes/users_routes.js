import express from "express"

const routes = express.Router()

import {create_new_user , login} from "../controllers/users_controller.js"

routes.post("/new" , create_new_user);
routes.post("/login" , login)

export default routes