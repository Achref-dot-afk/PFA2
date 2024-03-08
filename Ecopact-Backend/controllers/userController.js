const asyncHandler=require('express-async-handler');
const {User,validateUpdateUser}=require('../Models/User')
const {Data}=require('../Models/Data')

/***---------------------------
 * @desc delete user
 * @Route /api/user/:id
 * @Request delete
 * @access only for admin or user himself
-----------------------------*/
const deleteUser = asyncHandler(async(req,res)=>{
    const userId = req.params.id;
    const fetchedUser=await User.findById(userId);
    if(!fetchedUser) return res.status(400).send("User not found");
    const data=await Data.deleteMany({user:userId});
    await User.findByIdAndDelete(userId);
    return res.status(201).send(fetchedUser);
});

/***---------------------------
 * @desc update user
 * @Route /api/user/:id
 * @Request put
 * @access only for user logged in himself
-----------------------------*/
const updateUser = asyncHandler(async(req, res) => {
    const {error}=validateUpdateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const userId = req.params.id;
    const newUser = req.body;
    const user=await User.findById(userId);
    if(!user) return res.status(404).send("User not found");
    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password, 10);
    }
    console.log(newUser);
    const updatedUser=await User.findByIdAndUpdate(
        { _id: userId },
        { $set: newUser },
        { new: true }
    ).select("-password");
    return res.status(201).send(updatedUser);
});

const getUsers = asyncHandler(async(req,res)=>{
    const users = await User.find({});
    if(!users) return res.status(404).send('No user found');
    return res.status(200).json({users: users});
})
module.exports={deleteUser,updateUser,getUsers};