import request from './request';

const getAllUsers=async()=>{
    try{
        const res = await request.get('/api/user');
        return res;
    }catch(err){
        console.log(err);
    }
}
export {getAllUsers};