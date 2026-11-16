import posts_repo from "../repository/posts_repo.js"
import users_repo from "../repository/users_repo.js"

export const create_new_post = async (req, res) => {
    try{

        const {user_id , content_string} = req.body;
        // if(!user_id) { return res.json({"status" : "error" , "msg" : "add user id"})}
        if(!content_string) { return res.json({"status" : "error" , "msg" : "add content "})}

        // let is_user_present = await users_repo.is_user_id_present(user_id)
        // if(is_user_present == false)
        // {
        //     return res.json({"status" : "failed" , "msg" : "user does not exist"})
        // }

        // let user_id_id = await users_repo.get_user_by_user_id(user_id)

        await posts_repo.add_new_post(content_string , false);

        return res.json({status : "success" , "msg" : "post added successfully"});
    }
    catch(e)
    {
        return res.json({"status" : "failed" , "msg" : "error creating post" , "error_msg" : e.message})
    }
}

export const delete_post = async(req , res) => {
    try{
        const post_id = req.params.id

        if(post_id == null) {
            return res.json({"status" : "error" , "msg" : "missing id of post"});
        }

        await posts_repo.delete_post(post_id);

        return res.status(200).json({status : "success" , "msg" : "post deleted successfully"});
    }
    catch(e)
    {
        return res.json({"status" : "failed" , "msg" : "error deleting post" , "error_msg" : e.message})
    }
}

export const patch_post = async (req , res) => {
    try{
        const post_id = req.params.id
        const content = req.body

        if(post_id == null) {
            return res.json({"status" : "error" , "msg" : "missing id of post"});
        }

        await posts_repo.patch_post(post_id , content);

        return res.status(200).json({status : "success" , "msg" : "post updated successfully"});
    }
    catch(e){
        return res.json({"status" : "failed" , "msg" : "error patching post" , "error_msg" : e.message})
    }
}

export const get_posts_of_users = async (req , res) => {
    try{
        // const user_id = req.params.user_id;

        // if(!user_id) { return res.json({"status" : "error" , "msg" : "add user id"})}

        // let is_user_present = await users_repo.is_user_id_present(user_id)
        // if(is_user_present == false)
        // {
        //     return res.json({"status" : "failed" , "msg" : "user does not exist"})
        // }

        let posts = await posts_repo.get_posts_by_user_id();
        console.log("posts : " , posts)


        return res.json({"status" : "success" , "posts" : posts});
    }
    catch(e){
        return res.json({"status" : "failed" , "msg" : "error getting posts" , "error_msg" : e.message})
    }
}