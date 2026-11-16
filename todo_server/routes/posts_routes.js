import express from "express"

const routes = express.Router()

import {create_new_post , delete_post, patch_post , get_posts_of_users} from "../controllers/posts_controller.js"

routes.post("/" , create_new_post)
routes.delete("/:id" , delete_post)
routes.patch("/:id" , patch_post)

routes.get("/" , get_posts_of_users)

export default routes