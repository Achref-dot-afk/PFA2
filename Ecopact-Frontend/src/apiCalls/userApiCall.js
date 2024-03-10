import { toast } from 'react-toastify';
import request from './request';


const getAllUsers=async()=>{
    try{
        const res = await request.get('/api/user');
        return res;
    }catch(err){
        console.log(err);
    }
}
const getOneUser=async(id)=>{
    try{
        const res = await request.get(`/api/user/${id}`);
        return res;
    }catch(err){
        console.log(err);
    }
}
const DelUser = async (id, user) => {
    try {
        const res = await request.delete(`/api/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        return res; 
    } catch (err) {
        console.log(err);
    }
};
const UpdateUser = async (updated, id) => {
    try {
        const res = await request.put(`/api/user/${id}`, updated, {
            headers: {
                'Authorization': `Bearer ${updated.token}`
            }
        });

        return res;
    } catch (err) {
        throw err; 
    }
}


export {getAllUsers,getOneUser,DelUser,UpdateUser};