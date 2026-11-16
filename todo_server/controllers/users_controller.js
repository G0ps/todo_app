import users_repo from "../repository/users_repo.js"

export const create_new_user = async (req, res) => {
    try{

        const {user_id , password} = req.body;
        if(!user_id) { return res.json({"status" : "error" , "msg" : "add user id"})}
        if(!password) { return res.json({"status" : "error" , "msg" : "add password"})}

        let is_user_present = await users_repo.is_user_id_present(user_id)
        if(is_user_present == true)
        {
            return res.json({"status" : "failed" , "msg" : "have to use a different user_id , user_id already exists"})
        }

        const user = await users_repo.add_new_user(user_id , password);

        console.log("user created" , new_user)

        return res.json({status : "success" , "msg" : "user added successfully" , "userinfo" : user.new_user});
    }
    catch(e)
    {
        return res.json({"status" : "failed" , "msg" : "error creating user" , "error_msg" : e.message})
    }
}

export const login = async (req , res) => {
    try{
        const {user_id , password} = req.body;

        if(!user_id) { return res.json({"status" : "error" , "msg" : "add user id"})}
        if(!password) { return res.json({"status" : "error" , "msg" : "add password"})}

        let is_user_present = await users_repo.is_user_id_present(user_id)
        if(is_user_present == true)
        {
            return res.json({"status" : "failed" , "msg" : "have to use a different user_id , user_id already exists"})
        }

        const user = await users_repo.get_user_by_user_id(user_id);

        if(user.user_id === user_id && user.password === password){
            return res.status(200).json(user);
        }
    }

    catch(e)
    {
        return res.json({"status" : "failed" , "msg" : "error logining in user" , "error_msg" : e.message})
    }
}