import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Navbar=()=>
{
    const navigate=useNavigate();
    const [adminname,setName] = useState("");
    useEffect(()=>
    {
        const name=localStorage.getItem('Adminname').replace(/"/g,'');
        // console.log(name);
        setName(name);
    },[]);
    const handleSignOut=()=>
    {
        localStorage.removeItem("Adminname");
        navigate("/");
    }
    return (
        <>
            <div className="grid grid-cols-2 gap-x-12">
                <div className="flex gap-x-3">
                    <Link className="underline text-blue-800" to="/adminhome">Car List</Link>
                    <Link className="underline text-blue-800" to="/adminhome/userdetails">user Details</Link>
                </div>
                <div className="flex justify-end items-center gap-x-4">
                    <p>{adminname}</p>
                    <button onClick={handleSignOut} type="submit" className="px-8 py-2 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2">Sign out</button>
                </div>
            </div>
        </>
    )
}
export default Navbar;