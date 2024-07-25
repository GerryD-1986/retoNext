import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (request, response)=> {
    const {email, password, username} = request.body


    try{

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
    
        const userSaved = await newUser.save();
        
        jwt.sign({
            id: userSaved._id,
        });

        //response.json({
        //    id: userSaved._id,
        //    username: userSaved.username,
        //    email: userSaved.email,
        //});

    }catch(error){
      console.log(error);
    }

};

export const login = (request, response)=> response.send("login");