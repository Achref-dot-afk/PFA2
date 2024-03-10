const express=require('express');
const { verifyToken, verifyTokenForOnlyUser, verifyTokenForOnlyUserOrAdmin } = require('../middlewares/verifyToken');
const { deleteUser, updateUser, getUsers, getOneUser } = require('../controllers/userController');
const { validateId } = require('../middlewares/verifyId');

const userRoutes=express.Router();

// delete user route
userRoutes.delete('/:id',validateId,verifyTokenForOnlyUserOrAdmin,deleteUser)


// api/user/:id
// update user route
userRoutes.put('/:id',validateId,verifyTokenForOnlyUser,updateUser)
// get users route
userRoutes.get('/',getUsers);
userRoutes.get('/:id',getOneUser);

module.exports={userRoutes}