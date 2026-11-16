import users_aspects from "./models/users.js"

const add_new_user = async (user_id , password) => {
    
    try{
        const new_user = new users_aspects.model({"user_id" : user_id , "password" : password});

        await new_user.save();

        return {"status" : "success" , "msg" : "added new user successfully" , new_user}
    }
    catch(e)
    {
        throw e; 
    }
    
}

const is_user_id_present = async (user_id) => {
    try{
        const user = await users_aspects.model.findOne({user_id : user_id});

        if(user != null) {
            return true;
        }
        else {
            return false;
        }
    }   
    catch(e){
        throw e
    }
}

const get_user_by_user_id = async (user_id) => {
    try{
        const user = await users_aspects.model.findOne({user_id : user_id});

        return user;
    }
    catch(e)
    {
        throw e;
    }
}

export default {add_new_user , is_user_id_present , get_user_by_user_id}
