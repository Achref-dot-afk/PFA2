import Profile from '../assets/profile.png'
import { IoMail } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../slices/authSlice';

const TopBar = ({mailToggled,setMailToggled,alertToggled,setAlertToggled}) => {
  const toggleMail=()=>{
    if(alertToggled){
      setAlertToggled(!alertToggled);
    }
    setMailToggled(!mailToggled);
  }
  const toggleAlert=()=>{
    if(mailToggled){
      setMailToggled(!mailToggled);
    }
    setAlertToggled(!alertToggled);
  }
  const user = useSelector(state=>state.auth.user);
  const dispatch=useDispatch();
  const nullifyUser = ()=>{
    dispatch(authActions.logout());
  }

  return (
    <div className="flex justify-end items-center pr-12 h-full text-gray-300">
      <div className="flex justify-around items-center h-full gap-2">
        <div
          className={`text-xl h-full flex items-center px-3 hover:bg-blue-800 transition-all ${
            mailToggled && " bg-blue-800"
          } cursor-pointer `}
          onClick={nullifyUser}
        >
          <Link to="/">
            <CgLogOut />
          </Link>
        </div>
        <div
          className={`text-xl h-full flex items-center px-3 hover:bg-blue-800 transition-all ${
            mailToggled && " bg-blue-800"
          } cursor-pointer `}
          onClick={toggleMail}
        >
          <IoMail />
        </div>

        <div
          className={`text-xl px-3 h-full flex items-center hover:bg-blue-800 transition-all ${
            alertToggled && " bg-blue-800"
          } cursor-pointer `}
          onClick={toggleAlert}
        >
          <MdNotificationsActive />
        </div>
        <div className="flex justify-around items-center gap-3">
          <img
            src={Profile}
            alt="profile"
            className={` w-9  my-2 h-9 rounded-full`}
          />
          {user&&<p className='font-semibold '>{user.firstName} {user.lastName}</p>}
        </div>
      </div>
    </div>
  );
}

export default TopBar
