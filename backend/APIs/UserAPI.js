// create mini-express app
import exp from 'express'
import {UserModel} from '../models/UserModel.js';

export const UserApp = exp.Router()

//USER API ROUTES
 UserApp.post('/users',async(req,res)=>{
    //create user 

    const newUser=req.body
    //create user document
    const newUserDocument = new UserModel(newUser)
    //save user document in database
    let user = await newUserDocument.save()
    res.status(201).json({message:"User created successfully",user:user})
 })
UserApp.get('/users',async(req,res)=>{
    //read all users
    let usersList = await UserModel.find({status:true})
    //send response
    res.status(200).json({message:"Users list",users:usersList})

})

//read user by id
UserApp.get('/users/:id',async(req,res)=>{
    //get user id from url
    let uid = req.params.id;
    //find user by id
    let user = await UserModel.findOne({_id:uid,status:true})
    //check user 
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    //send response
    res.status(200).json({message:"User details",payload: user})
})
//delete user by id
UserApp.delete('/users/:id',async(req,res)=>{
    //get user id from url
    let uid = req.params.id;
    //find user and update status to false
    await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
    //check user
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    //send response
    res.status(200).json({message:"User deactivated successfully"})
})

//activate the User (change status to true)
//PUT(complete change in resource) and PATCH(partial changes)
UserApp.patch('/users/:id',async(req,res)=>{
    //get user id from url
    let uid = req.params.id;
    //find user and update status to false
    let user= await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
   
    //send response
    res.status(200).json({message:"User activated successfully",payload:user})
})


//update user by id 
UserApp.put('/users/:id',async(req,res)=>{

})
    