import posts_aspects from "./models/posts.js"

const add_new_post = async (content_string) => {
    
    try{
        const new_post = new posts_aspects.model({"content_text" : content_string , is_ticked : false});

        await new_post.save();

        return {"status" : "success" , "msg" : "added post successfully"}
    }
    catch(e)
    {
        throw e 
    }
    
}

const delete_post = async(post_id) => {
    try{
        const post = await posts_aspects.model.findByIdAndDelete(post_id)

        return {"status" : "success" , "msg" : "post deleted successfully"}
    }
    catch (e) {
        throw e
    }
}

const patch_post = async (post_id , content) =>
{
    try{
        let post = await posts_aspects.model.findById(post_id)

        Object.assign(post, content);
        await post.save();

        return {"status" : "success" , "msg" : "post patched successfully"};
    }
    catch (e) {
        throw e
    }
}



const get_posts_by_user_id = async () => {
    try{
        let posts = await posts_aspects.model.find()
        
        return posts;
    }
    catch(e){
        throw e
    }
}
export default {add_new_post , delete_post , get_posts_by_user_id , patch_post}