import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const Profile =()=>
{
    const navigate=useNavigate();
    const handleBack=()=>
    {
        navigate("/");
    }
    return (
        <>
            <div className="m-12">
                <div className='flex justify-between items-center'>
                    <button onClick={handleBack} className='flex p-2 hover:bg-gray-400 hover:rounded-xl hover:p-2'><ArrowBackIcon/></button>
                    <p className="font-bold flex items-center"><PersonOutlineIcon/>{localStorage.getItem('userName').replace(/"/g,'')}</p>
                </div>
            </div>
        </>
    )
};
export default Profile;