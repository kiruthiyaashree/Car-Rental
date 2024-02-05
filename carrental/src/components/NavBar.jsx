import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const NavBar=()=>
{
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    useEffect(()=>
    {
        const username=localStorage.getItem('userName');
        // console.log(username);
        setIsAuthenticated(!!username);
    },[]);
    const handleSignOut=()=>
    {
        localStorage.removeItem('userName');
        // localStorage.removeItem('signUpData');
        setIsAuthenticated(false);  
    }
    return (
        <>
            <div className="flex justify-around">
                <div>
                    <h2 className="mx-2 my-10 px-3 py-2">Your Chariot</h2>
                </div>

                <div>
                    <ul className="flex">
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Home</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Rent Car</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Business Consulting</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">About Us</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Blog</li>
                    </ul>
                </div>
                {
                    isAuthenticated ?
                    (
                        <div className='flex'>
                            <Link to='/profile' className='cursor-pointer'><p className='flex mx-2 my-10 px-3 py-2'><PersonOutlineIcon/>{localStorage.getItem('userName').replace(/"/g, '')}</p></Link>
                            <button className='mx-2 my-10 px-3 py-2 border border-black rounded-xl hover:bg-blue-800 hover:text-white' onClick={handleSignOut}>Sign out</button>
                        </div>
                    ):
                    (
                    <div>
                        <ul className="flex">
                            <Link to='/signin' className="cursor-pointer"><li className="mx-2 my-10 px-3 py-2 border border-black rounded-xl hover:bg-blue-800 hover:text-white">Login</li></Link>
                            <Link to='/signup' className="cursor-pointer"><li className="mx-2 my-10 px-3 py-2 border border-black rounded-xl hover:bg-blue-800 hover:text-white">SignUp</li></Link>
                        </ul>
                    </div>
                    )
                }
                
            </div>
        </>
    )
}
export default NavBar